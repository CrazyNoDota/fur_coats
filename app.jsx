const {useMemo, useState} = React;

function Icon({children, size = 20}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const IconBag = ({size}) => <Icon size={size}><path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></Icon>;
const IconHeart = ({size, filled}) => (
  <svg width={size || 20} height={size || 20} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"/>
  </svg>
);
const IconMenu = ({size}) => <Icon size={size}><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></Icon>;
const IconX = ({size}) => <Icon size={size}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>;
const IconArrow = ({size}) => <Icon size={size}><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></Icon>;
const IconPin = ({size}) => <Icon size={size}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>;
const IconCalendar = ({size}) => <Icon size={size}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></Icon>;

function Header({cartCount, wishlistCount, onCart, onJump}) {
  const [open, setOpen] = useState(false);
  const nav = [
    ['collection', 'Collection'],
    ['atelier', 'Atelier'],
    ['visit', 'Visit'],
  ];

  const jump = id => {
    setOpen(false);
    onJump(id);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(value => !value)}>
          {open ? <IconX size={20}/> : <IconMenu size={20}/>}
        </button>
        <button className="brand-lockup" onClick={() => jump('top')} aria-label="Solvea Atelier home">
          <img src={IMG.logo} alt="Solvea Atelier logo"/>
        </button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => jump(id)}>{label}</button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Wishlist" onClick={() => jump('collection')}>
            <IconHeart size={19} filled={wishlistCount > 0}/>
            {wishlistCount > 0 && <span>{wishlistCount}</span>}
          </button>
          <button className="icon-button" aria-label="Open request list" onClick={onCart}>
            <IconBag size={19}/>
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
          <button className="book-btn" onClick={() => jump('visit')}>Book Fitting</button>
        </div>
      </div>
    </header>
  );
}

