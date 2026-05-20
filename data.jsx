// Images use the design's own Stitch/aida-public assets so the live site matches
// the screens in should_be_design/. arRefImg = clean reference fed to the AI swap;
// img = marketing hero shot used for catalog/detail visuals.
const IMG = {
  sable:    'https://lh3.googleusercontent.com/aida-public/AB6AXuB9mFS7AtrEek5mW8M8L9k6Fe4UQCByDpDWMFxuphw1QNqxXMKZ1t0n1bWka8O21zeEIw7j5dKs0vJzyrLaX10s49BgzC3qg2Pqr-6IflTtFNooLE6Awoo46GgeDhTsf7OWwJY7VYPw1kpzLiwm_rUCX3mbXn2k4VcMdUXeyXvzbFqOknhlqWqEvvmA_ZdiL7giuMjWJaei-8euowNhg_ZxFk26xp9zRmQpaicdMwKiNUA6yqNdS1w37ptXEjM6SOpC-CrjkDk85mFa',
  midnight: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl9kyO_kq0CydGo9e2eYpkhBtv9uQzy3kHN0D4NfzcMjWtkMnJx66fIh9lXVAG-RzzuVndopz98lNS-886Jz-ik6FCq_VSwCl9cy2Oowp_kTWUh8Tb2XgQvvkgrcRyvd5fx1LMTMo0X10f3cy1j6mNW1aW1vfutPxDNctMXRHUkFATbD6ScEF2c9T-DdjeClcq7sM-ucNw_OyDj-kLBEkh6sfG0P11zMl6Xyf6SPJhMEbfnNWowNR0zYAFT6tY4vEc_j5c18iIPykA',
  cashmere: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArHwEpBqBAK11lVQ6ZRNBsmhoFipS-O7jnCsQIgbHoWTN1xMTb_NXUT4vL0mdPkWL0BQoVyQqm5lC11wYJh47UMEY1p3lRrrqPbm0wtrgQMdJ3g2omIFxhfEDEVYCMF7QxVsD4_aBd5loOk3mvSLkQQuedX-oCmZGAwZ5DcbQCWPJAEVbzH0CXiBHLausg5FyTUybev7J-cEh2jr5ZNg3lq3377-KMgli6SKtIsybvt-G-w9I81pBnPnCz09Dg8aubtNEzDPMo6IQ2',
  arctic:   'https://lh3.googleusercontent.com/aida-public/AB6AXuCtdplFM5jQi5hYTFDW19wQAYeQFn_PY8PjhcJ3hQudcVTwU9tlUJmZYsbK0vOUpRYKXgRIff56HkO-H-QiKjrAkwaS_ekubn3Y7Mlx-pqwXdVz9qfNqQpRrVsy29ilncrMGjGZqqDaxfPxc0tt0XBMgJHayVqe2plmKfMiTDrJ2oFcIzh9emNHay9RZU5CZFjxR4hEQ2t-08xg9zgR1b1ebwNh-8Di2Qx628M1eaYe0KWERTZSafCMvp6M5FPrSM_yfRcioxr-favq',
  heritage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ99ES8kjtrR0AsmBZZic3NoU1abzNq_jesoNKxjkgafJgFRg7Y2LEqHyiEu0Tyzx6u86utuCZA0lkQ-eo1MKvtghH8OnAteexGh6qjjkY5d7h7sE43r_Fs_b_a75c-45pei-za6pZc4jbWgbpfnlp3HkIg87HZXY2SuHn1ntokmjhrEycnj94RKUlxY_PW9qROdeQ4o8jYDOF2NWHqGlkswF5PXsHDyCOWQdra1H3wykZW38RJIxkXsCoUb3nwnxmfctkFLZBxORH',
};

