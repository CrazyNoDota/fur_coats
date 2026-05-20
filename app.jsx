const {useState, useEffect, useRef} = React;

function Header({route, onNav, onJump, cartCount, wishCount, onCart}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <IconMenu size={21}/>
        </button>
        <button className="brand-lockup" onClick={() => onNav('home')} aria-label="Solvea Atelier">
          <img src="logo.png" alt="" />
        </button>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {nav.map(([key, label]) => (
            <button key={key} className={route === key ? 'active' : ''} onClick={() => go(key)}>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="header-search" aria-label="Поиск">
            <IconSearch size={17}/>
            <span>Поиск</span>
          </button>
          <button className="icon-btn" onClick={() => onNav('wishlist')} aria-label="Избранное">
            <IconHeart filled={false} size={18}/>
            {wishCount > 0 && <span className="badge">{wishCount}</span>}
          </button>
          <button className="icon-btn" onClick={onCart} aria-label="Корзина">
            <IconBag size={18}/>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
          <button className="fit-btn" onClick={() => onJump('contact')}>Записаться</button>
        </div>
      </div>
    </header>
  );
}

function Hero({onNav, onJump}) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Solvea Atelier · Астана</p>
        <h1>Шубы и зимняя верхняя одежда в Астане</h1>
        <p className="hero-lede">
          Премиальные материалы, примерка в бутике и персональная консультация перед покупкой.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onNav('catalog')}>Смотреть каталог <IconArrow size={16}/></button>
          <button className="btn-secondary" onClick={() => onJump('contact')}>Записаться на примерку</button>
        </div>
        <div className="trust-row">
          <span>Астана</span>
          <span>Примерка в бутике</span>
          <span>Доставка и консультация</span>
        </div>
      </div>
      <div className="hero-media">
        <img src={HERO_IMG} alt="Женская зимняя верхняя одежда Solvea Atelier" />
        <div className="hero-note">
          <strong>AW 2026</strong>
          <span>Шубы, дубленки, кожа, тренчи и обувь</span>
        </div>
      </div>
    </section>
  );
}

