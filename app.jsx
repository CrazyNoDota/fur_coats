const {useState, useEffect, useRef, useMemo} = React;

function Icon({path, size = 20, fill = 'none'}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  );
}

const IconPin = ({size}) => <Icon size={size} path={<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>}/>;
const IconHanger = ({size}) => <Icon size={size} path={<><path d="M12 8a2 2 0 1 1 2-2"/><path d="M12 8v3"/><path d="M3 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2l-9-7Z"/></>}/>;
const IconTruck = ({size}) => <Icon size={size} path={<><path d="M3 7h12v9H3z"/><path d="M15 10h4l2 3v3h-6"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></>}/>;
const IconHeadset = ({size}) => <Icon size={size} path={<><path d="M4 15v-3a8 8 0 1 1 16 0v3"/><path d="M20 15v3a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z"/><path d="M4 15v3a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"/></>}/>;
const IconCalendar = ({size}) => <Icon size={size} path={<><rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M16 3v4M8 3v4M3 11h18"/></>}/>;
const IconScissors = ({size}) => <Icon size={size} path={<><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8.5 20 20M8.5 15.5 20 4"/></>}/>;
const IconCar = ({size}) => <Icon size={size} path={<><path d="M3 14h18l-2-5H5l-2 5Z"/><circle cx="7" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></>}/>;
const IconSparkle = ({size}) => <Icon size={size} fill="currentColor" path={<path d="M12 2 14 9l7 1-5 4 2 7-6-4-6 4 2-7-5-4 7-1 2-7Z"/>}/>;
const IconLock = ({size}) => <Icon size={size} path={<><rect x="4" y="11" width="16" height="10" rx="1.5"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></>}/>;
const IconInfo = ({size}) => <Icon size={size} path={<><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></>}/>;
const IconClock = ({size}) => <Icon size={size} path={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>}/>;
const IconPhone = ({size}) => <Icon size={size} path={<path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>}/>;
const IconRotate = ({size}) => <Icon size={size} path={<><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/></>}/>;
const IconRefresh = ({size}) => <Icon size={size} path={<><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></>}/>;
const IconAR = ({size}) => <Icon size={size} path={<><path d="M3 7v10l9 5 9-5V7l-9-5Z"/><path d="m3 7 9 5 9-5"/><path d="M12 12v10"/></>}/>;

function Header({route, onNav, onJump, cartCount, wishCount, onCart}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    ['catalog', 'Каталог'],
    ['new', 'Новинки'],
    ['sale', 'Sale'],
    ['about', 'О нас'],
    ['contact', 'Контакты'],
  ];

  const go = key => {
    setMenuOpen(false);
    key === 'catalog' ? onNav('catalog') : onJump(key);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Открыть меню">
          <IconMenu size={20}/>
        </button>
        <button className="brand-lockup" onClick={() => onNav('home')} aria-label="Solvea Atelier">
          Solvea Atelier
        </button>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {nav.map(([key, label]) => (
            <button key={key} className={route === key ? 'active' : ''} onClick={() => go(key)}>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switch">
            <button className="active">RU</button>
            <button>KZ</button>
            <button>EN</button>
          </div>
          <div className="header-search">
            <IconSearch size={14}/> <span>Поиск</span>
          </div>
          <button className="icon-btn" onClick={() => onNav('wishlist')} aria-label="Избранное">
            <IconHeart filled={false} size={18}/>
            {wishCount > 0 && <span className="badge">{wishCount}</span>}
          </button>
          <button className="icon-btn" onClick={onCart} aria-label="Корзина">
            <IconBag size={18}/>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <button className="fit-btn" onClick={() => onJump('contact')}>Запись на примерку</button>
        </div>
      </div>
    </header>
  );
}

function Hero({onNav, onJump}) {
  return (
    <section className="hero">
      <div className="hero-media-bg">
        <img src={HERO_IMG} alt="Премиальные шубы Solvea Atelier"/>
      </div>
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="eyebrow">Solvea Atelier · Астана</p>
          <h1>Шубы и зимняя верхняя одежда в Астане</h1>
          <p className="hero-lede">
            Премиальные материалы, примерка в бутике и персональная консультация
            перед покупкой. ИИ-примерка поможет увидеть посадку до визита.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => onNav('catalog')}>Перейти в каталог</button>
            <button className="btn-secondary" onClick={() => onJump('contact')}>Записаться на примерку</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    [<IconPin size={20}/>, 'Бутик в Астане'],
    [<IconHanger size={20}/>, 'Примерка доступна'],
    [<IconTruck size={20}/>, 'Премиум доставка'],
    [<IconHeadset size={20}/>, 'Консультация стилиста'],
  ];
  return (
    <section className="trust-strip">
      <div className="container">
        {items.map(([icon, label]) => (
          <div className="trust-item" key={label}>
            <span className="trust-item-icon">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryShortcuts({onNav}) {
  const layout = ['large', 'medium', 'small', 'small', 'small'];
  return (
    <section className="section" id="new">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Категории</p>
            <h2>Коллекции</h2>
          </div>
          <button className="text-link" onClick={() => onNav('catalog')}>Весь каталог <IconArrow size={14}/></button>
        </div>
        <div className="category-grid">
          {CATEGORIES.map((cat, i) => (
            <button
              className={`category-tile ${layout[i] || 'small'}`}
              key={cat.name}
              onClick={() => onNav('catalog')}
            >
              <img src={cat.image} alt={cat.name}/>
              <div className="category-tile-label">
                <h3>{cat.name}</h3>
                {cat.note && <span>{cat.note}</span>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({product, onOpen, liked, onLike, onAR}) {
  const sizes = (product.sizes || '').split(',').map(s => s.trim()).filter(Boolean);
  return (
    <article className="product-card">
      <div className="product-image" onClick={() => onOpen(product)}>
        <img src={product.img} alt={product.name} loading="lazy"/>
        {product.status && (
          <span className={`status-pill ${product.status.toLowerCase()}`}>{product.status}</span>
        )}
        <button
          className={`wishlist-btn ${liked ? 'liked' : ''}`}
          onClick={e => {e.stopPropagation(); onLike(product.id);}}
          aria-label="Добавить в избранное"
        >
          <IconHeart filled={liked} size={17}/>
        </button>
      </div>
      <button className="product-name" onClick={() => onOpen(product)}>{product.name}</button>
      <div className="product-material">{product.mat}</div>
      <div className="product-price">{formatPrice(product.price)}</div>
      <button className="product-ar-btn" onClick={() => onAR(product)}>
        <IconAR size={16}/> Примерить в AR
      </button>
      {sizes.length > 0 && (
        <div className="product-size-list">
          {sizes.map(s => <span key={s}>{s}</span>)}
        </div>
      )}
    </article>
  );
}

function FeaturedProducts({onProduct, wishlist, onLike, onAR}) {
  return (
    <section className="section featured-section" id="featured">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Избранное</p>
            <h2>Сезонные хиты</h2>
          </div>
          <button className="text-link">Все товары <IconArrow size={14}/></button>
        </div>
        <div className="product-grid">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onProduct}
              liked={wishlist.has(product.id)}
              onLike={onLike}
              onAR={onAR}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SaleBand({onNav}) {
  return (
    <section className="sale-band" id="sale">
      <div className="container">
        <div>
          <p className="eyebrow">Season sale</p>
          <h2>Распродажа шуб и дубленок</h2>
          <p>Поможем подобрать модель под погоду, рост, посадку и образ жизни.</p>
        </div>
        <button className="btn-primary" onClick={() => onNav('catalog')}>Открыть подборку</button>
      </div>
    </section>
  );
}

function ServiceSection({onJump}) {
  const items = [
    [<IconCalendar size={22}/>, 'Запись на примерку', 'Забронируйте визит в наш шоурум. Стилисты помогут подобрать силуэт и материал.'],
    [<IconScissors size={22}/>, 'Индивидуальный подгон', 'Бесплатная подгонка по фигуре при покупке, чтобы пальто сидело безупречно.'],
    [<IconCar size={22}/>, 'Выездная примерка', 'Привезем до 3 изделий для примерки на дому или в офисе в Астане.'],
  ];
  return (
    <section className="section" id="about">
      <div className="container service-layout">
        <div className="service-media">
          <img src={STORY_IMG} alt="Мастер Solvea Atelier"/>
          <div className="service-quote">
            <p>"Истинная роскошь чувствуется в посадке."</p>
            <small>— София С., ведущий мастер</small>
          </div>
        </div>
        <div>
          <p className="eyebrow">Сервис</p>
          <h2>Персональный сервис</h2>
          <div className="service-list">
            {items.map(([icon, title, text]) => (
              <div className="service-item" key={title}>
                <span className="service-icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2>Наш шоурум</h2>
          <p className="muted" style={{maxWidth: 360}}>
            Спокойная атмосфера для шопинга премиум-класса в самом сердце столицы.
          </p>
          <div className="contact-list">
            <div className="contact-row">
              <span className="icon-wrap"><IconPin size={20}/></span>
              <div>
                <strong>{CONTACT_ADDRESS}</strong>
                <span>Казахстан, 010000</span>
              </div>
            </div>
            <div className="contact-row">
              <span className="icon-wrap"><IconClock size={20}/></span>
              <div>
                <strong>Ежедневно: 10:00 — 21:00</strong>
                <span>По записи или в порядке очереди</span>
              </div>
            </div>
            <div className="contact-row">
              <span className="icon-wrap"><IconPhone size={20}/></span>
              <div>
                <strong>+7 (701) 555-0101</strong>
                <span>Консьерж-сервис</span>
              </div>
            </div>
          </div>
          <div className="contact-actions">
            <a className="btn-primary" href="https://wa.me/77000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn-secondary" href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="map-panel">
          <img src={MAP_IMG} alt="Карта Астаны"/>
        </div>
      </div>
    </section>
  );
}

function Catalog({onProduct, wishlist, onLike, onAR}) {
  const [category, setCategory] = useState('Все');
  const [material, setMaterial] = useState('Все');
  const [sort, setSort] = useState('new');

  const categories = ['Все', ...new Set(PRODUCTS.map(p => p.category))];
  const materials = ['Все', ...new Set(PRODUCTS.map(p => p.mat))];

  const filtered = useMemo(() => PRODUCTS
    .filter(p => category === 'Все' || p.category === category)
    .filter(p => material === 'Все' || p.mat === material)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b);
    }), [category, material, sort]);

  return (
    <section className="catalog-page">
      <div className="container">
        <div className="catalog-title">
          <div>
            <p className="eyebrow">Каталог AW 2026</p>
            <h2>Подберите модель для примерки</h2>
          </div>
          <span>{filtered.length} моделей</span>
        </div>
        <div className="catalog-layout">
          <aside className="filter-panel">
            <div className="filter-block">
              <label>Категория</label>
              <div className="chip-list">
                {categories.map(item => (
                  <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>
                ))}
              </div>
            </div>
            <div className="filter-block">
              <label>Материал</label>
              <select value={material} onChange={e => setMaterial(e.target.value)}>
                {materials.map(item => <option key={item}>{item}</option>)}
              </select>
            </div>
            <div className="filter-block">
              <label>Сортировка</label>
              <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="new">Новинки</option>
                <option value="price-asc">Цена по возрастанию</option>
                <option value="price-desc">Цена по убыванию</option>
              </select>
            </div>
            <p className="filter-note">Можно расширить по размеру, цвету, длине и наличию при увеличении ассортимента.</p>
          </aside>
          <div className="product-grid">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={onProduct}
                liked={wishlist.has(product.id)}
                onLike={onLike}
                onAR={onAR}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDetail({product, onClose, onAR, onCart, liked, onLike}) {
  if (!product) return null;
  const specs = [
    ['Материал', product.mat],
    ['Размеры', product.sizes],
    ['Цвет', product.color],
    ['Длина', product.length],
    ['Силуэт', product.silhouette],
    ['Происхождение', product.origin],
    ['Наличие', product.availability],
  ].filter(([_, v]) => v);

  return (
    <div className="product-detail">
      <button className="detail-close" onClick={onClose} aria-label="Закрыть"><IconX size={20}/></button>
      <div className="detail-grid">
        <div className="detail-gallery">
          <img src={product.img} alt={product.name}/>
        </div>
        <aside className="detail-panel">
          <p className="eyebrow">Образ {product.look}</p>
          <h2>{product.name}</h2>
          <div className="detail-price">{formatPrice(product.price)}</div>
          <p className="detail-desc">{product.desc}</p>
          <div className="spec-table">
            {specs.map(([key, value]) => (
              <div className="spec-row" key={key}>
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="care-note">
            <strong>Уход:</strong> {product.care}
          </div>
          <div className="detail-actions">
            <button className="btn-primary" onClick={() => onCart(product)}><IconBag size={16}/> Добавить в заявку</button>
            <button className="btn-secondary" onClick={() => onAR(product)}><IconAR size={16}/> AR примерка</button>
          </div>
          <button className={`detail-like ${liked ? 'liked' : ''}`} onClick={() => onLike(product.id)}>
            <IconHeart filled={liked} size={17}/> {liked ? 'В избранном' : 'Сохранить для сравнения'}
          </button>
          <div className="purchase-trust">
            <span>Примерка в бутике</span>
            <span>Консультация по размеру</span>
            <span>Доставка после подтверждения</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ARScreen({product, onClose}) {
  const [photo, setPhoto] = useState(null);
  const [coatIdx, setCoatIdx] = useState(Math.max(0, PRODUCTS.findIndex(p => p.id === product.id)));
  const [pos, setPos] = useState({x: 80, y: 60});
  const [scale, setScale] = useState(1);
  const [mode, setMode] = useState('ai');
  const [aiResult, setAiResult] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [height, setHeight] = useState('');
  const [bodyType, setBodyType] = useState('Regular');

  const dragging = useRef(false);
  const dragStart = useRef({x: 0, y: 0});
  const fileRef = useRef(null);
  const coat = PRODUCTS[coatIdx];

  useEffect(() => {
    setAiResult(null);
    setError(null);
  }, [coatIdx]);

  const onFile = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      setPhoto(ev.target.result);
      setAiResult(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const onMouseDown = e => {
    if (mode !== 'manual') return;
    dragging.current = true;
    dragStart.current = {x: e.clientX - pos.x, y: e.clientY - pos.y};
    e.preventDefault();
  };

  useEffect(() => {
    const onMove = e => {
      if (dragging.current) setPos({x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y});
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const runAiTryOn = async () => {
    if (!photo) return;
    setIsGenerating(true);
    setError(null);
    try {
      const response = await fetch('/api/try-on', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          portraitDataUrl: photo,
          productImageUrl: coat.img,
          arRefImg: coat.arRefImg || coat.img,
          productId: coat.id,
          productName: coat.name,
          material: coat.mat,
          color: coat.color,
          silhouette: coat.silhouette,
          length: coat.length,
          sleeves: coat.sleeves,
          collar: coat.collar,
          fit: coat.fit,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Ошибка ИИ-примерки.');
      setAiResult(data.imageDataUrl);
    } catch (err) {
      setError(err.message || 'Произошла ошибка при генерации.');
    } finally {
      setIsGenerating(false);
    }
  };

  const recommendedSize = useMemo(() => {
    const h = parseInt(height, 10);
    if (!h || h < 140) return '—';
    if (h < 162) return 'S (EU 36)';
    if (h < 170) return 'M (EU 38)';
    if (h < 178) return 'L (EU 40)';
    return 'XL (EU 42)';
  }, [height, bodyType]);

  return (
    <div className="ar-overlay">
      <div className="ar-header">
        <div className="ar-header-left">
          <button onClick={onClose}><IconBack size={18}/> Назад в каталог</button>
        </div>
        <div className="ar-product-label">
          <small>Solvea Atelier · ИИ Примерка</small>
          <strong>{coat.name}</strong>
        </div>
      </div>

      <div className="ar-body">
        <div className="ar-canvas">
          {!photo ? (
            <div className="ar-upload-zone">
              <div className="upload-icon"><IconUpload size={32}/></div>
              <h3>Виртуальная примерка</h3>
              <p>Загрузите портрет — мы покажем, как выбранная модель выглядит на вас.</p>
              <div className="ar-upload-actions">
                <button className="btn-primary" onClick={() => fileRef.current.click()}>
                  <IconUpload size={16}/> Загрузить фото
                </button>
                <button className="btn-secondary" onClick={() => fileRef.current.click()}>
                  <IconCamera size={16}/> Открыть камеру
                </button>
              </div>
              <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile}/>
            </div>
          ) : (
            <div className="ar-preview">
              {mode === 'manual' ? (
                <>
                  <img className="ar-user-photo" src={photo} alt="Загруженное фото"/>
                  <div
                    className="ar-coat-overlay"
                    style={{left: pos.x, top: pos.y, width: 220 * scale}}
                    onMouseDown={onMouseDown}
                  >
                    <img src={coat.arRefImg || coat.img} alt={coat.name}/>
                  </div>
                </>
              ) : (
                <>
                  <img
                    className="ar-user-photo"
                    src={showOriginal ? photo : (aiResult || photo)}
                    alt="Результат примерки"
                    style={{opacity: (!aiResult && !isGenerating) ? 0.55 : 1}}
                  />
                  {!aiResult && !isGenerating && (
                    <div className="ar-ai-prompt-overlay">
                      <h3>Готово к ИИ-примерке</h3>
                      <p>Искусственный интеллект органично наденет эту модель на ваше фото, учитывая освещение и позу.</p>
                      <button className="ar-sparkle-btn" onClick={runAiTryOn}>
                        <IconSparkle size={16}/> Создать ИИ-образ
                      </button>
                      {error && <div className="ar-error-callout">{error}</div>}
                    </div>
                  )}
                  {isGenerating && (
                    <div className="ar-loading-overlay">
                      <div className="ar-spinner"/>
                      <p>Создаем реалистичную ИИ-примерку… Это может занять до минуты.</p>
                    </div>
                  )}
                </>
              )}

              {photo && (
                <div className="ar-canvas-controls">
                  {mode === 'manual' ? (
                    <>
                      <button onClick={() => setScale(s => Math.max(0.4, s - 0.1))}><IconZoom size={14} dir="out"/></button>
                      <button onClick={() => setScale(s => Math.min(3, s + 0.1))}><IconZoom size={14} dir="in"/></button>
                      <button onClick={() => {setPos({x: 80, y: 60}); setScale(1);}}><IconRotate size={14}/></button>
                    </>
                  ) : (
                    aiResult && (
                      <>
                        <button
                          onMouseDown={() => setShowOriginal(true)}
                          onMouseUp={() => setShowOriginal(false)}
                          onMouseLeave={() => setShowOriginal(false)}
                          onTouchStart={() => setShowOriginal(true)}
                          onTouchEnd={() => setShowOriginal(false)}
                        >
                          До / После
                        </button>
                        <button onClick={runAiTryOn}><IconRefresh size={14}/> Снова</button>
                      </>
                    )
                  )}
                  <button onClick={() => {setPhoto(null); setAiResult(null); setPos({x: 80, y: 60}); setScale(1); setError(null);}}>
                    Новое фото
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="ar-side">
          <div className="ar-product-summary">
            <div className="ar-product-title">
              <small>Solvea Signature</small>
              <h2>{coat.name}</h2>
            </div>
            <div className="ar-product-price">{formatPrice(coat.price)}</div>
          </div>
          <div className="ar-meta-row">
            <span>{coat.mat}</span>
            <span>{coat.length}</span>
            <span>Astana</span>
          </div>

          <div className="ar-smart-sizer">
            <div className="ar-smart-sizer-header">
              <IconSparkle size={18}/> AI Smart Sizer
            </div>
            <div className="ar-smart-sizer-grid">
              <div>
                <label>Рост (см)</label>
                <input
                  type="number"
                  placeholder="175"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                />
              </div>
              <div>
                <label>Тип фигуры</label>
                <select value={bodyType} onChange={e => setBodyType(e.target.value)}>
                  <option>Slim</option>
                  <option>Regular</option>
                  <option>Athletic</option>
                </select>
              </div>
            </div>
            <div className="ar-smart-sizer-result">
              <span>Рекомендуемый размер</span>
              <strong>{recommendedSize}</strong>
            </div>
          </div>

          <div className="ar-coat-picker-section">
            <h4>Сравнить модели</h4>
            <div className="ar-coat-picker">
              {PRODUCTS.map((p, i) => (
                <button key={p.id} className={i === coatIdx ? 'active' : ''} onClick={() => setCoatIdx(i)}>
                  <img src={p.img} alt={p.name}/>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="ar-manual-toggle"
              onClick={() => setMode(m => m === 'manual' ? 'ai' : 'manual')}
            >
              {mode === 'manual' ? '← Вернуться к ИИ-примерке' : 'Или попробовать ручное наложение →'}
            </button>
          </div>

          <div className="ar-action-block">
            <button className="btn-primary">
              <IconCalendar size={16}/> Записаться на примерку в Астане
            </button>
            <div className="ar-fineprint">
              <p>
                <span className="icon-wrap"><IconLock size={14}/></span>
                Ваше фото используется только для предпросмотра и не сохраняется на наших серверах.
              </p>
              <p>
                <span className="icon-wrap"><IconInfo size={14}/></span>
                ИИ-примерка — визуальный предпросмотр. Для точных мер запишитесь на консультацию.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartSidebar({items, onClose, onRemove}) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div className="cart-backdrop" onClick={onClose}/>
      <aside className="cart-panel">
        <div className="cart-header">
          <h3>Заявка</h3>
          <button onClick={onClose} aria-label="Закрыть"><IconX size={20}/></button>
        </div>
        <div className="cart-items">
          {items.length === 0 && (
            <div className="empty-state">
              <IconBag size={34}/>
              <p>В заявке пока нет изделий.</p>
            </div>
          )}
          {items.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <img src={item.img} alt={item.name}/>
              <div className="cart-item-body">
                <strong>{item.name}</strong>
                <span>{item.mat}</span>
                <small>Размеры: {item.sizes}</small>
                <div className="cart-item-row">
                  <b>{formatPrice(item.price)}</b>
                  <button onClick={() => onRemove(index)}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Итого</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <button className="btn-primary">Отправить заявку</button>
            <p>Консультант подтвердит наличие, примерку и условия доставки.</p>
          </div>
        )}
      </aside>
    </>
  );
}

function WishlistPage({wishlist, onProduct, onLike, onAR, onNav}) {
  const items = PRODUCTS.filter(p => wishlist.has(p.id));
  return (
    <section className="catalog-page">
      <div className="container">
        <div className="catalog-title">
          <div>
            <p className="eyebrow">Сравнение</p>
            <h2>Избранное</h2>
          </div>
          <span>{items.length} сохранено</span>
        </div>
        {items.length === 0 ? (
          <div className="wishlist-empty">
            <IconHeart filled={false} size={40}/>
            <p>Сохраняйте модели, чтобы сравнить материалы, размеры и цены перед примеркой.</p>
            <button className="btn-primary" onClick={() => onNav('catalog')}>Перейти в каталог</button>
          </div>
        ) : (
          <div className="product-grid">
            {items.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={onProduct}
                liked={true}
                onLike={onLike}
                onAR={onAR}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Footer({onNav, onJump}) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark">Solvea Atelier</div>
          <p style={{fontSize: 14, lineHeight: 1.6, marginBottom: 18}}>
            Определяем зимнюю роскошь в Астане с 2012 года. Шубы, дубленки,
            кожаные куртки, тренчи и обувь.
          </p>
        </div>
        <div>
          <h4>Навигация</h4>
          <div className="footer-list">
            <button onClick={() => onNav('catalog')}>Каталог</button>
            <button onClick={() => onJump('new')}>Новинки</button>
            <button onClick={() => onJump('sale')}>Sale</button>
            <button onClick={() => onJump('about')}>О бутике</button>
          </div>
        </div>
        <div>
          <h4>Помощь</h4>
          <div className="footer-list">
            <button onClick={() => onJump('contact')}>Связаться</button>
            <button onClick={() => onJump('about')}>Доставка</button>
            <button onClick={() => onJump('about')}>Уход</button>
            <button onClick={() => onJump('about')}>Условия</button>
          </div>
        </div>
        <div>
          <h4>Шоурум</h4>
          <p style={{fontSize: 13, marginBottom: 4}}>{CONTACT_ADDRESS}</p>
          <p style={{fontSize: 13, marginBottom: 18, color: 'rgba(255,255,255,0.55)'}}>
            Ежедневно 10:00 — 21:00
          </p>
          <button className="footer-cta" onClick={() => onJump('contact')}>Личная примерка</button>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2026 Solvea Atelier Boutique. Все права защищены.
      </div>
    </footer>
  );
}

function App() {
  const [route, setRoute] = useState('home');
  const [detail, setDetail] = useState(null);
  const [arProduct, setArProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(new Set());

  const navigate = nextRoute => {
    setRoute(nextRoute);
    setDetail(null);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const jumpTo = id => {
    setRoute('home');
    setDetail(null);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'}), 50);
  };

  const toggleLike = id => {
    setWishlist(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const openProduct = product => {
    setDetail(product);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const addToCart = product => {
    setCart(prev => [...prev, product]);
    setCartOpen(true);
  };

  return (
    <>
      <Header
        route={route}
        onNav={navigate}
        onJump={jumpTo}
        cartCount={cart.length}
        wishCount={wishlist.size}
        onCart={() => setCartOpen(true)}
      />

      {route === 'home' && (
        <>
          <Hero onNav={navigate} onJump={jumpTo}/>
          <TrustStrip/>
          <CategoryShortcuts onNav={navigate}/>
          <FeaturedProducts onProduct={openProduct} wishlist={wishlist} onLike={toggleLike} onAR={setArProduct}/>
          <SaleBand onNav={navigate}/>
          <ServiceSection onJump={jumpTo}/>
          <LocationContact/>
        </>
      )}
      {route === 'catalog' && (
        <Catalog onProduct={openProduct} wishlist={wishlist} onLike={toggleLike} onAR={setArProduct}/>
      )}
      {route === 'wishlist' && (
        <WishlistPage wishlist={wishlist} onProduct={openProduct} onLike={toggleLike} onAR={setArProduct} onNav={navigate}/>
      )}

      <Footer onNav={navigate} onJump={jumpTo}/>

      {detail && (
        <ProductDetail
          product={detail}
          onClose={() => setDetail(null)}
          onAR={setArProduct}
          onCart={addToCart}
          liked={wishlist.has(detail.id)}
          onLike={toggleLike}
        />
      )}
      {arProduct && <ARScreen product={arProduct} onClose={() => setArProduct(null)}/>}
      {cartOpen && <CartSidebar items={cart} onClose={() => setCartOpen(false)} onRemove={index => setCart(prev => prev.filter((_, i) => i !== index))}/>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
