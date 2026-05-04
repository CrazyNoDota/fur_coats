const {useState,useEffect,useRef,useCallback} = React;

// ── Header ──
function Header({onNav,route,cartCount,wishCount,onCart}) {
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener('scroll',h);return ()=>window.removeEventListener('scroll',h);
  },[]);
  return (
    <header className={`site-header ${scrolled?'scrolled':''}`}>
      <div className="header-inner">
        <div className="logo" onClick={()=>onNav('home')} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
          <img src="logo.png" alt="Solvea Atelier" style={{height: 120, margin: '-20px 0', transform: 'scale(1.4)', transformOrigin: 'left center'}} />
        </div>
        <nav className="main-nav">
          <a className={route==='home'?'active':''} onClick={()=>onNav('home')}>Главная</a>
          <a className={route==='catalog'?'active':''} onClick={()=>onNav('catalog')}>Каталог</a>
          <a className={route==='wishlist'?'active':''} onClick={()=>onNav('wishlist')}>Избранное</a>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={()=>onNav('wishlist')}>
            <IconHeart filled={false} size={18}/>
            {wishCount>0&&<span className="badge">{wishCount}</span>}
          </button>
          <button className="icon-btn" onClick={onCart}>
            <IconBag size={18}/>
            {cartCount>0&&<span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

// ── Hero ──
function Hero({onNav}) {
  return (
    <section className="hero">
      <div className="hero-bg"><img src={HERO_IMG} alt="Solvea Atelier boutique"/></div>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <div className="label-gold">Осень / Зима 2026</div>
        <h1 className="heading-xl">Стиль<br/>и комфорт<br/>в деталях</h1>
        <p style={{color:'var(--text-muted)',fontSize:15,maxWidth:380,lineHeight:1.7,marginBottom:8}}>
          Женская одежда, кожаные куртки, тренчи и обувь.
        </p>
        <button className="hero-cta" onClick={()=>onNav('catalog')}>
          Смотреть коллекцию <IconArrow size={14}/>
        </button>
      </div>
    </section>
  );
}

// ── Marquee ──
function Marquee() {
  const t = 'КОЖАНЫЕ КУРТКИ · ТРЕНЧИ · ПАЛЬТО · ОБУВЬ · РАСПРОДАЖА ШУБ · АСТАНА · ';
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        <span>{t}{t}{t}{t}</span>
      </div>
    </div>
  );
}

// ── Featured Section ──
function Featured({onProduct}) {
  return (
    <section className="section">
      <div className="container">
        <div className="label" style={{marginBottom:16}}>Избранное из коллекции</div>
        <h2 className="heading-lg" style={{marginBottom:48}}>Новые поступления</h2>
        <div className="featured-grid">
          {PRODUCTS.slice(0,2).map(p=>(
            <div key={p.id} className="featured-card" onClick={()=>onProduct(p)}>
              <img src={p.img} alt={p.name}/>
              <div className="featured-card-overlay"/>
              <div className="featured-card-content">
                <div className="label-gold" style={{marginBottom:8}}>{p.mat}</div>
                <div className="heading-md" style={{color:'#F5F2EC'}}>{p.name}</div>
                <div style={{marginTop:8,color:'var(--gold)',fontSize:16}}>{formatPrice(p.price)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Brand Story ──
function BrandStory() {
  return (
    <section className="section" style={{background:'var(--bg-card)'}}>
      <div className="container">
        <div className="brand-story">
          <div className="brand-story-img"><img src={STORY_IMG} alt="Atelier"/></div>
          <div>
            <div className="label-gold" style={{marginBottom:16}}>О нас</div>
            <h2 className="heading-lg" style={{marginBottom:16}}>Solvea Atelier</h2>
            <blockquote>«Стиль и комфорт в каждой детали.»</blockquote>
            <p className="label" style={{marginTop:16}}>Астана, Казахстан</p>
            <p style={{color:'var(--text-muted)',fontSize:14,lineHeight:1.7,marginTop:24,maxWidth:400}}>
              Бутик женской одежды. Кожаные куртки, тренчи, пальто и обувь. Распродажа шуб, дубленок, пуховиков.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Product Card ──
function ProductCard({product,onOpen,liked,onLike,onAR}) {
  return (
    <div className="product-card" onClick={()=>onOpen(product)}>
      <div className="product-card-img">
        <img src={product.img} alt={product.name} loading="lazy"/>
        <button className={`product-card-wishlist ${liked?'liked':''}`}
          onClick={e=>{e.stopPropagation();onLike(product.id);}}>
          <IconHeart filled={liked} size={16}/>
        </button>
      </div>
      <div className="product-card-info">
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-material">{product.mat}</div>
        <div className="product-card-price">{formatPrice(product.price)}</div>
      </div>
      <button className="product-card-ar" onClick={e=>{e.stopPropagation();onAR(product);}}>
        <IconCamera size={12}/> AR
      </button>
    </div>
  );
}

// ── Catalog ──
function Catalog({onProduct,wishlist,onLike,onAR}) {
  const [filter,setFilter] = useState('all');
  const mats = ['all','Соболь','Рысь','Норка','Лиса','Шиншилла'];
  const filtered = filter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.mat.toLowerCase().includes(filter.toLowerCase()));
  return (
    <section className="section" style={{paddingTop:120}}>
      <div className="container">
        <div className="catalog-header">
          <div>
            <div className="label" style={{marginBottom:12}}>Коллекция ОЗ 2026</div>
            <h2 className="heading-lg">Каталог</h2>
          </div>
          <div className="filter-bar">
            {mats.map(m=>(
              <button key={m} className={`filter-btn ${filter===m?'active':''}`}
                onClick={()=>setFilter(m)}>{m==='all'?'Все':m}</button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {filtered.map((p,i)=>(
            <div key={p.id} className="fade-up" style={{animationDelay:`${i*100}ms`}}>
              <ProductCard product={p} onOpen={onProduct} liked={wishlist.has(p.id)}
                onLike={onLike} onAR={onAR}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Product Detail ──
function ProductDetail({product,onClose,onAR,onCart,liked,onLike}) {
  if(!product) return null;
  const p = product;
  const specs = [
    ['Материал',p.mat],['Происхождение',p.origin],
    ['Размеры',p.sizes],['Магазин','Париж, Франция'],
  ];
  return (
    <div className="product-detail">
      <button className="detail-close" onClick={onClose}><IconX size={20}/></button>
      <div className="product-detail-grid">
        <div className="product-gallery">
          <div className="product-gallery-main">
            <img src={p.img} alt={p.name} style={{animation:'scaleIn 500ms var(--ease)'}}/>
          </div>
        </div>
        <div className="product-info">
          <div>
            <div className="label-gold">Образ {p.look}</div>
            <h2 className="heading-lg" style={{marginTop:8}}>{p.name}</h2>
          </div>
          <div className="product-price-big">{formatPrice(p.price)}</div>
          <p className="product-desc">{p.desc}</p>
          <div className="product-specs">
            {specs.map(([k,v])=>(
              <div key={k} className="spec-row">
                <span className="spec-key">{k}</span><span className="spec-val">{v}</span>
              </div>
            ))}
          </div>
          <div className="product-actions">
            <button className="btn-primary" onClick={()=>onCart(p)}>
              <IconBag size={16}/> В корзину
            </button>
            <button className="btn-secondary" onClick={()=>onAR(p)}>
              <IconCamera size={16}/> Примерить AR
            </button>
          </div>
          <button style={{alignSelf:'flex-start',display:'flex',alignItems:'center',gap:8,
            color:liked?'var(--gold)':'var(--text-muted)',fontSize:13,marginTop:8,
            transition:'color 300ms var(--ease)'}}
            onClick={()=>onLike(p.id)}>
            <IconHeart filled={liked} size={16}/> {liked?'В избранном':'Добавить в избранное'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── AR Screen ──
function ARScreen({product,onClose}) {
  const [photo,setPhoto] = useState(null);
  const [coatIdx,setCoatIdx] = useState(PRODUCTS.findIndex(p=>p.id===product.id));
  const [pos,setPos] = useState({x:100,y:80});
  const [scale,setScale] = useState(1);
  const dragging = useRef(false);
  const dragStart = useRef({x:0,y:0});
  const fileRef = useRef(null);

  const onFile = e => {
    const f = e.target.files[0]; if(!f) return;
    const r = new FileReader();
    r.onload = ev => setPhoto(ev.target.result);
    r.readAsDataURL(f);
  };

  const onMouseDown = e => {
    dragging.current = true;
    dragStart.current = {x:e.clientX-pos.x, y:e.clientY-pos.y};
    e.preventDefault();
  };
  useEffect(()=>{
    const onMove = e => {
      if(!dragging.current) return;
      setPos({x:e.clientX-dragStart.current.x, y:e.clientY-dragStart.current.y});
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener('mousemove',onMove);
    window.addEventListener('mouseup',onUp);
    return ()=>{window.removeEventListener('mousemove',onMove);window.removeEventListener('mouseup',onUp);};
  },[]);

  const coat = PRODUCTS[coatIdx];

  return (
    <div className="ar-overlay">
      <div className="ar-header">
        <button onClick={onClose} style={{display:'flex',alignItems:'center',gap:8}}>
          <IconBack size={18}/> <span className="label" style={{color:'var(--text)'}}>Назад</span>
        </button>
        <div className="label-gold">AR-Примерка</div>
        <div className="label">{coat.name}</div>
      </div>
      <div className="ar-canvas-area">
        {!photo ? (
          <div className="ar-upload-zone" onClick={()=>fileRef.current.click()}>
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile}/>
            <IconUpload size={40}/>
            <div className="label" style={{color:'var(--text)'}}>Загрузите ваше фото</div>
            <div style={{fontSize:12,color:'var(--text-muted)',textAlign:'center',maxWidth:240}}>
              Нажмите или перетащите фото, чтобы примерить изделие виртуально
            </div>
          </div>
        ) : (
          <div className="ar-preview">
            <img className="ar-user-photo" src={photo} alt="Your photo"/>
            <div className="ar-coat-overlay" style={{
              left:pos.x,top:pos.y,width:200*scale,
              transform:`scale(${scale})`,transformOrigin:'top left',
            }} onMouseDown={onMouseDown}>
              <img src={coat.img} alt={coat.name}
                style={{width:'100%',opacity:0.85,pointerEvents:'none'}}/>
            </div>
          </div>
        )}
      </div>
      <div className="ar-controls">
        {photo && (
          <>
            <button className="filter-btn" onClick={()=>setScale(s=>Math.max(0.3,s-0.1))}>
              <IconZoom size={16} dir="out"/> −
            </button>
            <button className="filter-btn" onClick={()=>setScale(s=>Math.min(3,s+0.1))}>
              <IconZoom size={16} dir="in"/> +
            </button>
            <button className="filter-btn" onClick={()=>{setPhoto(null);setPos({x:100,y:80});setScale(1);}}>
              Новое фото
            </button>
          </>
        )}
        <div className="ar-coat-picker">
          {PRODUCTS.map((p,i)=>(
            <div key={p.id} className={`ar-coat-thumb ${i===coatIdx?'active':''}`}
              onClick={()=>setCoatIdx(i)}>
              <img src={p.img} alt={p.name}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Cart Sidebar ──
function CartSidebar({items,onClose,onRemove}) {
  const total = items.reduce((s,it)=>s+it.price,0);
  return (
    <>
      <div className="cart-backdrop" onClick={onClose}/>
      <div className="cart-panel">
        <div className="cart-header">
          <h3 className="heading-md">Корзина</h3>
          <button onClick={onClose}><IconX size={20}/></button>
        </div>
        <div className="cart-items">
          {items.length===0 && (
            <div style={{textAlign:'center',padding:'60px 0',color:'var(--text-muted)'}}>
              <IconBag size={32}/><p style={{marginTop:12}}>Корзина пуста</p>
            </div>
          )}
          {items.map((it,i)=>(
            <div key={i} className="cart-item">
              <img className="cart-item-img" src={it.img} alt={it.name}/>
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-name">{it.name}</div>
                  <div className="label" style={{marginTop:4}}>{it.mat}</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span className="cart-item-price">{formatPrice(it.price)}</span>
                  <span className="cart-item-remove" onClick={()=>onRemove(i)}>Удалить</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length>0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Итого</span><span className="amount">{formatPrice(total)}</span>
            </div>
            <button className="btn-primary" style={{width:'100%'}}>Оформить заказ</button>
          </div>
        )}
      </div>
    </>
  );
}

// ── Wishlist Page ──
function WishlistPage({wishlist,onProduct,onLike}) {
  const items = PRODUCTS.filter(p=>wishlist.has(p.id));
  return (
    <section className="section" style={{paddingTop:120,minHeight:'80vh'}}>
      <div className="container">
        <div className="label" style={{marginBottom:12}}>Личный кабинет</div>
        <h2 className="heading-lg" style={{marginBottom:48}}>Избранное</h2>
        {items.length===0 ? (
          <div className="wishlist-empty">
            <IconHeart filled={false} size={40}/>
            <p>Вы ещё не добавили изделия в избранное</p>
          </div>
        ) : (
          <div className="product-grid">
            {items.map(p=>(
              <ProductCard key={p.id} product={p} onOpen={onProduct}
                liked={true} onLike={onLike} onAR={()=>{}}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── Footer ──
function Footer({onNav}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand" style={{display: 'flex', alignItems: 'center'}}>
              <img src="logo.png" alt="Solvea Atelier" style={{height: 160, marginBottom: 20, transform: 'scale(1.2)', transformOrigin: 'left center'}} />
            </div>
            <p className="footer-brand-desc">Женская одежда, кожаные куртки, тренчи и обувь.<br/>Мангилик Ел 36/1, Астана, Казахстан.</p>
          </div>
          <div className="footer-col">
            <h4>Магазин</h4>
            <a onClick={()=>onNav('catalog')}>Каталог</a>
            <a>Новые поступления</a>
            <a>Эдиции</a>
          </div>
          <div className="footer-col">
            <h4>Дом</h4>
            <a>О нас</a>
            <a>Мастерская</a>
            <a>Контакты</a>
          </div>
          <div className="footer-col">
            <h4>Сервис</h4>
            <a>Доставка</a>
            <a>Примерка</a>
            <a>AR-технология</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Solvea Atelier</span>
          <span>Астана · Казахстан</span>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════════
function App() {
  const [route,setRoute] = useState('home');
  const [detail,setDetail] = useState(null);
  const [arProduct,setArProduct] = useState(null);
  const [cartOpen,setCartOpen] = useState(false);
  const [cart,setCart] = useState([]);
  const [wishlist,setWishlist] = useState(new Set());

  const navigate = r => { setRoute(r); setDetail(null); window.scrollTo(0,0); };
  const toggleLike = id => {
    setWishlist(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };
  const addToCart = p => { setCart(prev=>[...prev,p]); setCartOpen(true); };
  const removeFromCart = i => setCart(prev=>prev.filter((_,idx)=>idx!==i));
  const openProduct = p => { setDetail(p); window.scrollTo(0,0); };

  return (
    <>
      <Header route={route} onNav={navigate} cartCount={cart.length}
        wishCount={wishlist.size} onCart={()=>setCartOpen(true)}/>

      {route==='home' && (
        <>
          <Hero onNav={navigate}/>
          <Marquee/>
          <Featured onProduct={openProduct}/>
          <BrandStory/>
          <Catalog onProduct={openProduct} wishlist={wishlist} onLike={toggleLike}
            onAR={p=>setArProduct(p)}/>
        </>
      )}
      {route==='catalog' && (
        <Catalog onProduct={openProduct} wishlist={wishlist} onLike={toggleLike}
          onAR={p=>setArProduct(p)}/>
      )}
      {route==='wishlist' && (
        <WishlistPage wishlist={wishlist} onProduct={openProduct} onLike={toggleLike}/>
      )}

      <Footer onNav={navigate}/>

      {detail && (
        <ProductDetail product={detail} onClose={()=>setDetail(null)}
          onAR={p=>setArProduct(p)} onCart={addToCart}
          liked={wishlist.has(detail.id)} onLike={toggleLike}/>
      )}
      {arProduct && <ARScreen product={arProduct} onClose={()=>setArProduct(null)}/>}
      {cartOpen && <CartSidebar items={cart} onClose={()=>setCartOpen(false)} onRemove={removeFromCart}/>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
