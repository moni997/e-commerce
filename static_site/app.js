'use strict';

// Simple static demo store with client-side cart and hash routing
const state = {
  products: [
    // Clothing
    { id: 'p1', name: 'Classic T-Shirt', price: 19.99, category: 'Clothing', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop' },
    { id: 'p2', name: 'Hoodie', price: 39.0, category: 'Clothing', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop' },
    { id: 'p3', name: 'Denim Jacket', price: 69.0, category: 'Clothing', image: 'https://images.unsplash.com/photo-1520975594081-16f49f4f9c84?q=80&w=800&auto=format&fit=crop' },
    { id: 'p4', name: 'Blue Jeans', price: 49.0, category: 'Clothing', image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop' },
    { id: 'p5', name: 'Summer Dress', price: 59.0, category: 'Clothing', image: 'https://images.unsplash.com/photo-1520975923810-923f57f2db4b?q=80&w=800&auto=format&fit=crop' },

    // Footwear
    { id: 'p6', name: 'Running Shoes', price: 59.99, category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { id: 'p7', name: 'Sneakers', price: 79.0, category: 'Footwear', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop' },
    { id: 'p8', name: 'Leather Boots', price: 99.0, category: 'Footwear', image: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=800&auto=format&fit=crop' },
    { id: 'p9', name: 'Sandals', price: 29.0, category: 'Footwear', image: 'https://images.unsplash.com/photo-1521194061796-6c2f0b34c02e?q=80&w=800&auto=format&fit=crop' },

    // Bags
    { id: 'p10', name: 'Leather Backpack', price: 89.0, category: 'Bags', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop' },
    { id: 'p11', name: 'Crossbody Bag', price: 49.0, category: 'Bags', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop' },
    { id: 'p12', name: 'Travel Duffel', price: 79.0, category: 'Bags', image: 'https://images.unsplash.com/photo-1542291026-700e4181f05f?q=80&w=800&auto=format&fit=crop' },

    // Electronics
    { id: 'p13', name: 'Smart Watch', price: 129.0, category: 'Electronics', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=800&auto=format&fit=crop' },
    { id: 'p14', name: 'Wireless Earbuds', price: 59.0, category: 'Electronics', image: 'https://images.unsplash.com/photo-1518443895914-6b6a5e05c2a5?q=80&w=800&auto=format&fit=crop' },
    { id: 'p15', name: 'Mirrorless Camera', price: 699.0, category: 'Electronics', image: 'https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=800&auto=format&fit=crop' },
    { id: 'p16', name: 'Ultrabook Laptop', price: 1099.0, category: 'Electronics', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop' },
    { id: 'p17', name: 'Smartphone', price: 799.0, category: 'Electronics', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },

    // Beauty
    { id: 'p18', name: 'Matte Lipstick', price: 14.0, category: 'Beauty', image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop' },
    { id: 'p19', name: 'Face Moisturizer', price: 22.0, category: 'Beauty', image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop' },

    // Home
    { id: 'p20', name: 'Coffee Maker', price: 49.0, category: 'Home', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop' },
    { id: 'p21', name: 'Blender', price: 39.0, category: 'Home', image: 'https://images.unsplash.com/photo-1604908176997-4312f4bcea3b?q=80&w=800&auto=format&fit=crop' },

    // Books
    { id: 'p22', name: 'Bestselling Novel', price: 12.0, category: 'Books', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop' },

    // Toys
    { id: 'p23', name: '1000-piece Puzzle', price: 18.0, category: 'Toys', image: 'https://images.unsplash.com/photo-1596496181861-b41a1f0a03de?q=80&w=800&auto=format&fit=crop' },

    // Sports
    { id: 'p24', name: 'Yoga Mat', price: 25.0, category: 'Sports', image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=800&auto=format&fit=crop' },
    { id: 'p25', name: 'Football', price: 29.0, category: 'Sports', image: 'https://images.unsplash.com/photo-1610194352374-bf7b3e30aa66?q=80&w=800&auto=format&fit=crop' },

    // Furniture
    { id: 'p26', name: 'Ergonomic Office Chair', price: 149.0, category: 'Furniture', image: 'https://images.unsplash.com/photo-1598300053652-953c3e6a8b75?q=80&w=800&auto=format&fit=crop' },

    // Appliances
    { id: 'p27', name: 'Air Fryer', price: 89.0, category: 'Appliances', image: 'https://images.unsplash.com/photo-1613478223719-6b1a1fba07bf?q=80&w=800&auto=format&fit=crop' },

    // Jewelry
    { id: 'p28', name: 'Gold Necklace', price: 129.0, category: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },

    // Accessories
    { id: 'p29', name: 'Sunglasses', price: 39.0, category: 'Accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop' },

    // Groceries
    { id: 'p30', name: 'Organic Coffee Beans', price: 16.0, category: 'Groceries', image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=800&auto=format&fit=crop' },
  ],
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  searchQuery: ''
};

const categories = Array.from(new Set(state.products.map(p => p.category))).sort();

function slugify(str){
  return String(str).toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
}
function categoryFromSlug(slug){
  return categories.find(c => slugify(c) === slug);
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(state.cart));
  document.getElementById('cart-count').textContent = state.cart.reduce((a, i) => a + i.qty, 0);
  // Update drawer view if open
  const drawer = document.getElementById('cart-drawer');
  if (drawer && !drawer.classList.contains('hidden')) {
    renderCartDrawer();
  }
}

function addToCart(productId) {
  const existing = state.cart.find(i => i.id === productId);
  if (existing) existing.qty += 1; else state.cart.push({ id: productId, qty: 1 });
  saveCart();
  alert('Added to cart');
}

function formatPrice(p) {
  return `$${p.toFixed(2)}`;
}

function categoriesChips(active){
  return `
    <div class="chips">
      ${categories.map(c => `
        <a class="chip ${active===c?'active':''}" href="#category/${slugify(c)}">${c}</a>
      `).join('')}
    </div>
  `;
}

function renderHome() {
  const app = document.getElementById('app');
  const list = getFilteredProducts(state.searchQuery);
  const cards = list.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}"/>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="price">${formatPrice(p.price)}</p>
        <small>${p.category}</small>
        <div class="actions">
          <a class="btn" href="#product/${p.id}">View</a>
          <button class="btn primary" data-add="${p.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');

  app.innerHTML = `
    <section>
      <h2>Browse by Category</h2>
      ${categoriesChips()}
      <h2 style="margin-top:12px">Featured Products</h2>
      <div class="grid">${cards}</div>
    </section>
  `;

  app.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', (e) => addToCart(e.currentTarget.dataset.add)));
}

function renderProduct(id) {
  const p = state.products.find(x => x.id === id);
  const app = document.getElementById('app');
  if (!p) { app.innerHTML = '<p>Product not found.</p>'; return; }
  app.innerHTML = `
    <section class="product">
      <img src="${p.image}" alt="${p.name}"/>
      <div>
        <h2>${p.name}</h2>
        <p class="price">${formatPrice(p.price)}</p>
        <p>Great choice for your daily needs. High quality, fast shipping.</p>
        <p><a href="#category/${slugify(p.category)}">${p.category}</a></p>
        <div class="actions">
          <button class="btn primary" id="add">Add to Cart</button>
          <a class="btn" href="#cart">Go to Cart</a>
        </div>
      </div>
    </section>
  `;
  document.getElementById('add').addEventListener('click', () => addToCart(p.id));
}

function renderCart() {
  const app = document.getElementById('app');
  if (state.cart.length === 0) {
    app.innerHTML = `<p>Your cart is empty. <a href="#">Shop now</a>.</p>`;
    return;
  }
  const rows = state.cart.map(item => {
    const p = state.products.find(x => x.id === item.id);
    return `
      <tr>
        <td>${p.name}</td>
        <td>${item.qty}</td>
        <td>${formatPrice(p.price)}</td>
        <td>${formatPrice(p.price * item.qty)}</td>
      </tr>
    `;
  }).join('');
  const total = state.cart.reduce((sum, item) => {
    const p = state.products.find(x => x.id === item.id);
    return sum + p.price * item.qty;
  }, 0);

  app.innerHTML = `
    <section>
      <h2>Your Cart</h2>
      <table class="cart">
        <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot><tr><td colspan="3" style="text-align:right">Total</td><td>${formatPrice(total)}</td></tr></tfoot>
      </table>
      <div class="actions">
        <button class="btn" id="clear">Clear Cart</button>
        <a class="btn primary" href="#checkout">Proceed to Checkout</a>
      </div>
    </section>
  `;
  document.getElementById('clear').addEventListener('click', () => { state.cart = []; saveCart(); renderCart(); });
}

function renderCategory(slug){
  const category = categoryFromSlug(slug);
  const app = document.getElementById('app');
  if (!category){ app.innerHTML = '<p>Category not found.</p>'; return; }
  const filtered = state.products.filter(p => p.category === category);
  const cards = filtered.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}"/>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="price">${formatPrice(p.price)}</p>
        <div class="actions">
          <a class="btn" href="#product/${p.id}">View</a>
          <button class="btn primary" data-add="${p.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
  app.innerHTML = `
    <section>
      <h2>${category}</h2>
      ${categoriesChips(category)}
      <div class="grid" style="margin-top:12px">${cards}</div>
    </section>
  `;
  app.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', (e) => addToCart(e.currentTarget.dataset.add)));
}

function renderCheckout() {
  const app = document.getElementById('app');
  const total = state.cart.reduce((sum, item) => {
    const p = state.products.find(x => x.id === item.id);
    return sum + p.price * item.qty;
  }, 0);
  app.innerHTML = `
    <section>
      <h2>Checkout</h2>
      <p>Total to pay: <strong>${formatPrice(total)}</strong></p>
      <form id="checkout-form" class="form">
        <input required placeholder="Full Name" />
        <input required placeholder="Email" type="email" />
        <input required placeholder="Address" />
        <button class="btn primary" type="submit">Place Order</button>
      </form>
    </section>
  `;
  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.cart = []; saveCart();
    alert('Order placed! (Demo)');
    window.location.hash = '';
  });
}

function router() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) renderHome();
  else if (hash.startsWith('product/')) renderProduct(hash.split('/')[1]);
  else if (hash.startsWith('category/')) renderCategory(hash.split('/')[1]);
  else if (hash === 'cart') renderCart();
  else if (hash === 'checkout') renderCheckout();
  else renderHome();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  saveCart();
  router();
  // Wire search
  const input = document.getElementById('search-input');
  const suggest = document.getElementById('search-suggest');
  if (input && suggest) {
    input.addEventListener('input', () => {
      state.searchQuery = input.value.trim();
      const results = getFilteredProducts(state.searchQuery).slice(0, 6);
      if (!state.searchQuery || results.length === 0) {
        suggest.classList.add('hidden');
        renderHome();
        return;
      }
      suggest.innerHTML = results.map(r => `
        <div class="suggest-item" data-id="${r.id}">
          <span>${r.name}</span>
          <small>${r.category}</small>
        </div>
      `).join('');
      suggest.classList.remove('hidden');
      suggest.querySelectorAll('.suggest-item').forEach(el => el.addEventListener('click', () => {
        window.location.hash = `product/${el.dataset.id}`;
        suggest.classList.add('hidden');
      }));
      renderHome();
    });
    input.addEventListener('focus', () => { if (input.value) suggest.classList.remove('hidden'); });
    document.addEventListener('click', (e) => {
      if (!suggest.contains(e.target) && e.target !== input) {
        suggest.classList.add('hidden');
      }
    });
  }
  // Wire drawer
  const openBtn = document.getElementById('open-cart');
  const closeBtn = document.getElementById('close-cart');
  const overlay = document.getElementById('drawer-overlay');
  const clearBtn = document.getElementById('drawer-clear');
  if (openBtn) openBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) overlay.addEventListener('click', closeCartDrawer);
  if (clearBtn) clearBtn.addEventListener('click', () => { state.cart = []; saveCart(); });
});

function getFilteredProducts(query){
  const q = (query || '').toLowerCase();
  if (!q) return state.products;
  return state.products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
}

function openCartDrawer(){
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer || !overlay) return;
  renderCartDrawer();
  drawer.classList.remove('hidden');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    drawer.classList.add('show');
    overlay.classList.add('show');
  });
}

function closeCartDrawer(){
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer || !overlay) return;
  drawer.classList.remove('show');
  overlay.classList.remove('show');
  setTimeout(() => {
    drawer.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 200);
}

function renderCartDrawer(){
  const container = document.getElementById('drawer-content');
  if (!container) return;
  if (state.cart.length === 0){
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  const rows = state.cart.map(item => {
    const p = state.products.find(x => x.id === item.id);
    return `
      <div class="drawer-item">
        <img src="${p.image}" alt="${p.name}" />
        <div>
          <div class="title">${p.name}</div>
          <div class="sub">${formatPrice(p.price)} × ${item.qty}</div>
        </div>
        <button class="icon-btn" data-minus="${p.id}">−</button>
        <button class="icon-btn" data-plus="${p.id}">+</button>
        <button class="icon-btn" data-remove="${p.id}">✕</button>
      </div>
    `;
  }).join('');
  container.innerHTML = rows;
  container.querySelectorAll('[data-plus]').forEach(b=>b.addEventListener('click', e=>{ const id=e.currentTarget.dataset.plus; const it=state.cart.find(i=>i.id===id); if(it){it.qty++; saveCart();}}));
  container.querySelectorAll('[data-minus]').forEach(b=>b.addEventListener('click', e=>{ const id=e.currentTarget.dataset.minus; const it=state.cart.find(i=>i.id===id); if(it){ it.qty=Math.max(0,it.qty-1); if(it.qty===0){ state.cart=state.cart.filter(i=>i.id!==id);} saveCart(); }}));
  container.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click', e=>{ const id=e.currentTarget.dataset.remove; state.cart=state.cart.filter(i=>i.id!==id); saveCart(); }));
}
