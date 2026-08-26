/**
 * Raíz de Plata — De Haro
 * Main JavaScript
 */

// ── Wine Data ──────────────────────────────────────────────────────
const wines = [
  {
    id: 1, name: 'Semillón 2023', type: 'blanco', typeName: 'Blanco',
    variantId: 45382735560886,
    varietal: '100% Semillón', vintage: '2023', alcohol: '12.1%', aging: null,
    vineyard: 'Viñedo Martínez', location: 'Fresnillo, Zacatecas',
    price: '$400', numericPrice: 400, image: 'images/wine-semillon.jpg',
    color: '#E8D5A3', badgeClass: 'wine-white',
    tastingNotes: 'Vino de color amarillo pálido con destellos verdosos. En nariz es fresco y expresivo, con aromas de cítricos, manzana verde, guayaba y piña, acompañados de delicados matices minerales. En boca es ligero y limpio, con sabores de pasto seco, piedra mojada y frutas cítricas. Final persistente, refrescante y mineral.',
    pairing: 'Mariscos frescos, ceviches, pescados a la parrilla, ensaladas y quesos suaves.',
    specialNote: null
  },
  {
    id: 2, name: 'Rosé 2023', type: 'rosado', typeName: 'Rosado',
    variantId: 45382735528118,
    varietal: '56% Syrah · 44% Cariñan', vintage: '2023', alcohol: '12.0%', aging: null,
    vineyard: 'Viñedo Martínez / Valle de Barranquillas', location: 'Fresnillo / Luis Moya, Zacatecas',
    price: '$450', numericPrice: 450, image: 'images/wine-rose.jpg',
    color: '#E8A0B0', badgeClass: 'wine-rose',
    tastingNotes: 'Rosado brillante con matices salmón. En nariz presenta aromas intensos de fresa, cereza, arándano y notas florales de jamaica. En boca es firme y bien estructurado, con múltiples capas de fruta roja. Refrescante, de textura limpia y final persistente de perfil frutal.',
    pairing: 'Ensaladas frescas, pescados, pastas ligeras, cocina mediterránea y antojitos mexicanos poco picantes.',
    specialNote: null
  },
  {
    id: 3, name: 'L.V.O. 2022', type: 'tinto', typeName: 'Tinto',
    variantId: 45382735495350,
    varietal: '40% Tempranillo · 40% Cariñan · 20% Nebbiolo', vintage: '2022', alcohol: '11.5%',
    aging: '11 meses en barrica de roble francés y americano',
    vineyard: 'Viñedo Valle de Barranquillas', location: 'Luis Moya, Zacatecas',
    price: '$655', numericPrice: 655, image: 'images/wine-lvo.jpg',
    color: '#722F37', badgeClass: 'wine-red',
    tastingNotes: 'Rojo profundo con reflejos rubí. Nariz elegante y compleja con aromas de ciruela y mora, acompañados de notas de vainilla, cereza, anís y café. En boca presenta cuerpo medio, acidez marcada y taninos firmes, con sabores de higo, cereza cocida y mermelada de fresa. Final largo y bien definido.',
    pairing: 'Carnes rojas, cordero, estofados, pastas con salsas intensas y cocina mexicana especiada.',
    specialNote: null
  },
  {
    id: 4, name: 'Syrah 2021', type: 'tinto', typeName: 'Tinto',
    variantId: 45382735462582,
    varietal: '100% Syrah', vintage: '2021', alcohol: '13.0%',
    aging: '14 meses en barrica de roble francés',
    vineyard: 'Viñedo Valle de Barranquillas', location: 'Luis Moya, Zacatecas',
    price: '$750', numericPrice: 750, image: 'images/wine-syrah.jpg',
    color: '#5B1A29', badgeClass: 'wine-red',
    tastingNotes: 'Rojo profundo con reflejos rubí. En nariz es intenso, con aromas de cereza, frambuesa y fresa madura, acompañados de notas de vainilla y chocolate. En boca es redondo y equilibrado, con taninos maduros y suaves, textura sedosa y un final prolongado y elegante.',
    pairing: 'Cortes de res, cordero, carnes a la parrilla, platillos de salsas intensas y quesos maduros.',
    specialNote: null
  },
  {
    id: 5, name: 'Cabernet Sauvignon 2020', type: 'tinto', typeName: 'Tinto',
    variantId: 45382735429814,
    varietal: '100% Cabernet Sauvignon', vintage: '2020', alcohol: '12.1%',
    aging: '14 meses en barrica de roble francés',
    vineyard: 'Viñedo Valle de Barranquillas', location: 'Luis Moya, Zacatecas',
    price: '$900', numericPrice: 900, image: 'images/wine-cabernet.jpg',
    color: '#4A1526', badgeClass: 'wine-red',
    tastingNotes: 'Vino de gran concentración, con aromas complejos de cereza, fresa y casis, acompañados de notas de mermelada de fresa, vainilla, cedro y chocolate fino. En boca es redondo y estructurado, con taninos maduros, suaves y persistentes. Final largo, elegante y profundo.',
    pairing: 'Cortes premium de res, cordero, carnes de larga cocción, platos de caza y quesos añejos.',
    specialNote: 'Vino de guarda y colección.'
  },
  {
    id: 6, name: 'Cosecha Tardía 2025', type: 'dulce', typeName: 'Cosecha Tardía',
    variantId: 45382735593654,
    varietal: '70% Sauvignon Blanc · 30% Semillón', vintage: '2025', alcohol: '10.2%', aging: null,
    vineyard: 'Viñedo Valle de Barranquillas', location: 'Luis Moya, Zacatecas',
    price: '$400', numericPrice: 400, image: 'images/wine-cosecha-tardia.jpg',
    color: '#D4A030', badgeClass: 'wine-sweet',
    tastingNotes: 'Dorado brillante con reflejos ámbar. En nariz es perfumado y expresivo, con aromas de fruta madura, miel, durazno, membrillo, naranja y almendra, acompañados de un delicado fondo mineral. En boca es de cuerpo medio, muy limpio y equilibrado, con dulzor refrescante y un final largo, afrutado y mineral.',
    pairing: 'Postres a base de frutas, tartas, cheesecake, crème brûlée, quesos azules o para disfrutarse solo como vino de sobremesa.',
    specialNote: null,
    residualSugar: '8%'
  }
];

