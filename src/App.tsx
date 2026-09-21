import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Monitor,
  FileText,
  LayoutGrid,
  Shield,
  Bug,
  Zap,
  Cpu,
  Wind,
  Laptop,
  Thermometer,
  Wrench,
  ArrowUpRight,
  Wifi,
  Globe,
  Printer,
  Database,
  MapPin,
  Building2,
  Activity,
} from 'lucide-react';

const PHONE = '+7 908 863-31-66';
const PHONE_LINK = 'tel:+79088633166';
const EMAIL = 'shirov0606@mail.ru';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0e14]/85 backdrop-blur-xl border-b border-[#2a3346]">
      <div className="max-w-[1080px] mx-auto px-5 flex items-center justify-between gap-5 py-3.5">
        <a href="#top" className="flex items-center gap-2 text-[#e6ebf4] no-underline font-mono text-lg font-bold">
          <span className="text-[#34d399]">&gt;</span>
          <span>СЕРГЕЙ<span className="text-[#a78bfa]">_pc_master</span></span>
        </a>
        <nav className="hidden md:flex gap-5 font-mono">
          <a href="#services" className="text-[#8b95a7] hover:text-[#a78bfa] transition-colors text-sm no-underline">[услуги]</a>
          <a href="#zones" className="text-[#8b95a7] hover:text-[#a78bfa] transition-colors text-sm no-underline">[выезд]</a>
          <a href="#how" className="text-[#8b95a7] hover:text-[#a78bfa] transition-colors text-sm no-underline">[этапы]</a>
        </nav>
        <a href={PHONE_LINK} className="text-[#34d399] font-bold text-base md:text-lg no-underline whitespace-nowrap">
          {PHONE}
        </a>
      </div>
    </header>
  );
}

