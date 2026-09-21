import { useState, FormEvent } from 'react';
import type { ReactNode } from 'react';
import {
  Phone,
  Monitor,
  Bug,
  Wind,
  Cpu,
  Wifi,
  Database,
  MapPin,
  Building2,
  Activity,
  Car,
  Wrench,
} from 'lucide-react';

const PHONE = '+7 908 863-31-66';
const PHONE_LINK = 'tel:+79088633166';
const EMAIL = 'shirov0606@mail.ru';

type Task = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const tasks: Task[] = [
  { icon: <Monitor size={20} />, title: 'Windows и программы', desc: 'Установка, переустановка, настройка' },
  { icon: <Bug size={20} />, title: 'Вирусы и реклама', desc: 'Лечение, удаление' },
  { icon: <Wind size={20} />, title: 'Чистка от пыли', desc: 'Системный блок, ноутбук, термопаста' },
  { icon: <Cpu size={20} />, title: 'Сборка и апгрейд ПК', desc: 'Под ключ, замена комплектующих' },
  { icon: <Wifi size={20} />, title: 'Интернет и Wi-Fi', desc: 'Настройка роутера, сети' },
  { icon: <Database size={20} />, title: 'Восстановление данных', desc: 'HDD, SSD, флешки' },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-5 flex items-center justify-between gap-5 py-3.5">
        <a href="#top" className="text-slate-900 font-bold text-base no-underline">
          Сергей <span className="text-slate-500 font-normal">· компьютерный мастер</span>
        </a>
        <a href={PHONE_LINK} className="text-blue-700 font-bold text-base no-underline whitespace-nowrap">
          {PHONE}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-5">
        <p className="text-sm font-semibold text-blue-700 mb-3">Нижний Новгород и область</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Ремонт компьютеров и ноутбуков
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
          Сергей — компьютерный мастер. Windows, вирусы, чистка, сборка ПК.
          Оставьте заявку — перезвоню в течение часа, уточню детали и назову стоимость работ.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#form"
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white no-underline bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Оставить заявку
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-700 no-underline border border-slate-300 hover:border-blue-600 hover:text-blue-700 transition-colors"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function Tasks() {
  return (
    <section className="py-12" id="services">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Что делаю</h2>
        <p className="text-slate-500 mb-6">
          Точную стоимость назову после уточнения деталей — перезвоню и согласуем цену.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 border border-blue-100 rounded-lg mb-3">
                <span className="text-blue-700">{task.icon}</span>
              </span>
              <h3 className="font-semibold text-slate-900 mb-1">{task.title}</h3>
              <p className="text-sm text-slate-500">{task.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Zones() {
  return (
    <section className="py-12 bg-white border-y border-slate-200" id="zones">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Выезд</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg">
              <MapPin size={24} className="text-blue-700" />
            </span>
            <h3 className="font-semibold text-slate-900 mt-3 mb-1">Кстовский район</h3>
            <p className="text-sm text-slate-500">Выезжаю по району</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg">
              <Building2 size={24} className="text-blue-700" />
            </span>
            <h3 className="font-semibold text-slate-900 mt-3 mb-1">Нижний Новгород</h3>
            <p className="text-sm text-slate-500">Выезд по городу</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg">
              <Activity size={24} className="text-blue-700" />
            </span>
            <h3 className="font-semibold text-slate-900 mt-3 mb-1">Диагностика</h3>
            <p className="text-sm text-slate-500">Осмотр и диагностика при выезде</p>
          </div>
        </div>
        <p className="text-center text-sm text-slate-500">Другие районы области — по договорённости.</p>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { num: '01', icon: <Phone size={20} />, title: 'Звонок', desc: 'Обсуждаем задачу' },
    { num: '02', icon: <Car size={20} />, title: 'Выезд', desc: 'По договорённости' },
    { num: '03', icon: <Wrench size={20} />, title: 'Ремонт', desc: 'При вас, до результата' },
  ];

  return (
    <section className="py-12" id="how">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Как всё пройдёт</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 border border-blue-100 rounded-lg">
                  <span className="text-blue-700">{step.icon}</span>
                </span>
                <span className="text-2xl font-bold text-slate-300">{step.num}</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusText, setStatusText] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setStatus('error');
      setStatusText('Укажите имя и телефон.');
      return;
    }

    setStatus('loading');
    setStatusText('');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim() || 'Не указано',
          _subject: `Новая заявка от ${name.trim()}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setStatusText(`${name}, заявка отправлена! Сергей перезвонит в течение часа.`);
        setName('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch {
      const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(`Заявка от ${name}`)}&body=${encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\nПроблема: ${message || 'Не указана'}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setStatusText(`${name}, заявка принята! Сергей перезвонит в течение часа.`);
      setName('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <section className="py-14 bg-white border-t border-slate-200" id="form">
      <div className="max-w-4xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Сломалось?</h2>
          <p className="text-slate-600 mb-5">
            Оставьте заявку — Сергей перезвонит в течение часа, уточнит детали и назовёт стоимость работ.
          </p>
          <a href={PHONE_LINK} className="text-2xl md:text-3xl font-bold text-blue-700 no-underline">
            {PHONE}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Имя
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван"
              className="w-full mt-1.5 px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </label>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Телефон
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="w-full mt-1.5 px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </label>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Что случилось?
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              placeholder="Не включается, тормозит..."
              className="w-full mt-1.5 px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
          </button>
          {statusText && (
            <p className={`mt-3.5 text-sm font-semibold ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {statusText}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-5 text-sm text-slate-400">
      <div className="max-w-4xl mx-auto px-5 flex justify-between gap-4 flex-wrap items-center">
        <span>© {new Date().getFullYear()} Компьютерный мастер Сергей · Нижний Новгород</span>
        <a href={PHONE_LINK} className="text-white font-semibold no-underline">
          {PHONE}
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Tasks />
        <Zones />
        <How />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}