// ── Cart State ─────────────────────────────────────────────────────
let cart = [];
const WHATSAPP_NUMBER = '524941044143';

// ── Initialize ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAgeGate();
  initNavbar();
  initMobileNav();
  initSmoothScroll();
  initScrollAnimations();
  initFilters();
  initProductModal();
  initCart();
  initContactForm();
  initHeroParallax();
  initCounters();
  initBackToTop();
});

// ═══ 1. AGE GATE ═══════════════════════════════════════════════════
function initAgeGate() {
  const ageGate = document.getElementById('age-gate');
  if (!ageGate) return;

  const btnYes = document.getElementById('age-yes');
  const btnNo = document.getElementById('age-no');
  const errorEl = document.getElementById('age-gate-error');

  let isVerified = false;
  try {
    isVerified = sessionStorage.getItem('ageVerified') === 'true' || localStorage.getItem('ageVerified') === 'true';
  } catch (e) {
    console.warn('Storage check exception:', e);
  }

  if (isVerified) {
    ageGate.classList.add('hidden');
    document.body.classList.remove('age-gate-active');
    ageGate.style.display = 'none';
    return;
  }

  document.body.classList.add('age-gate-active');
  ageGate.classList.remove('hidden');

  function confirmAge() {
    try {
      sessionStorage.setItem('ageVerified', 'true');
      localStorage.setItem('ageVerified', 'true');
    } catch (err) {}

    ageGate.classList.add('hidden');
    document.body.classList.remove('age-gate-active');

    setTimeout(() => {
      if (ageGate.classList.contains('hidden')) {
        ageGate.style.display = 'none';
      }
    }, 500);
  }

  function denyAge() {
    if (errorEl) errorEl.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'https://www.google.com';
    }, 1500);
  }

  btnYes?.addEventListener('click', confirmAge);
  btnNo?.addEventListener('click', denyAge);

  document.addEventListener('keydown', (e) => {
    if (document.body.classList.contains('age-gate-active')) {
      if (e.key === 'Enter') confirmAge();
    }
  });
}

// ═══ 2. NAVBAR SCROLL ══════════════════════════════════════════════
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
}

