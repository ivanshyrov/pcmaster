import tls from 'tls';

const HOST = 'smtp.mail.ru';
const PORT = 465;

function encodeHeader(value) {
  // RFC 2047 encoded-word для UTF-8
  return '=?UTF-8?B?' + Buffer.from(value, 'utf8').toString('base64') + '?=';
}

function readResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffer = '';
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error('SMTP timeout'));
    }, 15000);

    const onData = (chunk) => {
      buffer += chunk.toString('utf8');
      if (/\r\n$/.test(buffer)) {
        const lines = buffer.trim().split('\r\n');
        const last = lines[lines.length - 1];
        const code = parseInt(last.slice(0, 3), 10);
        cleanup();
        resolve({ code, text: buffer });
      }
    };

    const onError = (err) => {
      cleanup();
      reject(err);
    };

    const cleanup = () => {
      clearTimeout(timeout);
      socket.removeListener('data', onData);
      socket.removeListener('error', onError);
    };

    socket.on('data', onData);
    socket.on('error', onError);
  });
}

function sendCommand(socket, command) {
  socket.write(command + '\r\n');
  return readResponse(socket);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, phone, message } = req.body || {};
  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: 'Укажите имя и телефон' });
  }

  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;
  const to = process.env.MAIL_TO || user;

  if (!user || !pass) {
    return res.status(500).json({ ok: false, error: 'Почта не настроена' });
  }

  const subject = `Новая заявка от ${name}`;
  const text = `Имя: ${name}\nТелефон: ${phone}\nПроблема: ${message || 'Не указана'}`;

  let socket;
  try {
    socket = tls.connect({ host: HOST, port: PORT, servername: HOST });
    await new Promise((resolve, reject) => {
      socket.once('connect', resolve);
      socket.once('error', reject);
    });

    let r = await readResponse(socket); // 220 greeting
    if (r.code !== 220) throw new Error('SMTP greeting failed');

    r = await sendCommand(socket, 'EHLO pcmaster.vercel.app');
    if (r.code !== 250) throw new Error('EHLO failed');

    r = await sendCommand(socket, 'AUTH LOGIN');
    if (r.code !== 334) throw new Error('AUTH LOGIN failed');

    r = await sendCommand(socket, Buffer.from(user, 'utf8').toString('base64'));
    if (r.code !== 334) throw new Error('AUTH user failed');

    r = await sendCommand(socket, Buffer.from(pass, 'utf8').toString('base64'));
    if (r.code !== 235) throw new Error('AUTH password failed');

    r = await sendCommand(socket, `MAIL FROM:<${user}>`);
    if (r.code !== 250) throw new Error('MAIL FROM failed');

    r = await sendCommand(socket, `RCPT TO:<${to}>`);
    if (r.code !== 250 && r.code !== 251) throw new Error('RCPT TO failed');

    r = await sendCommand(socket, 'DATA');
    if (r.code !== 354) throw new Error('DATA failed');

    const headers = [
      `From: ${encodeHeader('Компьютерный мастер Сергей')} <${user}>`,
      `To: <${to}>`,
      `Subject: ${encodeHeader(subject)}`,
      'Content-Type: text/plain; charset=utf-8',
      'Content-Transfer-Encoding: 8bit',
      'MIME-Version: 1.0',
    ].join('\r\n');

    socket.write(headers + '\r\n\r\n' + text.replace(/\r?\n/g, '\r\n') + '\r\n.\r\n');
    r = await readResponse(socket);
    if (r.code !== 250) throw new Error('DATA send failed');

    await sendCommand(socket, 'QUIT');

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send mail error:', err);
    return res.status(500).json({ ok: false, error: 'Не удалось отправить письмо' });
  } finally {
    if (socket) socket.destroy();
  }
}