function CategoryShortcuts({onNav}) {
  return (
    <section className="section tight" id="new">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Категории</p>
            <h2>Быстрый выбор</h2>
          </div>
          <button className="text-link" onClick={() => onNav('catalog')}>Весь каталог <IconArrow size={14}/></button>
        </div>
        <div className="category-grid">
          {CATEGORIES.map(cat => (
            <button className="category-tile" key={cat.name} onClick={() => onNav('catalog')}>
              <img src={cat.image} alt={cat.name}/>
              <span>{cat.name}</span>
              <small>{cat.note}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({product, onOpen, liked, onLike, onAR}) {
  return (
    <article className="product-card">
      <div className="product-image" onClick={() => onOpen(product)}>
        <img src={product.img} alt={product.name} loading="lazy"/>
        <span className={`status-pill ${product.status.toLowerCase()}`}>{product.status}</span>
        <button className={`wishlist-btn ${liked ? 'liked' : ''}`} onClick={e => {e.stopPropagation(); onLike(product.id);}} aria-label="Добавить в избранное">
          <IconHeart filled={liked} size={17}/>
        </button>
      </div>
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>{product.availability}</span>
        </div>
        <button className="product-name" onClick={() => onOpen(product)}>{product.name}</button>
        <div className="product-material">{product.mat}</div>
        <div className="product-sizes">Размеры: {product.sizes}</div>
        <div className="product-card-bottom">
          <strong>{formatPrice(product.price)}</strong>
          <div className="card-actions">
            <button onClick={() => onAR(product)} aria-label="AR примерка"><IconCamera size={15}/></button>
            <button onClick={() => onOpen(product)}>Детали</button>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedProducts({onProduct, wishlist, onLike, onAR}) {
  return (
    <section className="section" id="featured">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Новые поступления</p>
            <h2>Сравнить модели</h2>
          </div>
          <button className="text-link">Подбор по размеру</button>
        </div>
        <div className="product-grid featured-products">
          {PRODUCTS.map(product => (
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
      <div className="container sale-inner">
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
  const services = [
    ['Примерка', 'Запись в бутике на Мангилик Ел 36/1 с консультацией по посадке и размеру.'],
    ['Доставка', 'Доступны доставка и самовывоз после подтверждения заказа.'],
    ['Подгонка', 'Подскажем по длине, посадке и возможной корректировке изделия.'],
    ['Уход', 'Рекомендации по хранению меха, кожи и зимней верхней одежды.'],
  ];

  return (
    <section className="section service-section" id="about">
      <div className="container service-layout">
        <div className="service-intro">
          <p className="eyebrow">Сервис бутика</p>
          <h2>Покупка высокой стоимости требует спокойного выбора</h2>
          <p>Мы делаем акцент на примерке, понятных деталях изделия и прямой связи с консультантом.</p>
          <button className="btn-secondary" onClick={() => onJump('contact')}>Связаться с бутиком</button>
        </div>
        <div className="service-grid">
          {services.map(([title, text]) => (
            <div className="service-item" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2>Бутик Solvea Atelier</h2>
          <p className="contact-address"><IconMap size={18}/> {CONTACT_ADDRESS}</p>
          <p className="muted">Запишитесь на примерку, уточните наличие размера или попросите консультанта прислать дополнительные фото изделия.</p>
          <div className="contact-actions">
            <a className="btn-primary" href="https://wa.me/77000000000" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn-secondary" href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div className="map-panel">
          <span>Astana</span>
          <strong>Мангилик Ел 36/1</strong>
          <small>Бутик · примерка · консультация</small>
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

  const filtered = PRODUCTS
    .filter(p => category === 'Все' || p.category === category)
    .filter(p => material === 'Все' || p.mat === material)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return PRODUCTS.indexOf(a) - PRODUCTS.indexOf(b);
    });

  return (
    <section className="section catalog-page">
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
            <div className="filter-note">Фильтры можно расширить по размеру, цвету, длине и наличию при увеличении ассортимента.</div>
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
    ['Происхождение', product.origin],
    ['Наличие', product.availability],
  ];

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
            <button className="btn-secondary" onClick={() => onAR(product)}><IconCamera size={16}/> AR примерка</button>
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
  const [coatIdx, setCoatIdx] = useState(PRODUCTS.findIndex(p => p.id === product.id));
  const [pos, setPos] = useState({x: 100, y: 80});
  const [scale, setScale] = useState(1);
  const [mode, setMode] = useState('ai'); // Default to AI mode
  const [aiResult, setAiResult] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [showOriginal, setShowOriginal] = useState(false);

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
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          portraitDataUrl: photo,
          productImageUrl: coat.img,
          productName: coat.name,
          material: coat.mat,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка ИИ-примерки.');
      }
      setAiResult(data.imageDataUrl);
    } catch (err) {
      setError(err.message || 'Произошла ошибка при генерации.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="ar-overlay">
      <div className="ar-header">
        <button onClick={onClose}><IconBack size={18}/> Назад</button>
        <div className="ar-mode-tabs">
          <button className={mode === 'ai' ? 'active' : ''} onClick={() => setMode('ai')}>ИИ Примерка ✨</button>
          <button className={mode === 'manual' ? 'active' : ''} onClick={() => setMode('manual')}>Ручное наложение</button>
        </div>
        <span>{coat.name}</span>
      </div>
      <div className="ar-canvas-area">
        {!photo ? (
          <button className="ar-upload-zone" onClick={() => fileRef.current.click()}>
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile}/>
            <IconUpload size={40}/>
            <strong>Загрузите фото для примерки</strong>
            <span>Мы создадим реалистичный образ с выбранной моделью с помощью ИИ.</span>
          </button>
        ) : (
          <div className="ar-preview">
            {mode === 'manual' ? (
              <>
                <img className="ar-user-photo" src={photo} alt="Загруженное фото"/>
                <div className="ar-coat-overlay" style={{left: pos.x, top: pos.y, width: 200 * scale}} onMouseDown={onMouseDown}>
                  <img src={coat.img} alt={coat.name}/>
                </div>
              </>
            ) : (
              <>
                <img className="ar-user-photo" src={showOriginal ? photo : (aiResult || photo)} alt="Результат примерки" style={{ opacity: (!aiResult && !isGenerating) ? 0.6 : 1 }}/>
                
                {!aiResult && !isGenerating && (
                  <div className="ar-ai-prompt-overlay">
                    <div className="ar-ai-glow"></div>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ marginBottom: 12, color: '#B89C7E' }}>
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4l3 3" strokeLinecap="round"/>
                    </svg>
                    <h3>Готово к ИИ-примерке</h3>
                    <p>Искусственный интеллект органично наденет эту модель на ваше фото, учитывая освещение и позу.</p>
                    <button className="ar-sparkle-btn" onClick={runAiTryOn}>
                      <span>Создать ИИ-образ</span> ✨
                    </button>
                    {error && <div className="ar-error-callout">{error}</div>}
                  </div>
                )}

                {isGenerating && (
                  <div className="ar-loading-overlay">
                    <div className="ar-spinner"></div>
                    <div className="ar-ai-glow"></div>
                    <p>Создаем реалистичную ИИ-примерку... Это может занять до минуты.</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div className="ar-controls">
        {photo && (
          <>
            {mode === 'manual' ? (
              <>
                <button className="control-btn" onClick={() => setScale(s => Math.max(0.4, s - 0.1))}><IconZoom size={16} dir="out"/></button>
                <button className="control-btn" onClick={() => setScale(s => Math.min(3, s + 0.1))}><IconZoom size={16} dir="in"/></button>
              </>
            ) : (
              aiResult && (
                <>
                  <button 
                    className="control-btn" 
                    onMouseDown={() => setShowOriginal(true)} 
                    onMouseUp={() => setShowOriginal(false)}
                    onMouseLeave={() => setShowOriginal(false)}
                    onTouchStart={() => setShowOriginal(true)}
                    onTouchEnd={() => setShowOriginal(false)}
                    style={{ fontWeight: 600 }}
                  >
                    Сравнить (зажмите)
                  </button>
                  <button className="control-btn" onClick={runAiTryOn} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Перегенерировать
                  </button>
                </>
              )
            )}
            <button className="control-btn" onClick={() => {setPhoto(null); setAiResult(null); setPos({x: 100, y: 80}); setScale(1); setError(null);}}>Новое фото</button>
          </>
        )}
        <div className="ar-coat-picker">
          {PRODUCTS.map((p, i) => (
            <button key={p.id} className={i === coatIdx ? 'active' : ''} onClick={() => setCoatIdx(i)}>
              <img src={p.img} alt={p.name}/>
            </button>
          ))}
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
              <div>
                <strong>{item.name}</strong>
                <span>{item.mat}</span>
                <small>Размеры: {item.sizes}</small>
                <div>
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
    <section className="section catalog-page">
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
          <img src="logo.png" alt="Solvea Atelier" />
          <p>Женская верхняя одежда, шубы, дубленки, кожаные куртки, тренчи и обувь.</p>
        </div>
        <div>
          <h4>Магазин</h4>
          <button onClick={() => onNav('catalog')}>Каталог</button>
          <button onClick={() => onJump('new')}>Новинки</button>
          <button onClick={() => onJump('sale')}>Sale</button>
        </div>
        <div>
          <h4>Сервис</h4>
          <button onClick={() => onJump('contact')}>Примерка</button>
          <button onClick={() => onJump('about')}>Доставка</button>
          <button onClick={() => onJump('about')}>Уход</button>
        </div>
        <div>
          <h4>Адрес</h4>
          <p>{CONTACT_ADDRESS}</p>
          <small>© 2026 Solvea Atelier</small>
        </div>
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