// ═══ 3. MOBILE NAV ═════════════════════════════════════════════════
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('nav-open');
  }

  function openMenu() {
    toggle.classList.add('active');
    menu.classList.add('active');
    document.body.classList.add('nav-open');
  }

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu?.querySelectorAll('.nav-menu__link')?.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (menu?.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });
}

// ═══ 4. SMOOTH SCROLL ══════════════════════════════════════════════
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const nav = document.getElementById('navbar') || document.querySelector('.navbar');
      const offset = (nav?.offsetHeight || 80) + 10;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
}

// ═══ 5. SCROLL ANIMATIONS ══════════════════════════════════════════
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay;
        if (delay) entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

// ═══ 6. PRODUCT FILTERS ════════════════════════════════════════════
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'todos' || card.dataset.type === filter;
        if (match) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 350);
        }
      });
    });
  });
}

// ═══ 7. PRODUCT DETAIL MODAL ═══════════════════════════════════════
function initProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  // Open from "Ver Detalles" buttons
  document.querySelectorAll('.product-card__details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.wineId);
      const wine = wines.find(w => w.id === id);
      if (wine) { populateModal(wine); openModal(modal); }
    });
  });

  // Mobile / Touch: Open from tapping product card image or name directly
  document.querySelectorAll('.product-card').forEach(card => {
    const imgWrap = card.querySelector('.product-card__image-wrapper');
    const nameEl = card.querySelector('.product-card__name');
    const id = parseInt(card.dataset.id);

    const handleCardOpen = (e) => {
      if (e.target.closest('.add-to-cart-btn')) return;
      e.preventDefault();
      const wine = wines.find(w => w.id === id);
      if (wine) { populateModal(wine); openModal(modal); }
    };

    if (imgWrap) {
      imgWrap.style.cursor = 'pointer';
      imgWrap.addEventListener('click', handleCardOpen);
    }
    if (nameEl) {
      nameEl.style.cursor = 'pointer';
      nameEl.addEventListener('click', handleCardOpen);
    }
  });

  // Open from footer wine links
  document.querySelectorAll('.footer__wine-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(link.dataset.wineId);
      const wine = wines.find(w => w.id === id);
      if (wine) { populateModal(wine); openModal(modal); }
    });
  });

  // Close
  document.getElementById('modal-close')?.addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__content')) {
      closeModal(modal);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(modal);
  });
}

function populateModal(wine) {
  const $ = (id) => document.getElementById(id);

  $('modal-image').src = wine.image;
  $('modal-image').alt = wine.name;

  const badge = $('modal-badge');
  badge.textContent = wine.typeName;
  badge.className = 'modal__badge ' + wine.badgeClass;

  $('modal-name').textContent = wine.name;
  $('modal-varietal').textContent = wine.varietal;
  $('modal-vintage').textContent = wine.vintage;
  $('modal-alcohol').textContent = wine.alcohol;

  const agingWrapper = $('modal-aging-wrapper');
  const agingEl = $('modal-aging');
  if (wine.aging) {
    agingWrapper.style.display = '';
    agingEl.textContent = wine.aging;
  } else {
    agingWrapper.style.display = 'none';
  }

  $('modal-vineyard').textContent = `${wine.vineyard} — ${wine.location}`;
  $('modal-tasting').textContent = wine.tastingNotes;
  $('modal-pairing').textContent = wine.pairing;

  const specialNote = $('modal-special-note');
  const specialText = $('modal-special-text');
  if (wine.specialNote) {
    specialNote.style.display = 'flex';
    specialText.textContent = wine.specialNote;
  } else {
    specialNote.style.display = 'none';
  }

  $('modal-price').innerHTML = `${wine.price} <small style="font-size:0.85rem;color:var(--color-gold);font-family:var(--font-body);letter-spacing:1px;margin-left:4px;">MXN</small>`;

  // Add to cart from modal
  const addBtn = $('modal-add-cart');
  addBtn.onclick = () => {
    addToCart(wine);
    closeModal(document.getElementById('product-modal'));
    openCartSidebar();
  };
}