const PRODUCTS = [
  {
    id: 'sable-barguzin',
    name: 'Королевский баргузинский соболь',
    category: 'Шубы',
    mat: 'Натуральный мех соболя',
    price: 4200000,
    look: '01',
    status: 'Premium',
    color: 'Темный соболь',
    length: 'Миди',
    silhouette: 'Кокон, объемный',
    sleeves: 'Длинный, цельнокроеный',
    collar: 'Стойка с отворотом',
    fit: 'Свободный',
    availability: 'В наличии',
    desc: 'Объемный силуэт из длинноволосого баргузинского соболя. Подходит для холодной зимы, сохраняет форму и эффектно смотрится с платьями и брюками.',
    origin: 'Баргузинская долина, Сибирь',
    sizes: 'S, M, L',
    care: 'Хранить на широких плечиках, избегать влажности, сезонная чистка в меховом сервисе.',
    img: IMG.sable,
    arRefImg: IMG.sable,
  },
  {
    id: 'mink-midnight',
    name: 'Куртка из норки Midnight',
    category: 'Шубы',
    mat: 'Мех норки Black Cross',
    price: 1850000,
    look: '02',
    status: '',
    color: 'Глубокий черный',
    length: 'До колена',
    silhouette: 'Приталенный, прямой',
    sleeves: 'Втачной, длинный',
    collar: 'Английский воротник',
    fit: 'Полуприлегающий',
    availability: 'В наличии',
    desc: 'Приталенное пальто из норки глубокого темного оттенка. Практичная длина, аккуратная посадка и теплый подклад.',
    origin: 'Дания',
    sizes: 'M, XL',
    care: 'Не сушить рядом с отоплением, расчесывать ворс мягкой щеткой.',
    img: IMG.midnight,
    arRefImg: IMG.midnight,
  },
  {
    id: 'cashmere-fox',
    name: 'Кашемир с отделкой лисой',
    category: 'Пальто',
    mat: 'Кашемир Loro Piana',
    price: 750000,
    look: '03',
    status: '',
    color: 'Камель',
    length: 'Миди',
    silhouette: 'Прямой, A-силуэт',
    sleeves: 'Втачной, длинный',
    collar: 'Меховая отделка',
    fit: 'Свободный',
    availability: 'В наличии',
    desc: 'Кашемировое пальто с отделкой лисой по краю воротника. Легкий силуэт для межсезонья и сухой зимы.',
    origin: 'Италия',
    sizes: 'S, M',
    care: 'Профессиональная чистка раз в сезон, хранение в дышащем чехле.',
    img: IMG.cashmere,
    arRefImg: IMG.cashmere,
  },
  {
    id: 'mink-arctic',
    name: 'Норка Arctic White',
    category: 'Шубы',
    mat: 'Белая норка Cross Mink',
    price: 2100000,
    look: '04',
    status: '',
    color: 'Белый',
    length: 'Миди',
    silhouette: 'Прямой, свободный',
    sleeves: 'Втачной, длинный',
    collar: 'Стойка из меха',
    fit: 'Свободный',
    availability: 'В наличии',
    desc: 'Светлая норка с природным градиентом. Подходит для вечерних выходов и фотосессий в зимнюю погоду.',
    origin: 'Скандинавия',
    sizes: 'S, M, L',
    care: 'Проветривать после носки, не допускать прямого контакта с парфюмерией.',
    img: IMG.arctic,
    arRefImg: IMG.arctic,
  },
  {
    id: 'heritage-wool',
    name: 'The Heritage Wool Coat',
    category: 'Пальто',
    mat: '100% шерсть Loro Piana',
    price: 245000,
    look: '05',
    status: 'Signature',
    color: 'Шарколь',
    length: 'Длинное',
    silhouette: 'Прямой',
    sleeves: 'Втачной, длинный',
    collar: 'Английский воротник',
    fit: 'Полуприлегающий',
    availability: 'Ручная сборка в Астане',
    desc: 'Длинное шерстяное пальто ручной сборки в нашем ателье в Астане. Подходит для офиса, ежедневной носки и деловых встреч.',
    origin: 'Astana, Kazakhstan',
    sizes: 'XS, S, M, L, XL',
    care: 'Сезонная чистка, хранение на широких плечиках.',
    img: IMG.heritage,
    arRefImg: IMG.heritage,
  },
];