function Terminal() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const text1 = '✓ найдено: 214 процессов, 3 вируса';
  const text2 = '✓ устранено. ПК снова как новый.';

  useEffect(() => {
    let i = 0;
    const t1 = setInterval(() => {
      if (i < text1.length) { setLine1(text1.slice(0, i + 1)); i++; }
      else clearInterval(t1);
    }, 24);

    let j = 0;
    const timeout = setTimeout(() => {
      const t2 = setInterval(() => {
        if (j < text2.length) { setLine2(text2.slice(0, j + 1)); j++; }
        else clearInterval(t2);
      }, 24);
    }, 1400);

    return () => { clearInterval(t1); clearTimeout(timeout); };
  }, []);

  return (
    <div className="bg-[#0d1017] border border-[#2a3346] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a2130] border-b border-[#2a3346]">
        <span className="w-3 h-3 rounded-full bg-[#f87171]" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-[#34d399]" />
        <span className="ml-2 font-mono text-xs text-[#8b95a7]">сергей@nn:~</span>
      </div>
      <div className="px-5 py-4 font-mono text-sm min-h-[160px]">
        <p className="mb-2.5"><span className="text-[#34d399]">$</span> master --diagnose</p>
        <p className="mb-2.5 text-[#8b95a7]">{line1}</p>
        <p className="mb-2.5"><span className="text-[#34d399]">$</span> master --fix</p>
        <p className="mb-2.5 text-[#8b95a7]">{line2}</p>
        <p className="mb-0"><span className="text-[#34d399]">$</span> <span className="text-[#a78bfa] t-cursor">▊</span></p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="blob w-[380px] h-[380px] bg-[#a78bfa] -top-20 -right-16" />
      <div className="blob w-[300px] h-[300px] bg-[#fb923c] -bottom-24 -left-20" style={{ animationDelay: '-6s' }} />
      <div className="max-w-[1080px] mx-auto px-5 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[#34d399] text-sm mb-3.5">// компьютерный мастер сергей · нижний новгород</div>
          <h1 className="text-4xl md:text-[44px] leading-[1.15] mb-4 tracking-tight">
            Чиню <span className="gradient-text">всё</span>, что<br />работает на электричестве
          </h1>
          <p className="text-lg text-[#8b95a7] mb-8">
            Windows, сборка ПК, пыль, вирусы, программы. <span className="text-[#a78bfa] font-bold">Быстро и честно.</span>
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href={PHONE_LINK} className="inline-block px-7 py-3.5 rounded-xl font-bold text-base text-white no-underline bg-gradient-to-r from-[#fb923c] to-red-500 shadow-[0_6px_24px_rgba(251,146,60,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(251,146,60,0.5)] transition-all">
              Вызвать Сергея
            </a>
            <a href="#form" className="inline-block px-7 py-3.5 rounded-xl font-bold text-base no-underline text-[#a78bfa] border-2 border-[#a78bfa] bg-transparent hover:bg-[#a78bfa]/10 hover:-translate-y-0.5 transition-all">
              Заявка онлайн
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  cat: string;
};

const services: Service[] = [
  { icon: <Monitor size={22} />, title: 'Windows', desc: 'Установка / переустановка', cat: 'soft' },
  { icon: <FileText size={22} />, title: 'MS Office', desc: 'Word, Excel, PowerPoint', cat: 'soft' },
  { icon: <LayoutGrid size={22} />, title: 'Программы', desc: 'Любые приложения', cat: 'soft' },
  { icon: <Shield size={22} />, title: 'Антивирус', desc: 'Установка + настройка', cat: 'soft' },
  { icon: <Bug size={22} />, title: 'Вирусы', desc: 'Лечение, удаление, реклама', cat: 'soft' },
  { icon: <Zap size={22} />, title: 'Оптимизация', desc: 'Ускорение Windows', cat: 'soft' },
  { icon: <Cpu size={22} />, title: 'Сборка ПК', desc: 'Под ключ, с комплектующими', cat: 'hard' },
  { icon: <Wind size={22} />, title: 'Чистка от пыли', desc: 'Системный блок', cat: 'hard' },
  { icon: <Laptop size={22} />, title: 'Ноутбук + термопаста', desc: 'Чистка и профилактика', cat: 'hard' },
  { icon: <Thermometer size={22} />, title: 'Термопаста', desc: 'Замена, против перегрева', cat: 'hard' },
  { icon: <Wrench size={22} />, title: 'Комплектующие', desc: 'Замена, работа', cat: 'hard' },
  { icon: <ArrowUpRight size={22} />, title: 'Апгрейд', desc: 'Модернизация ПК', cat: 'hard' },
  { icon: <Wifi size={22} />, title: 'Wi-Fi роутер', desc: 'Настройка, пароль, сигнал', cat: 'net' },
  { icon: <Globe size={22} />, title: 'Интернет', desc: 'Настройка на ПК', cat: 'net' },
  { icon: <Printer size={22} />, title: 'Принтер', desc: 'Подключение, оргтехника', cat: 'net' },
];

const extraService: Service = {
  icon: <Database size={22} />,
  title: 'Восстановление данных',
  desc: 'HDD, SSD, флешки',
  cat: 'all',
};

const tabs = [
  { id: 'soft', label: 'ПО' },
  { id: 'hard', label: 'Железо' },
  { id: 'net', label: 'Сеть' },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="relative bg-[#141926] border border-[#2a3346] rounded-2xl p-5 overflow-hidden card-glow transition-all duration-200 hover:-translate-y-1 group"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#a78bfa] to-[#fb923c] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="inline-flex items-center justify-center w-11 h-11 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-xl mb-3 transition-all group-hover:bg-[#a78bfa]/20 group-hover:scale-105">
        <span className="text-[#a78bfa]">{service.icon}</span>
      </span>
      <h3 className="text-lg font-bold mb-1.5">{service.title}</h3>
      <p className="text-[#8b95a7] text-sm mb-0">{service.desc}</p>
    </motion.div>
  );
}