function openModal(modal) {
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// ═══ 8. CART SYSTEM ════════════════════════════════════════════════
function initCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartPanel = cartSidebar?.querySelector('.cart-sidebar__panel');
  const cartOverlay = cartSidebar?.querySelector('.cart-sidebar__overlay');

  // Cart button in nav
  document.getElementById('cart-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCartSidebar();
  });
  document.getElementById('cart-icon-bubble')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleCartSidebar();
  });

  // Close cart on close button click
  document.getElementById('cart-close')?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeCartSidebar();
  });

  // Close cart when clicking or tapping on the overlay
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCartSidebar();
    });
    cartOverlay.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      closeCartSidebar();
    }, { passive: true });
  }

  // Close cart when clicking anywhere outside the cart panel on the entire page
  document.addEventListener('click', (e) => {
    if (!cartSidebar || !cartSidebar.classList.contains('active')) return;
    if (cartPanel && !cartPanel.contains(e.target) && !e.target.closest('#cart-btn, #cart-icon-bubble, .add-to-cart-btn, #modal-add-cart')) {
      closeCartSidebar();
    }
  });

  // Close cart on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartSidebar?.classList.contains('active')) {
      closeCartSidebar();
    }
  });

  // Close cart when clicking on any navigation or section link
  document.querySelectorAll('a[href^="#"], .navbar__link, .mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      closeCartSidebar();
    });
  });

  // Add to cart from product cards
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.wineId);
      const wine = wines.find(w => w.id === id);
      if (wine) {
        addToCart(wine);
        // Brief animation on button
        btn.textContent = '✓ Agregado';
        btn.style.borderColor = '#25D366';
        btn.style.color = '#25D366';
        setTimeout(() => {
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Agregar';
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 1500);
      }
    });
  });

  // Native Shopify Checkout
  document.getElementById('shopify-checkout')?.addEventListener('click', checkoutShopify);

  // Checkout via WhatsApp
  document.getElementById('cart-checkout')?.addEventListener('click', checkoutWhatsApp);
}

function addToCart(wine) {
  // Resolve real image from the DOM card or fallback to public URL
  const card = document.querySelector(`.product-card[data-id="${wine.id}"]`);
  const imgEl = card?.querySelector('.product-card__image');
  const realImage = imgEl?.src || `https://myalexverse.github.io/raiz-de-plata-website/${wine.image}`;

  const existing = cart.find(item => item.id === wine.id);
  if (existing) {
    existing.qty += 1;
    existing.image = realImage;
  } else {
    cart.push({ ...wine, image: realImage, qty: 1 });
  }
  updateCartUI();
}

function changeQuantity(wineId, delta) {
  const item = cart.find(i => i.id === wineId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(wineId);
  } else {
    updateCartUI();
  }
}

function removeFromCart(wineId) {
  cart = cart.filter(item => item.id !== wineId);
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  const itemsEl = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const totalEl = document.getElementById('cart-total');

  // Count badge
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countEl) {
    countEl.textContent = totalItems;
    countEl.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  // Items list
  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = '';
    if (footerEl) footerEl.style.display = 'none';
    itemsEl?.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = '';

  // Remove old items
  itemsEl?.querySelectorAll('.cart-item').forEach(el => el.remove());

  // Add items
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item__image" onerror="this.src='https://myalexverse.github.io/raiz-de-plata-website/images/wine-cabernet.jpg'">
      <div class="cart-item__info">
        <p class="cart-item__name">${item.name}</p>
        <p class="cart-item__varietal">${item.varietal}</p>
        <div class="cart-item__price-qty">
          <span class="cart-item__price">${item.price} MXN</span>
          <div class="cart-item__qty-controls">
            <button class="qty-btn qty-btn--minus" data-id="${item.id}" aria-label="Disminuir cantidad">−</button>
            <span class="qty-count">${item.qty}</span>
            <button class="qty-btn qty-btn--plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item__remove" data-id="${item.id}" aria-label="Eliminar producto" title="Eliminar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    div.querySelector('.qty-btn--minus').addEventListener('click', () => changeQuantity(item.id, -1));
    div.querySelector('.qty-btn--plus').addEventListener('click', () => changeQuantity(item.id, 1));
    div.querySelector('.cart-item__remove').addEventListener('click', () => removeFromCart(item.id));
    itemsEl.appendChild(div);
  });

  // Total
  const total = cart.reduce((sum, item) => sum + (item.numericPrice * item.qty), 0);
  if (totalEl) totalEl.textContent = `$${total.toLocaleString()} MXN`;
}

function openCartSidebar() {
  document.getElementById('cart-sidebar')?.classList.add('active');
  document.body.classList.add('cart-open');
}

