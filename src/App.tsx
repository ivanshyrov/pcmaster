import { Phone, Monitor, Wind, Cpu, Wifi, MapPin, Building2, Activity, Truck, Wrench, CheckCircle2, ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import KineticGrid from './components/ui/kinetic-grid';

const PHONE = '+7 908 863-31-66';
const PHONE_LINK = 'tel:+79088633166';

type Task = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const tasks: Task[] = [
  { icon: <Monitor size={20} />, title: 'Windows и программы', desc: 'Установка, переустановка, настройка' },
  { icon: <Wind size={20} />, title: 'Чистка от пыли', desc: 'Системный блок, ноутбук, термопаста' },
  { icon: <Cpu size={20} />, title: 'Сборка и апгрейд ПК', desc: 'Под ключ, замена комплектующих' },
  { icon: <Wifi size={20} />, title: 'Интернет и Wi-Fi', desc: 'Настройка роутера, сети' },
];

type AutoTask = {
  image: string;
  alt: string;
  desc: string;
};

const autoTasks: AutoTask[] = [
  {
    image: '/images/headunit.jpg',
    alt: 'Замена штатной магнитолы',
    desc: 'Демонтирую старую магнитолу, установлю новую с подходящей переходной рамкой, подключу питание, акустику и управление с кнопок на руле. Проверю корректную работу всех функций.',
  },
  {
    image: '/images/magnetola.jpg',
    alt: 'Установка магнитолы',
    desc: 'Установка 1DIN и 2DIN магнитол с нуля: прокладка проводов, подключение ISO-разъёмов, настройка звука, подключение камеры заднего вида и USB. Подберу переходную рамку под вашу машину.',
  },
  {
    image: '/images/dashcam.jpg',
    alt: 'Установка видеорегистратора',
    desc: 'Аккуратно проложу кабель по стойке и под потолком (без оголённых проводов), подключу питание от прикуривателя или скрыто — от блока предохранителей, настрою запись и парковочный режим.',
  },
  {
    image: '/images/subwoofer.jpg',
    alt: 'Установка сабвуфера',
    desc: 'Подключу активный или пассивный сабвуфер: прокладка силового кабеля от аккумулятора, установка предохранителя, настройка усилителя и уровня баса под ваши предпочтения.',
  },
  {
    image: '/images/rear-camera.jpg',
    alt: 'Установка камеры заднего вида',
    desc: 'Установлю камеру в штатное место или на номерной знак, проложу видеокабель до магнитолы, подключу питание от фонаря заднего хода и проверю вывод изображения.',
  },
  {
    image: '/images/parktronic.jpg',
    alt: 'Установка парктроников',
    desc: 'Разметка и сверление бампера, аккуратный монтаж датчиков, прокладка проводки в салон, подключение блока управления и дисплея со звуковой индикацией. Калибровка и проверка работы.',
  },
  {
    image: '/images/speakers.jpg',
    alt: 'Установка акустики в двери',
    desc: 'Замена штатных динамиков на новые: подготовка и шумоизоляция посадочных мест, установка переходных колец, пайка и изоляция соединений, настройка звука.',
  },
  {
    image: '/images/amplifier.jpg',
    alt: 'Установка усилителя',
    desc: 'Подключение усилителя к магнитоле и акустике: прокладка силового кабеля от аккумулятора, установка предохранителя и конденсатора (при необходимости), настройка уровней сигнала.',
  },
];

const priceGroups: { title: string; items: { name: string; price: string }[] }[] = [
  {
    title: 'Диагностика и ремонт',
    items: [
      { name: 'Диагностика компьютера', price: 'от 500 ₽' },
      { name: 'Ремонт и настройка компьютеров и ноутбуков', price: 'от 1 500 ₽' },
      { name: 'Ремонт после залития', price: 'от 3 000 ₽' },
      { name: 'Ремонт видеокарты', price: 'от 2 500 ₽' },
    ],
  },
  {
    title: 'Windows и программы',
    items: [
      { name: 'Установка Windows с драйверами', price: 'от 2 000 ₽' },
      { name: 'Установка программы', price: 'от 500 ₽' },
      { name: 'Установка антивируса', price: 'от 500 ₽' },
      { name: 'Оптимизация и ускорение работы', price: 'от 1 000 ₽' },
    ],
  },
  {
    title: 'Чистка и обслуживание',
    items: [
      { name: 'Чистка системы охлаждения', price: 'от 1 500 ₽' },
      { name: 'Замена термопасты', price: 'от 1 000 ₽' },
      { name: 'Абонентское обслуживание', price: 'от 1 000 ₽' },
    ],
  },
  {
    title: 'Сборка и апгрейд',
    items: [
      { name: 'Сборка компьютера', price: 'от 3 000 ₽' },
      { name: 'Замена комплектующих', price: 'от 1 000 ₽' },
      { name: 'Увеличение оперативной памяти', price: 'от 1 000 ₽' },
    ],
  },
  {
    title: 'Интернет и данные',
    items: [
      { name: 'Настройка интернета и Wi-Fi', price: 'от 1 000 ₽' },
      { name: 'Восстановление удалённых файлов', price: 'от 3 000 ₽' },
    ],
  },
  {
    title: 'Выезд',
    items: [
      { name: 'Выезд по Нижнему Новгороду', price: '500 ₽' },
      { name: 'Выезд по Кстовскому району', price: 'по договорённости' },
    ],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-5 flex items-center justify-between gap-x-4 gap-y-2 flex-wrap py-3.5">
        <a href="#top" className="text-slate-900 font-bold text-base no-underline">
          Сергей <span className="text-slate-500 font-normal">· компьютерный мастер</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-14 md:py-20 bg-white/60">
      <div className="max-w-4xl mx-auto px-5">
        <p className="text-sm font-semibold text-blue-700 mb-3">Нижний Новгород и область</p>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Ремонт компьютеров и ноутбуков
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
          Сергей — компьютерный мастер. Windows, чистка, сборка ПК.
          Позвоните — уточню детали и назову стоимость работ.
        </p>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap items-center">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-lg font-semibold text-white no-underline bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Phone size={18} />
              Позвонить
            </a>
            <a
              href="#price"
              className="inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-white no-underline bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Прайс
            </a>
          </div>
          <a
            href="#auto"
            className="inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-white no-underline bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Авто-электроника
          </a>
        </div>
      </div>
    </section>
  );
}

function Tasks() {
  return (
    <section className="py-12 bg-slate-50/60" id="services">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Что делаю</h2>
        <p className="text-slate-500 mb-6">
          Точную стоимость назову после уточнения деталей — перезвоню и согласуем цену.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <div
              key={task.title}
              className="bg-white/80 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
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
    <section className="py-12 bg-white/60 border-y border-slate-200" id="zones">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Выезд</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center backdrop-blur-sm">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg">
              <MapPin size={24} className="text-blue-700" />
            </span>
            <h3 className="font-semibold text-slate-900 mt-3 mb-1">Кстовский район</h3>
            <p className="text-sm text-slate-500">Выезжаю по району</p>
          </div>
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center backdrop-blur-sm">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg">
              <Building2 size={24} className="text-blue-700" />
            </span>
            <h3 className="font-semibold text-slate-900 mt-3 mb-1">Нижний Новгород</h3>
            <p className="text-sm text-slate-500">Выезд по городу</p>
            <p className="mt-1 text-base font-bold text-slate-900">500 ₽</p>
          </div>
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-6 text-center backdrop-blur-sm">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg">
              <Activity size={24} className="text-blue-700" />
            </span>
            <h3 className="font-semibold text-slate-900 mt-3 mb-1">Диагностика</h3>
            <p className="text-sm text-slate-500">Осмотр и диагностика при выезде</p>
            <p className="mt-1 text-base font-bold text-slate-900">от 500 ₽</p>
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
    { num: '02', icon: <Truck size={20} />, title: 'Выезд', desc: 'По договорённости' },
    { num: '03', icon: <Wrench size={20} />, title: 'Ремонт', desc: 'До результата' },
  ];

  return (
    <section className="py-12 bg-slate-50/60" id="how">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Как всё пройдёт</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white/80 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
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

function CallSection() {
  return (
    <section className="py-14 bg-white/60 border-t border-slate-200" id="form">
      <div className="max-w-4xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Нужна помощь?</h2>
          <p className="text-slate-600 mb-5">
            Позвоните Сергею — уточним задачу и назовём стоимость работ.
            Если не ответили — перезвоню в ближайшее время.
          </p>
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-slate-700 mb-2">График приёма звонков:</p>
            <p className="text-slate-600 text-sm">Пн–Пт: 8:00 – 17:00</p>
            <p className="text-slate-600 text-sm">Сб–Вс: выходной</p>
          </div>
        </div>

        <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-8 text-center backdrop-blur-sm">
          <span className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <Phone size={28} className="text-blue-700" />
          </span>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Позвоните мне</h3>
          <a
            href={PHONE_LINK}
            className="block text-2xl md:text-3xl font-bold text-blue-700 no-underline hover:text-blue-800 transition-colors mb-6"
          >
            {PHONE}
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 justify-center px-8 py-3 rounded-lg font-semibold text-white no-underline bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Phone size={18} />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900/95 py-5 text-sm text-slate-400 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-5 flex justify-between gap-4 flex-wrap items-center">
        <span>© {new Date().getFullYear()} Компьютерный мастер Сергей · Нижний Новгород</span>
        <a href={PHONE_LINK} className="text-white font-semibold no-underline">
          {PHONE}
        </a>
      </div>
    </footer>
  );
}

function PricePage() {
  return (
    <main className="py-14 bg-white/60">
      <div className="max-w-4xl mx-auto px-5">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 no-underline hover:text-blue-800 transition-colors mb-5"
        >
          <ArrowLeft size={16} />
          Назад на главную
        </a>
        <p className="text-sm font-semibold text-blue-700 mb-3">Прайс-лист</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
          Услуги и цены
        </h1>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Цены указаны «от» — точная стоимость зависит от сложности работ. Позвоню и назову итоговую сумму до начала работ.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {priceGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/85 border border-slate-200 rounded-xl p-6 shadow-sm backdrop-blur-sm"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-4">{group.title}</h2>
              <table className="w-full text-sm">
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name} className="border-b border-slate-100 last:border-0">
                      <td className="py-2.5 pr-3 text-slate-700">{item.name}</td>
                      <td className="py-2.5 text-right font-semibold text-slate-900 whitespace-nowrap">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Не нашли свою задачу?{' '}
          <a href={PHONE_LINK} className="text-blue-700 font-semibold no-underline hover:text-blue-800 transition-colors">
            Позвоните
          </a>{' '}
          — подскажем стоимость.
        </p>
      </div>
    </main>
  );
}

function AutoPage() {
  return (
    <main className="py-14 bg-white/60">
      <div className="max-w-5xl mx-auto px-5">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 no-underline hover:text-blue-800 transition-colors mb-5"
        >
          <ArrowLeft size={16} />
          Назад на главную
        </a>
        <p className="text-sm font-semibold text-blue-700 mb-3">Дополнительные работы</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
          Авто-электроника
        </h1>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Установка и замена авто-электроники: магнитолы, видеорегистраторы, камеры, парктроники, акустика.
          Стоимость согласовывается в зависимости от марки авто и сложности работ — позвоните, и я назову точную цену.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {autoTasks.map((task) => (
            <div
              key={task.image}
              className="bg-white/85 border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm flex flex-col"
            >
              <div className="rounded-lg overflow-hidden bg-white">
                <img
                  src={task.image}
                  alt={task.alt}
                  loading="lazy"
                  className="w-full max-h-52 md:max-h-56 object-contain bg-white"
                />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">{task.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Не нашли свою задачу?{' '}
          <a href={PHONE_LINK} className="text-blue-700 font-semibold no-underline hover:text-blue-800 transition-colors">
            Позвоните
          </a>{' '}
          — подскажем стоимость.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<'home' | 'price' | 'auto'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#price') return 'price';
      if (window.location.hash === '#auto') return 'auto';
    }
    return 'home';
  });

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === '#price') {
        setPage('price');
        window.scrollTo({ top: 0 });
        return;
      }
      if (window.location.hash === '#auto') {
        setPage('auto');
        window.scrollTo({ top: 0 });
        return;
      }
      setPage('home');
      if (window.location.hash === '#form') {
        requestAnimationFrame(() => {
          const el = document.getElementById('form');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } else {
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <KineticGrid>
      <div id="top" />
      <Header />
      {page === 'price' ? (
        <PricePage />
      ) : page === 'auto' ? (
        <AutoPage />
      ) : (
        <main>
          <Hero />
          <Tasks />
          <Zones />
          <How />
          <CallSection />
        </main>
      )}
      <Footer />
    </KineticGrid>
  );
}