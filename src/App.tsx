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
  Truck,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

const PHONE = '+7 908 863-31-66';
const PHONE_LINK = 'tel:+79088633166';
const EMAIL = 'petya.down@mail.ru';

type Task = {
  icon: ReactNode;
  title: string;
  desc: string;
  iconClass: string;
  iconBg: string;
};

const tasks: Task[] = [
  {
    icon: <Monitor size={20} />,
    title: 'Windows и программы',
    desc: 'Установка, переустановка, настройка',
    iconClass: 'text-blue-600',
    iconBg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: <Bug size={20} />,
    title: 'Вирусы и реклама',
    desc: 'Лечение, удаление',
    iconClass: 'text-rose-600',
    iconBg: 'bg-rose-50 border-rose-100',
  },
  {
    icon: <Wind size={20} />,
    title: 'Чистка от пыли',
    desc: 'Системный блок, ноутбук, термопаста',
    iconClass: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Сборка и апгрейд ПК',
    desc: 'Под ключ, замена комплектующих',
    iconClass: 'text-violet-600',
    iconBg: 'bg-violet-50 border-violet-100',
  },
  {
    icon: <Wifi size={20} />,
    title: 'Интернет и Wi-Fi',
    desc: 'Настройка роутера, сети',
    iconClass: 'text-sky-600',
    iconBg: 'bg-sky-50 border-sky-100',
  },
  {
    icon: <Database size={20} />,
    title: 'Восстановление данных',
    desc: 'HDD, SSD, флешки',
    iconClass: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-100',
  },
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-5 py-14 md:py-20">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-4">
          <MapPin size={14} />
          Нижний Новгород и область
        </span>
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
            className="inline-block px-6 py-3 rounded-lg font-semibold text-white no-underline bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
          >
            Оставить заявку
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-700 no-underline border border-slate-300 bg-white hover:border-blue-600 hover:text-blue-700 transition-colors"
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
    <section className="py-12 bg-slate-50" id="services">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex items-start gap-3 mb-2">
          <span className="w-1 h-8 bg-blue-600 rounded-full mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Что делаю</h2>
            <p className="text-slate-500 mt-1">
              Точную стоимость назову после уточнения деталей — перезвоню и согласуем цену.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className={`inline-flex items-center justify-center w-10 h-10 ${task.iconBg} border rounded-lg mb-3`}
              >
                <span className={task.iconClass}>{task.icon}</span>
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
  const zones = [
    {
      icon: <MapPin size={24} />,
      title: 'Кстовский район',
      desc: 'Выезжаю по району',
      iconClass: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-100',
      cardBg: 'bg-emerald-50/60',
    },
    {
      icon: <Building2 size={24} />,
      title: 'Нижний Новгород',
      desc: 'Выезд по городу',
      price: '500 ₽',
      iconClass: 'text-blue-600',
      iconBg: 'bg-blue-50 border-blue-100',
      cardBg: 'bg-blue-50/60',
    },
    {
      icon: <Activity size={24} />,
      title: 'Диагностика',
      desc: 'Осмотр и диагностика при выезде',
      iconClass: 'text-violet-600',
      iconBg: 'bg-violet-50 border-violet-100',
      cardBg: 'bg-violet-50/60',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200" id="zones">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex items-start gap-3 mb-6">
          <span className="w-1 h-8 bg-blue-600 rounded-full mt-1" />
          <h2 className="text-2xl font-bold text-slate-900">Выезд</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {zones.map((zone) => (
            <div
              key={zone.title}
              className={`${zone.cardBg} border border-slate-200 rounded-xl p-6 text-center shadow-sm`}
            >
              <span
                className={`inline-flex items-center justify-center w-12 h-12 ${zone.iconBg} border rounded-lg`}
              >
                <span className={zone.iconClass}>{zone.icon}</span>
              </span>
              <h3 className="font-semibold text-slate-900 mt-3 mb-1">{zone.title}</h3>
              <p className="text-sm text-slate-600">{zone.desc}</p>
              {zone.price && (
                <p className="mt-2 inline-block text-base font-bold text-white bg-blue-600 rounded-full px-3.5 py-1">
                  {zone.price}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500">Другие районы области — по договорённости.</p>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    {
      num: '01',
      icon: <Phone size={20} />,
      title: 'Звонок',
      desc: 'Обсуждаем задачу',
      iconClass: 'text-blue-600',
      iconBg: 'bg-blue-50 border-blue-100',
    },
    {
      num: '02',
      icon: <Truck size={20} />,
      title: 'Выезд',
      desc: 'По договорённости',
      iconClass: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-100',
    },
    {
      num: '03',
      icon: <Wrench size={20} />,
      title: 'Ремонт',
      desc: '',
      iconClass: 'text-violet-600',
      iconBg: 'bg-violet-50 border-violet-100',
    },
  ];

  return (
    <section className="py-12 bg-slate-50" id="how">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex items-start gap-3 mb-6">
          <span className="w-1 h-8 bg-blue-600 rounded-full mt-1" />
          <h2 className="text-2xl font-bold text-slate-900">Как всё пройдёт</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 ${step.iconBg} border rounded-lg`}
                >
                  <span className={step.iconClass}>{step.icon}</span>
                </span>
                <span className="text-2xl font-bold text-slate-300">{step.num}</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
              {step.desc && <p className="text-sm text-slate-500">{step.desc}</p>}
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
  const [sentName, setSentName] = useState('');

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
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim() || 'Не указано',
        }),
      });

      if (!res.ok) {
        throw new Error('Ошибка отправки');
      }

      setSentName(name.trim());
      setStatus('success');
      setName('');
      setPhone('');
      setMessage('');
    } catch {
      const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(`Заявка от ${name}`)}&body=${encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\nПроблема: ${message || 'Не указана'}`)}`;
      window.open(mailtoLink, '_blank');
      setSentName(name.trim());
      setStatus('success');
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

        {status === 'success' ? (
          <div className="bg-slate-50 border border-green-200 rounded-xl p-8 text-center shadow-sm">
            <span className="inline-flex items-center justify-center w-14 h-14 bg-green-50 border border-green-200 rounded-full mb-4">
              <CheckCircle2 size={28} className="text-green-600" />
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Обращение отправлено</h3>
            <p className="text-slate-600 mb-6">
              {sentName ? `${sentName}, спасибо! ` : ''}Сергей перезвонит в течение часа.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setStatusText('');
                setSentName('');
              }}
              className="px-5 py-2.5 rounded-lg font-semibold text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              Отправить ещё заявку
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-md">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Имя
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван"
                className="w-full mt-1.5 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Телефон
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full mt-1.5 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Что случилось?
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                placeholder="Не включается, тормози��..."
                className="w-full mt-1.5 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
            </button>
            {status === 'error' && statusText && (
              <p className="mt-3.5 text-sm font-semibold text-red-600">{statusText}</p>
            )}
          </form>
        )}
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