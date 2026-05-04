// Maison Verriès — Product Data & Shared Components

const PRODUCTS = [
  {
    id: 'sable', name: 'Кокон «Соболь»', mat: 'Русский соболь', price: 84000, look: '04',
    desc: 'Объёмный силуэт из длинноволосого баргузинского соболя, распущенного вручную. Подкладка — окрашенный шёлк-мусселин.',
    origin: 'Баргузинская долина, Сибирь', sizes: '36 · 38 · 40',
    img: 'https://images.unsplash.com/photo-1674471361345-e787eaf7dd8c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'lynx', name: 'Манто «Рысь»', mat: 'Канадская рысь', price: 52000, look: '07',
    desc: 'Манто свободного кроя из канадской рыси с выраженным рисунком. Ручная сборка, застёжка — потайные крючки.',
    origin: 'Онтарио, Канада', sizes: '38 · 40 · 42',
    img: 'https://images.unsplash.com/photo-1570215779942-7514932a7e94?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'mink', name: '«Слоновая норка»', mat: 'Норка Black Glama', price: 36500, look: '11',
    desc: 'Элегантное пальто из норки Black Glama глубокого тёмного оттенка. Силуэт приталенный, длина — до колена.',
    origin: 'Висконсин, США', sizes: '36 · 38 · 40 · 42',
    img: 'https://images.unsplash.com/photo-1638612913106-f62108cef7a3?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'fox', name: '«Серебряная лисица»', mat: 'Лиса Saga Silver', price: 41200, look: '09',
    desc: 'Пальто из серебристой лисы Saga с природным градиентом. Пышный ворс, лёгкий силуэт.',
    origin: 'Скандинавия', sizes: '38 · 40',
    img: 'https://images.unsplash.com/photo-1704915047934-4e1a5012d90f?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'chin', name: '«Шиншилла Рояль»', mat: 'Шиншилла Royal', price: 68000, look: '14',
    desc: 'Жакет из шиншиллы Royal с бархатистой текстурой. Исключительная мягкость и лёгкость.',
    origin: 'Южная Америка', sizes: '36 · 38',
    img: 'https://images.unsplash.com/photo-1698319429765-33bf7860ee51?w=800&q=80&auto=format&fit=crop',
  },
];

const HERO_IMG = 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400&q=85&auto=format&fit=crop';
const STORY_IMG = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80&auto=format&fit=crop';

function formatPrice(n) { return '€ ' + n.toLocaleString('ru-RU'); }

// SVG Icons
function IconHeart({ filled, size = 20 }) {
  return filled ? (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#C9A96E" stroke="#C9A96E" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}
function IconBag({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 01-8 0"/>
    </svg>
  );
}
function IconX({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
function IconArrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function IconUpload({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  );
}
function IconCamera({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
}
function IconBack({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  );
}
function IconSearch({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}
function IconDownload({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
function IconZoom({ size = 20, dir = 'in' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/>
      {dir === 'in' && <line x1="8" y1="11" x2="14" y2="11"/>}
    </svg>
  );
}

// Expose globally for Babel script loading
Object.assign(window, {
  PRODUCTS, HERO_IMG, STORY_IMG, formatPrice,
  IconHeart, IconBag, IconX, IconArrow, IconUpload, IconCamera, IconBack, IconSearch, IconDownload, IconZoom,
});
