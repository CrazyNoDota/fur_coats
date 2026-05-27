const SITE_URL = 'https://solvea-atelier-12x5kcox9-crazynodotas-projects.vercel.app/';

const IMG = {
  logo: 'assets/logo-cropped.png',
  hero: 'assets/upscaled-clean/hero.png',
  sable: 'assets/product-upscaled/sable.png',
  midnight: 'assets/product-upscaled/midnight.png',
  cashmere: 'assets/product-upscaled/cashmere.png',
  arctic: 'assets/product-upscaled/arctic.png',
  heritage: 'assets/product-upscaled/heritage.png',
  story: 'assets/upscaled-clean/story.png',
  map: 'assets/upscaled-clean/map.png',
};

const PRODUCTS = [
  {
    id: 'sable',
    name: 'Sable Fur Coat',
    category: 'Fur',
    material: 'Natural sable fur',
    color: 'Deep sable',
    price: 4200000,
    sizes: 'S, M, L',
    length: 'Midi',
    image: IMG.sable,
    position: 'center bottom',
    note: 'Dense natural fur with a full winter silhouette for the coldest Astana evenings.',
  },
  {
    id: 'midnight',
    name: 'Shearling Aviator',
    category: 'Shearling',
    material: 'Lambskin shearling',
    color: 'Black and ivory',
    price: 680000,
    sizes: 'M, XL',
    length: 'Hip length',
    image: IMG.midnight,
    position: 'center bottom',
    note: 'Structured leather and soft shearling for a sharper everyday winter profile.',
  },
  {
    id: 'cashmere',
    name: 'Black Leather Coat',
    category: 'Leather',
    material: 'Supple calf leather',
    color: 'Black',
    price: 540000,
    sizes: 'S, M',
    length: 'Midi',
    image: IMG.cashmere,
    position: 'center 54%',
    note: 'A polished leather texture with a restrained line for city evenings.',
  },
  {
    id: 'arctic',
    name: 'Champagne Down Coat',
    category: 'Down',
    material: 'Gloss quilted shell, down fill',
    color: 'Champagne',
    price: 320000,
    sizes: 'S, M, L',
    length: 'Midi',
    image: IMG.arctic,
    position: 'center bottom',
    note: 'Light-reflecting quilting and high warmth without the weight of a fur coat.',
  },
  {
    id: 'heritage',
    name: 'Camel Trench Coat',
    category: 'Atelier',
    material: 'Wool blend gabardine',
    color: 'Camel',
    price: 245000,
    sizes: 'XS, S, M, L, XL',
    length: 'Long',
    image: IMG.heritage,
    position: 'center',
    note: 'A clean transitional layer with sharp lapels and atelier finishing.',
  },
];

const SERVICES = [
  ['Private fitting', 'A calm appointment in the showroom with sizing, styling, and alteration notes.'],
  ['Atelier adjustment', 'Hem, sleeve, and shoulder refinements are handled after purchase.'],
  ['City delivery', 'Selected pieces can be delivered across Astana for final approval.'],
];

function formatPrice(value) {
  return value.toLocaleString('ru-RU') + ' KZT';
}

Object.assign(window, {SITE_URL, IMG, PRODUCTS, SERVICES, formatPrice});