const CATEGORIES = [
  {
    name: 'Шубы',
    note: 'Смотреть коллекцию',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3pMrVpWWLSkq4w2J7XOF1Pn0n2r-rGv-hKhK0NvUm1jB9opXdIzTbXObs462AfNclkPe0-4l6vjR7-42-5ia_d3WNkjej4nXfjAFFN5zaoSKIH14EwkhwSbckEsMBajg0XJICTkU7CLd07isKezQ2dey9y__ZBHUGgS-V3GjubaCWvVJXdg2l5BoaPughkTweQ4NvOItYakYlbv8s-Umw-TxrEX20gXpivu-WwugDcURQN0SuIr7XLjMwFqC83AcYvtyMJU59o-pI',
  },
  {
    name: 'Дубленки',
    note: 'Купить сейчас',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAhz04giTUmK9yI85kMPpUeLpbQbWMQDQhLrP5kk0rB54WFdF-diSILMuoSohXKafA5O6KUhE_QWJvq3RZT9oJqsd7VhkCsMqFesR2gBDwfLKDO_T1hdrZub5jZFbznbMiOXF94AbWCGMPSSJeSXSSdpO3Xkl7IPr9lmJ4IJzI5acKt-L6DF3dM4ZFOx3cVQuCCzllHwTMrMuzetusGb3Sg2juU4kLgfDRU1P9tjxDDtmN6iuNIAzJfz-qte-vmszqbmLqSAt9ib_O',
  },
  {
    name: 'Кожа',
    note: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9UjjKfjfWioTKRm74aXI7tuIQQW5IQEVDrzZZAXOsDVjWK-2E2QoIUvZEbvGxF7Y02IpA3Re3gc6Npqn2mTque0yRiHsOeeSNHD3QU8ZAnUXjteaNa4SU2A2X5s6T_yFkZt8VWhI-J0OqmD0ZewXQXbbLYG37pQFN6Dc7DdlYlAmHFck8sPwR-kV2iGt8_mvHcY5fTx7GpVxgRMBSLCjw_aqpXBMkBw180mmcyJnnGPa-r-baU6KWFtkHg_x_mDw8FLlJC_LAU8H7',
  },
  {
    name: 'Пуховики',
    note: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFsBhAUtcUAraxFO0EC5TZPzleNehbQo8Te1AKoHDPsYVuG-rcQ9Dl5zAISLw8lvjRl-6eq7bz2y-NEY1T2G2py8U6EL-NRBfmgEQTvDdZNg9iluxeOALMASGxGQihs1pFreUL-58oZq9zEd-FogQizt5G5gOiI1apiHdzl0yFmjv3B0Cx2d9MUYRTq8bVShnQlPWrq_xpWfU7Id8jS4Yr3AFfQpxdACdl0EwR-1yQyH8ic0SpeZz0aUr9F0OAspQAh2XSAFG7RMTc',
  },
  {
    name: 'Тренчи',
    note: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvUbTO-xcCCzNCtca4fi6DewigD0RBEID0gVHEYZbD7dEMu_mUUcJTRiN4CsrFHS_36PvbCkYzaSAXh98OxzXfW-Dg22yEnmA5T9qmxmwippOrKvhXKR2-xEUKp3oI11veWLxaESZCBhuNRdfQTMxV59Fyq9vXH3g2gxSPJ60jpGzvL_0HzWyJxtNdxuBJpoP9yetfqnv7ot2Y8XERceCDZa1Ae0RxjZ-ofBHoROAkmNgOdBQnyDnJ7IhVxuAm0na2ggRLo6Ej0gAa',
  },
];

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDI01LfpcArlkWspEYZVxsSw8pnrUCtPS8Hmo-DjkYdI19CGOXQKKppyYNkLLEE9Rb78QJDyFv7kTU_1dO_fShgCd0Yf7AladA6e7j1W5qr1X8aB8svkRnMBv-ACecPHmJKzO43-nz8o0d2G5icpJeCtGxTVOh12ytyeV_GxP1izBvPlascmf-sknmOrxHLfu9-kdovhjBsxIdjZ4cp1CRHLCvePd_IslhzxmqB5CZdLum6DBJ-CLb4Mfaz3fzOQWD0rRk8fRmg06w';
const STORY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSdvbLusywRPrP0q7qUJKLxY5V0ZIzvAjSl8NVbDNxPWX7SPYZUvVJOygRidWMNvXqrej9No87UQNAxC_Fpi6oZ0VAUri_YP1emCnQBKlVSzquqY4dVAJk9_P538QQ4AKJoHKLO2AMNHW9edng09UdBdd_w2fc-yuttoO6mwUptFuhRSX49flHBS_w1fghTxdRfLTp44Dc27olKa6ljdJRlTQCT1Ez-k8N7VcJu6px_NUyRy30bWk61m_hf8BY07H81smp8_9nndTO';
const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvqhuMmHXOiVMOCpiLF7GRKKHWTcFNRJkrLgYPK9a9EKte03N5GWV1_51GMnaab9KAWajSnElxLZqfhxRSmXv1ITsdryMRgdDZp_nrmu-1ResislxgqC-jbTLD_TfNHUkyN2K1sKMpSeJfQj97jNMipaBAJyZaC-KrqSgTVbQHdrPLy3E9l1cH73Cke4D6UvDXxwHu6VmUZldN-KY8YPbOehlxedYC2joV1g5xI-zQQhuejRaWITkqzU3GXaezYKcFDFiNC9XyYO3';
const CONTACT_ADDRESS = 'Мәңгілік Ел 36/1, Астана';

function formatPrice(n) {
  return n.toLocaleString('ru-RU') + ' ₸';
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
  PRODUCTS, CATEGORIES, HERO_IMG, STORY_IMG, MAP_IMG, CONTACT_ADDRESS, formatPrice,
  IconHeart, IconBag, IconX, IconArrow, IconUpload, IconCamera, IconBack,
  IconSearch, IconMenu, IconMap, IconZoom,
});