function Services() {
  const [activeTab, setActiveTab] = useState('soft');
  const filtered = services.filter((s) => s.cat === activeTab);

  return (
    <section className="py-16" id="services">
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="flex items-center justify-between gap-5 flex-wrap mb-8">
          <h2 className="text-3xl tracking-tight">Услуги <span className="gradient-text">//</span></h2>
          <div className="flex gap-1 bg-[#141926] border border-[#2a3346] rounded-xl p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono text-sm font-bold px-4 py-2 rounded-lg border-none cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#a78bfa] text-[#0b0e14] shadow-[0_0_16px_rgba(167,139,250,0.4)]'
                    : 'bg-transparent text-[#8b95a7] hover:text-[#e6ebf4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <ServiceCard key={s.title + i} service={s} />
          ))}
        </div>

        <div className="mt-4">
          <div className="bg-[#141926] border border-[#2a3346] rounded-2xl p-5 flex items-center gap-5 flex-wrap card-glow transition-all duration-200 hover:-translate-y-1 group">
            <span className="inline-flex items-center justify-center w-11 h-11 bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-xl shrink-0 transition-all group-hover:bg-[#a78bfa]/20">
              <span className="text-[#a78bfa]"><Database size={22} /></span>
            </span>
            <div className="flex-1 min-w-[150px]">
              <h3 className="text-lg font-bold mb-1">{extraService.title}</h3>
              <p className="text-[#8b95a7] text-sm">{extraService.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Zones() {
  return (
    <section className="py-16 bg-[#0d1017] border-y border-[#2a3346]" id="zones">
      <div className="max-w-[1080px] mx-auto px-5">
        <h2 className="text-3xl tracking-tight mb-8">Выезд <span className="gradient-text">//</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div className="bg-[#141926] border border-[#2a3346] rounded-2xl p-7 text-center transition-transform hover:-translate-y-1">
            <span className="inline-flex items-center justify-center w-[52px] h-[52px] bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-xl">
              <MapPin size={26} className="text-[#a78bfa]" />
            </span>
            <h3 className="text-lg font-bold mt-3 mb-2">Кстовский район</h3>
            <div className="font-mono text-2xl font-extrabold text-[#a78bfa]">БЕСПЛАТНО</div>
            <p className="text-[#8b95a7] text-sm mt-2">Выезд без оплаты</p>
          </div>
          <div className="bg-gradient-to-b from-[#fb923c]/[0.08] to-[#141926] border border-[#fb923c]/50 rounded-2xl p-7 text-center transition-transform hover:-translate-y-1">
            <span className="inline-flex items-center justify-center w-[52px] h-[52px] bg-[#fb923c]/10 border border-[#fb923c]/35 rounded-xl">
              <Building2 size={26} className="text-[#fb923c]" />
            </span>
            <h3 className="text-lg font-bold mt-3 mb-2">Нижний Новгород</h3>
            <div className="font-mono text-2xl font-extrabold text-[#fb923c]">500 ₽</div>
            <p className="text-[#8b95a7] text-sm mt-2">Выезд по городу</p>
          </div>
          <div className="bg-[#141926] border border-[#2a3346] rounded-2xl p-7 text-center transition-transform hover:-translate-y-1">
            <span className="inline-flex items-center justify-center w-[52px] h-[52px] bg-[#a78bfa]/10 border border-[#a78bfa]/30 rounded-xl">
              <Activity size={26} className="text-[#a78bfa]" />
            </span>
            <h3 className="text-lg font-bold mt-3 mb-2">Диагностика</h3>
            <div className="font-mono text-2xl font-extrabold text-[#a78bfa]">БЕСПЛАТНО</div>
            <p className="text-[#8b95a7] text-sm mt-2">При любом выезде</p>
          </div>
        </div>
        <p className="text-center text-[#8b95a7] text-sm">Есть и другие районы области — уточните по телефону.</p>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { num: '01', title: 'Звонок', desc: 'Обсуждаем задачу' },
    { num: '02', title: 'Выезд', desc: 'По договорённости' },
    { num: '03', title: 'Чиню', desc: 'При вас, до результата' },
  ];

  return (
    <section className="py-16" id="how">
      <div className="max-w-[1080px] mx-auto px-5">
        <h2 className="text-3xl tracking-tight mb-8">Как всё пройдёт <span className="gradient-text">//</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-[#141926] border border-[#2a3346] rounded-2xl p-6 transition-transform hover:-translate-y-1 overflow-hidden group">
              <span className="absolute right-4 bottom-2 text-4xl text-[#a78bfa]/15 font-bold group-hover:text-[#a78bfa]/25 transition-colors">→</span>
              <span className="font-mono text-2xl font-extrabold text-[#fb923c]">{step.num}</span>
              <h3 className="text-lg font-bold mt-2.5 mb-1">{step.title}</h3>
              <p className="text-[#8b95a7] text-sm">{step.desc}</p>
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
        setStatusText(`${name}, заявка отправлена! Перезвоню в течение часа.`);
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
      setStatusText(`${name}, заявка принята! Перезвоню в течение часа.`);
      setName('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#0e1726] to-[#16233a] border-t border-[#2a3346]" id="form">
      <div className="max-w-[1080px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-2.5">Сломалось?</h2>
          <p className="text-[#8b95a7] text-lg mb-5">Оставьте заявку — Сергей перезвонит в течение часа.</p>
          <a href={PHONE_LINK} className="font-mono text-3xl md:text-4xl font-extrabold text-[#34d399] no-underline">
            {PHONE}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#141926] border border-[#2a3346] rounded-2xl p-7">
          <label className="block text-sm font-semibold text-[#8b95a7] mb-3.5">
            Имя
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван"
              className="w-full mt-1.5 px-3.5 py-3 bg-[#0d1017] border border-[#2a3346] rounded-lg text-[15px] text-[#e6ebf4] placeholder:text-[#8b95a7]/50 focus:outline-none focus:border-[#a78bfa] focus:shadow-[0_0_0_3px_rgba(167,139,250,0.15)] transition-all"
            />
          </label>
          <label className="block text-sm font-semibold text-[#8b95a7] mb-3.5">
            Телефон
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="w-full mt-1.5 px-3.5 py-3 bg-[#0d1017] border border-[#2a3346] rounded-lg text-[15px] text-[#e6ebf4] placeholder:text-[#8b95a7]/50 focus:outline-none focus:border-[#a78bfa] focus:shadow-[0_0_0_3px_rgba(167,139,250,0.15)] transition-all"
            />
          </label>
          <label className="block text-sm font-semibold text-[#8b95a7] mb-3.5">
            Проблема
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              placeholder="Не включается, тормозит..."
              className="w-full mt-1.5 px-3.5 py-3 bg-[#0d1017] border border-[#2a3346] rounded-lg text-[15px] text-[#e6ebf4] placeholder:text-[#8b95a7]/50 focus:outline-none focus:border-[#a78bfa] focus:shadow-[0_0_0_3px_rgba(167,139,250,0.15)] transition-all resize-none"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 rounded-xl font-bold text-base text-white border-none cursor-pointer bg-gradient-to-r from-[#fb923c] to-red-500 shadow-[0_6px_24px_rgba(251,146,60,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(251,146,60,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Отправка...' : 'Отправить'}
          </button>
          {statusText && (
            <p className={`mt-3.5 text-sm font-semibold ${status === 'error' ? 'text-[#f87171]' : 'text-[#34d399]'}`}>
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
    <footer className="bg-[#0a0d13] border-t border-[#2a3346] py-5 text-sm text-[#8b95a7]">
      <div className="max-w-[1080px] mx-auto px-5 flex justify-between gap-4 flex-wrap items-center">
        <span className="font-mono text-[#34d399]">&gt;_ сергей@nn:~ <span className="text-[#a78bfa] t-cursor">▊</span></span>
        <span>© {new Date().getFullYear()} Компьютерный мастер Сергей · НН</span>
        <a href={PHONE_LINK} className="text-[#34d399] font-bold no-underline">{PHONE}</a>
      </div>
    </footer>
  );
}

function Fab() {
  return (
    <a
      href={PHONE_LINK}
      aria-label="Позвонить"
      className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#fb923c] to-red-500 flex items-center justify-center shadow-[0_8px_28px_rgba(251,146,60,0.45)] animate-pulse-fab no-underline"
    >
      <Phone size={24} className="text-white" />
    </a>
  );
}

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Zones />
        <How />
        <FormSection />
      </main>
      <Footer />
      <Fab />
    </>
  );
}