function Hero({onJump}) {
  return (
    <section className="hero" id="top">
      <img className="hero-image" src={IMG.hero} alt="Woman wearing a silver fur coat"/>
      <div className="hero-shade"/>
      <div className="hero-content container">
        <p className="eyebrow">Solvea Atelier / Astana</p>
        <h1>Quiet winter luxury, fitted in the atelier.</h1>
        <p>
          Premium fur, cashmere, and wool outerwear selected for Astana winters,
          with private fittings and precise in-house alterations.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onJump('collection')}>View Collection</button>
          <button className="btn-secondary" onClick={() => onJump('visit')}>Private Visit</button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({product, liked, onLike, onAdd, onOpen}) {
  return (
    <article className="product-card">
      <button className="product-media" onClick={() => onOpen(product)}>
        <img src={product.image} alt={product.name} loading="lazy" style={{objectPosition: product.position || 'center'}}/>
      </button>
      <div className="product-body">
        <div>
          <p className="product-kicker">{product.category} / {product.color}</p>
          <button className="product-title" onClick={() => onOpen(product)}>{product.name}</button>
          <p className="product-meta">{product.material}</p>
        </div>
        <div className="product-row">
          <strong>{formatPrice(product.price)}</strong>
          <button className={liked ? 'heart liked' : 'heart'} onClick={() => onLike(product.id)} aria-label="Save piece">
            <IconHeart size={18} filled={liked}/>
          </button>
        </div>
        <button className="line-button" onClick={() => onAdd(product)}>Add To Request</button>
      </div>
    </article>
  );
}

function Collection({wishlist, onLike, onAdd, onOpen}) {
  return (
    <section className="section collection-section" id="collection">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Edited Collection</p>
            <h2>Signature outerwear</h2>
          </div>
          <p>
            Five focused pieces keep the presentation clean: fur, cashmere,
            and tailored wool with enough detail to compare quickly.
          </p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              liked={wishlist.has(product.id)}
              onLike={onLike}
              onAdd={onAdd}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Atelier({onJump}) {
  return (
    <section className="section atelier-section" id="atelier">
      <div className="container atelier-grid">
        <div className="atelier-media">
          <img src={IMG.story} alt="Solvea Atelier fitting room"/>
        </div>
        <div className="atelier-copy">
          <p className="eyebrow">Atelier Service</p>
          <h2>Luxury is in the fit.</h2>
          <p className="lead">
            The showroom is intentionally appointment-led. Each visit focuses on
            proportion, warmth, movement, and the small adjustments that make an
            expensive coat feel personal.
          </p>
          <div className="service-list">
            {SERVICES.map(([title, text]) => (
              <div className="service-item" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <button className="btn-primary" onClick={() => onJump('visit')}>Arrange A Fitting</button>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="section visit-section" id="visit">
      <div className="container visit-grid">
        <div>
          <p className="eyebrow">Showroom</p>
          <h2>Visit Solvea Atelier</h2>
          <p className="lead">
            Mangilik El 36/1, Astana. Open daily by appointment from 10:00 to 21:00.
          </p>
          <div className="contact-list">
            <div><IconPin size={18}/><span>Mangilik El 36/1, Astana</span></div>
            <div><IconCalendar size={18}/><span>Private fitting, delivery, and alteration booking</span></div>
          </div>
        </div>
        <div className="map-frame">
          <img src={IMG.map} alt="Minimal showroom map"/>
        </div>
      </div>
    </section>
  );
}

function ProductModal({product, onClose, onAdd}) {
  if (!product) return null;

  return (
    <div className="modal-layer" role="dialog" aria-modal="true">
      <button className="modal-backdrop" onClick={onClose} aria-label="Close detail"/>
      <div className="product-detail">
        <button className="detail-close" onClick={onClose} aria-label="Close detail"><IconX size={22}/></button>
        <img src={product.image} alt={product.name} style={{objectPosition: product.position || 'center'}}/>
        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h2>{product.name}</h2>
          <p>{product.note}</p>
          <dl>
            <div><dt>Material</dt><dd>{product.material}</dd></div>
            <div><dt>Color</dt><dd>{product.color}</dd></div>
            <div><dt>Length</dt><dd>{product.length}</dd></div>
            <div><dt>Sizes</dt><dd>{product.sizes}</dd></div>
          </dl>
          <strong className="detail-price">{formatPrice(product.price)}</strong>
          <button className="btn-primary" onClick={() => onAdd(product)}>Add To Request</button>
        </div>
      </div>
    </div>
  );
}

function RequestDrawer({items, onClose, onRemove}) {
  const total = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);

  return (
    <div className="drawer-layer">
      <button className="drawer-backdrop" onClick={onClose} aria-label="Close request list"/>
      <aside className="request-drawer">
        <div className="drawer-head">
          <div>
            <p className="eyebrow">Request List</p>
            <h2>Selected pieces</h2>
          </div>
          <button onClick={onClose} aria-label="Close request list"><IconX size={22}/></button>
        </div>
        <div className="drawer-items">
          {items.length === 0 && <p className="empty">No pieces selected yet.</p>}
          {items.map((item, index) => (
            <div className="drawer-item" key={`${item.id}-${index}`}>
              <img src={item.image} alt={item.name}/>
              <div>
                <strong>{item.name}</strong>
                <span>{item.sizes}</span>
                <button onClick={() => onRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="drawer-foot">
          <div><span>Estimated total</span><strong>{formatPrice(total)}</strong></div>
          <button className="btn-primary" onClick={onClose}>Request Fitting</button>
        </div>
      </aside>
    </div>
  );
}

function Footer({onJump}) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={IMG.logo} alt="Solvea Atelier logo"/>
          <p>Premium winter outerwear, private fittings, and atelier adjustments in Astana.</p>
        </div>
        <div>
          <h3>Shop</h3>
          <button onClick={() => onJump('collection')}>Collection</button>
          <button onClick={() => onJump('atelier')}>Atelier</button>
          <button onClick={() => onJump('visit')}>Visit</button>
        </div>
        <div>
          <h3>Showroom</h3>
          <p>Mangilik El 36/1, Astana</p>
          <p>Daily by appointment</p>
        </div>
        <div>
          <h3>Live Site</h3>
          <a className="site-link" href={SITE_URL} target="_blank" rel="noreferrer">
            solvea atelier <IconArrow size={14}/>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Solvea Atelier Boutique.</div>
    </footer>
  );
}

function App() {
  const [wishlist, setWishlist] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const jumpTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const toggleLike = id => {
    setWishlist(previous => {
      const next = new Set(previous);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addToCart = product => {
    setCart(previous => [...previous, product]);
    setDrawerOpen(true);
  };

  return (
    <>
      <Header cartCount={cart.length} wishlistCount={wishlist.size} onCart={() => setDrawerOpen(true)} onJump={jumpTo}/>
      <Hero onJump={jumpTo}/>
      <Collection wishlist={wishlist} onLike={toggleLike} onAdd={addToCart} onOpen={setActiveProduct}/>
      <Atelier onJump={jumpTo}/>
      <Visit/>
      <Footer onJump={jumpTo}/>
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} onAdd={addToCart}/>
      {drawerOpen && (
        <RequestDrawer
          items={cart}
          onClose={() => setDrawerOpen(false)}
          onRemove={index => setCart(previous => previous.filter((_, i) => i !== index))}
        />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
