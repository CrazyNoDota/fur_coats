const PRODUCTS = [
  {
    id: 'sable',
    name: 'Кокон "Соболь"',
    category: 'Шубы',
    mat: 'Русский соболь',
    price: 84000,
    look: '04',
    status: 'Новинка',
    color: 'Темный соболь',
    length: 'До бедра',
    availability: 'В наличии',
    desc: 'Объемный силуэт из длинноволосого баргузинского соболя. Подходит для холодной зимы, сохраняет форму и хорошо смотрится с платьями и брюками.',
    origin: 'Баргузинская долина, Сибирь',
    sizes: '36, 38, 40',
    care: 'Хранить на широких плечиках, избегать влажности, сезонная чистка в меховом сервисе.',
    img: 'https://images.unsplash.com/photo-1674471361345-e787eaf7dd8c?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'lynx',
    name: 'Манто "Рысь"',
    category: 'Шубы',
    mat: 'Канадская рысь',
    price: 52000,
    look: '07',
    status: 'Limited',
    color: 'Натуральный принт',
    length: 'Миди',
    availability: 'Последние размеры',
    desc: 'Свободное манто с выразительным рисунком и мягкой посадкой по плечу. Ручная сборка и потайная застежка.',
    origin: 'Онтарио, Канада',
    sizes: '38, 40, 42',
    care: 'Профессиональная чистка, хранение в дышащем чехле.',
    img: 'https://images.unsplash.com/photo-1570215779942-7514932a7e94?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'mink',
    name: 'Пальто "Слоновая норка"',
    category: 'Шубы',
    mat: 'Норка Black Glama',
    price: 36500,
    look: '11',
    status: 'В наличии',
    color: 'Глубокий черный',
    length: 'До колена',
    availability: 'В наличии',
    desc: 'Приталенное пальто из норки глубокого темного оттенка. Практичная длина, аккуратная посадка и теплый подклад.',
    origin: 'Висконсин, США',
    sizes: '36, 38, 40, 42',
    care: 'Не сушить рядом с отоплением, расчесывать ворс мягкой щеткой.',
    img: 'https://images.unsplash.com/photo-1638612913106-f62108cef7a3?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'fox',
    name: 'Пальто "Серебряная лиса"',
    category: 'Шубы',
    mat: 'Лиса Saga Silver',
    price: 41200,
    look: '09',
    status: 'Sale',
    color: 'Серебристый',
    length: 'Миди',
    availability: 'В бутике',
    desc: 'Пальто из серебристой лисы Saga с природным градиентом. Легкий силуэт для вечерних выходов и холодной погоды.',
    origin: 'Скандинавия',
    sizes: '38, 40',
    care: 'Проветривать после носки, хранить отдельно от плотной одежды.',
    img: 'https://images.unsplash.com/photo-1704915047934-4e1a5012d90f?w=900&q=80&auto=format&fit=crop',
  },
  {
    id: 'chin',
    name: 'Жакет "Шиншилла Рояль"',
    category: 'Жакеты',
    mat: 'Шиншилла Royal',
    price: 68000,
    look: '14',
    status: 'Новинка',
    color: 'Серый',
    length: 'Короткий',
    availability: 'По записи',
    desc: 'Мягкий жакет из шиншиллы с бархатистой фактурой. Легкая модель для автомобиля, мероприятий и сухой зимней погоды.',
    origin: 'Южная Америка',
    sizes: '36, 38',
    care: 'Только специализированная чистка, избегать дождя и снега.',
    img: 'https://images.unsplash.com/photo-1698319429765-33bf7860ee51?w=900&q=80&auto=format&fit=crop',
  },
];

const CATEGORIES = [
  {name: 'Шубы', note: 'Соболь, норка, лиса', image: PRODUCTS[0].img},
  {name: 'Дубленки', note: 'Теплые зимние модели', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=700&q=80&auto=format&fit=crop'},
  {name: 'Кожаные куртки', note: 'Городская линия', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&q=80&auto=format&fit=crop'},
  {name: 'Пуховики', note: 'Для ежедневной зимы', image: 'https://images.unsplash.com/photo-1548624149-f9b1856aa7fb?w=700&q=80&auto=format&fit=crop'},
  {name: 'Тренчи', note: 'Межсезонье', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=700&q=80&auto=format&fit=crop'},
  {name: 'Обувь', note: 'Зимние пары', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=80&auto=format&fit=crop'},
];

const HERO_IMG = 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1500&q=85&auto=format&fit=crop';
const STORY_IMG = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=900&q=80&auto=format&fit=crop';
const CONTACT_ADDRESS = 'Мангилик Ел 36/1, Астана, Казахстан';

function formatPrice(n) {
  return '€ ' + n.toLocaleString('ru-RU');
}

function IconHeart({ filled, size = 20 }) {
  return filled ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function IconBag({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

function IconX({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}

function IconArrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}

function IconUpload({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>
    </svg>
  );
}

function IconCamera({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
}

function IconBack({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
    </svg>
  );
}

function IconSearch({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
    </svg>
  );
}

function IconMenu({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>
    </svg>
  );
}

function IconMap({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function IconZoom({ size = 20, dir = 'in' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/>{dir === 'in' && <path d="M11 8v6"/>}
    </svg>
  );
}

Object.assign(window, {
  PRODUCTS, CATEGORIES, HERO_IMG, STORY_IMG, CONTACT_ADDRESS, formatPrice,
  IconHeart, IconBag, IconX, IconArrow, IconUpload, IconCamera, IconBack,
  IconSearch, IconMenu, IconMap, IconZoom,
});