function closeCartSidebar() {
  document.getElementById('cart-sidebar')?.classList.remove('active');
  document.body.classList.remove('cart-open');
}

function toggleCartSidebar() {
  const cartEl = document.getElementById('cart-sidebar');
  if (cartEl?.classList.contains('active')) {
    closeCartSidebar();
  } else {
    openCartSidebar();
  }
}

// ═══ 9. SHOPIFY & WHATSAPP CHECKOUT ════════════════════════════════
async function checkoutShopify() {
  if (cart.length === 0) return;
  const btn = document.getElementById('shopify-checkout');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;">⏳</span> Conectando con Checkout...';
  }

  try {
    // Si estamos en entorno Shopify con Ajax Cart API
    await fetch('/cart/clear.js', { method: 'POST' });
    const itemsToAdd = cart.map(item => ({
      id: item.variantId || 45382735429814,
      quantity: item.qty
    }));

    const res = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: itemsToAdd })
    });

    if (res.ok) {
      window.location.href = '/checkout';
      return;
    }
  } catch (err) {
    console.log('Shopify API fallback:', err);
  }

  // Fallback seguro mediante permalink directo a la tienda en vivo
  const permalinkItems = cart.map(item => `${item.variantId || 45382735429814}:${item.qty}`).join(',');
  window.location.href = `https://raiz-de-plata-2.myshopify.com/cart/${permalinkItems}`;
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const totalBottles = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.numericPrice * item.qty), 0);

  let message = `🍷 *SOLICITUD DE PEDIDO — RAÍZ DE PLATA*\n`;
  message += `_De Haro · Bodega y Viñedos_\n\n`;
  message += `Hola, estuve explorando su tienda en línea y me gustaría solicitar el pedido de las siguientes botellas:\n\n`;

  cart.forEach((item, index) => {
    const itemSubtotal = item.numericPrice * item.qty;
    message += `*${index + 1}. ${item.name}*\n`;
    message += `   • Varietal: ${item.varietal}\n`;
    message += `   • Cantidad: ${item.qty} ${item.qty === 1 ? 'botella' : 'botellas'}\n`;
    message += `   • Precio: ${item.price} MXN c/u (Subtotal: $${itemSubtotal.toLocaleString()} MXN)\n\n`;
  });

  message += `──────────────\n`;
  message += `📦 *Total de botellas:* ${totalBottles} ${totalBottles === 1 ? 'pieza' : 'piezas'}\n`;
  message += `💰 *Subtotal estimado:* $${totalAmount.toLocaleString()} MXN\n`;
  message += `──────────────\n\n`;
  message += `¿Me podrían apoyar con la cotización del envío a mi domicilio y los datos para realizar el pago / transferencia?\n\n`;
  message += `📍 *Mis datos de entrega:*\n`;
  message += `• Nombre completo:\n`;
  message += `• Ciudad y Estado:\n`;
  message += `• Código Postal (C.P.):\n\n`;
  message += `¡Quedo a la espera de su confirmación, muchas gracias!`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

// ═══ 10. CONTACT FORM ══════════════════════════════════════════════
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name')?.value || '';
    const email = form.querySelector('#contact-email')?.value || '';
    const phone = form.querySelector('#contact-phone')?.value || '';
    const subject = form.querySelector('#contact-subject')?.value || '';
    const msg = form.querySelector('#contact-message')?.value || '';

    if (!name || !msg) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }

    let message = `📩 *Mensaje desde la Web — Raíz de Plata*\n\n`;
    message += `*Nombre:* ${name}\n`;
    if (email) message += `*Email:* ${email}\n`;
    if (phone) message += `*Teléfono:* ${phone}\n`;
    if (subject) message += `*Asunto:* ${subject}\n`;
    message += `\n*Mensaje:*\n${msg}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');

    form.reset();
  });
}

// ═══ 11. HERO PARALLAX ═════════════════════════════════════════════
function initHeroParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scroll = window.scrollY;
        if (scroll < window.innerHeight) {
          heroBg.style.transform = `translateY(${scroll * 0.35}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ═══ 12. COUNTER ANIMATION ═════════════════════════════════════════
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);

  const tick = () => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      return;
    }
    el.textContent = Math.floor(current);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ═══ 13. BACK TO TOP ═══════════════════════════════════════════════
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
