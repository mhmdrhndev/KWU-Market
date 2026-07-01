/* ============================================
   KWU Market — Products Page JavaScript
   Product data, rendering, search & filter
   ============================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Snack Sehat Granola",
    description: "Granola homemade dengan rolled oats, almond, madu murni, dan cranberry. 100% bahan alami.",
    price: "Rp 25.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1517093602195-b40af9688b46?w=400&h=300&fit=crop&q=80",
    badge: "Makanan",
    seller: { name: "Andi Pratama", phone: "0812-3456-7890" }
  },
  {
    id: 2,
    name: "Jasa Desain Grafis & Logo",
    description: "Desain logo profesional untuk UMKM atau project kampus. Termasuk 3 konsep dan 2x revisi.",
    price: "Mulai Rp 50k",
    category: "digital",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop&q=80",
    badge: "Jasa & Layanan",
    seller: { name: "Badr Setiawan", phone: "0856-7890-1234" }
  },
  {
    id: 3,
    name: "Handmade Ceramic Mug",
    description: "Mug keramik handmade dengan desain unik. Cocok untuk hadiah atau koleksi pribadi.",
    price: "Rp 85.000",
    category: "craft",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop&q=80",
    badge: "Kerajinan",
    seller: { name: "Dina Lestari", phone: "0878-9012-3456" }
  },
  {
    id: 4,
    name: "Kaos Custom Desain",
    description: "Kaos cotton combed 30s dengan sablon DTF premium. Bisa custom desain sesuai keinginan.",
    price: "Rp 85.000",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=300&fit=crop&q=80",
    badge: "Fashion",
    seller: { name: "Dimas Rizky", phone: "0813-5678-1234" }
  },
  {
    id: 5,
    name: "Brownies Panggang Premium",
    description: "Brownies coklat panggang homemade dengan topping almond dan dark chocolate.",
    price: "Rp 35.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&q=80",
    badge: "Makanan",
    seller: { name: "Rina Aulia", phone: "0812-3456-7890" }
  },
  {
    id: 6,
    name: "Tote Bag Canvas",
    description: "Tote bag kanvas tebal dengan sablon desain original. Bisa custom nama atau quote.",
    price: "Rp 55.000",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=300&fit=crop&q=80",
    badge: "Fashion",
    seller: { name: "Fajar Hidayat", phone: "0838-2345-6789" }
  },
  {
    id: 7,
    name: "Es Kopi Susu Literan",
    description: "Es kopi susu fresh brew 1 liter. Blend arabika Gayo, manisnya pas.",
    price: "Rp 45.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&q=80",
    badge: "Makanan",
    seller: { name: "Rizky Ananda", phone: "0821-6789-0123" }
  },
  {
    id: 8,
    name: "Jasa Edit Video",
    description: "Editing video pendek untuk konten sosmed, presentasi, atau project. Durasi maks 3 menit.",
    price: "Rp 100.000",
    category: "digital",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop&q=80",
    badge: "Jasa & Layanan",
    seller: { name: "Andre Wijaya", phone: "0877-5678-9012" }
  },
  {
    id: 9,
    name: "Gelang Manik Custom",
    description: "Gelang manik-manik warna-warni handmade. Bisa request warna dan inisial nama.",
    price: "Rp 15.000",
    category: "craft",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop&q=80",
    badge: "Kerajinan",
    seller: { name: "Ayu Lestari", phone: "0878-9012-3456" }
  },
  {
    id: 10,
    name: "Lilin Aromaterapi Soy Wax",
    description: "Lilin aromaterapi soy wax murni. Aroma lavender atau vanilla, burn time 30+ jam.",
    price: "Rp 42.000",
    category: "craft",
    image: "https://images.unsplash.com/photo-1602607544928-e7ee7bf35dba?w=400&h=300&fit=crop&q=80",
    badge: "Kerajinan",
    seller: { name: "Hana Safira", phone: "0831-7890-1234" }
  },
  {
    id: 11,
    name: "Sambal Matah Homemade",
    description: "Sambal matah Bali autentik dalam jar 250ml. Level pedas bisa request.",
    price: "Rp 30.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop&q=80",
    badge: "Makanan",
    seller: { name: "Kadek Surya", phone: "0852-4567-8901" }
  },
  {
    id: 12,
    name: "Scrunchie Set (3pcs)",
    description: "Set 3 scrunchie dari kain satin premium. Warna pastel, elastis tahan lama.",
    price: "Rp 28.000",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1598030473002-bf41e7da4a79?w=400&h=300&fit=crop&q=80",
    badge: "Fashion",
    seller: { name: "Maya Anggraini", phone: "0896-6789-0123" }
  }
];

const BADGE_CLASS_MAP = {
  "Makanan": "product-card__badge--food",
  "Jasa & Layanan": "product-card__badge--service",
  "Kerajinan": "product-card__badge--craft",
  "Fashion": "product-card__badge--fashion"
};

document.addEventListener("DOMContentLoaded", () => {
  initProductsPage();
});

function initProductsPage() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const filterTabs = document.getElementById("filterTabs");

  let activeCategory = "all";
  let searchQuery = "";

  function renderProducts() {
    const filtered = PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.seller.name.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="products-empty">
          <div class="products-empty__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </div>
          <p class="products-empty__text">Produk tidak ditemukan</p>
          <p class="products-empty__hint">Coba ubah kata kunci atau filter kategori</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(product => {
      const initials = product.seller.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();

      const badgeClass = BADGE_CLASS_MAP[product.badge] || "product-card__badge--food";

      return `
        <div class="product-card" data-id="${product.id}">
          <div class="product-card__img-wrap">
            <span class="product-card__badge ${badgeClass}">${product.badge}</span>
            <img class="product-card__img" src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-card__body">
            <h3 class="product-card__name">${product.name}</h3>
            <p style="font-size:12px;color:#6b7280;margin-bottom:8px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${product.description}</p>
            <div class="product-card__seller">
              <span class="product-card__seller-dot"></span>
              Penjual: ${product.seller.name}
            </div>
            <div class="product-card__bottom">
              <span class="product-card__price">${product.price}</span>
            </div>
            <button class="btn-contact" onclick="toggleContact(this, ${product.id})" aria-expanded="false">
              Lihat Kontak Penjual
            </button>
            <div class="contact-reveal" id="contact-${product.id}">
              <div class="contact-reveal__inner">
                <div class="contact-reveal__avatar">${initials}</div>
                <div>
                  <div class="contact-reveal__name">${product.seller.name}</div>
                  <div class="contact-reveal__phone">${product.seller.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Search
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderProducts();
      }, 250);
    });
  }

  // Filter tabs
  if (filterTabs) {
    filterTabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-btn");
      if (!tab) return;

      filterTabs.querySelectorAll(".filter-btn").forEach(t =>
        t.classList.remove("filter-btn--active")
      );
      tab.classList.add("filter-btn--active");

      activeCategory = tab.dataset.category;
      renderProducts();
    });
  }

  renderProducts();
}


// --- Contact Toggle ---
function toggleContact(button, productId) {
  const reveal = document.getElementById(`contact-${productId}`);
  if (!reveal) return;

  const isOpen = reveal.classList.contains("open");

  // Close all
  document.querySelectorAll(".contact-reveal.open").forEach(el => {
    el.classList.remove("open");
    const card = el.closest(".product-card");
    if (card) {
      const btn = card.querySelector(".btn-contact");
      if (btn) {
        btn.textContent = "Lihat Kontak Penjual";
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });

  if (!isOpen) {
    reveal.classList.add("open");
    button.textContent = "Sembunyikan Kontak";
    button.setAttribute("aria-expanded", "true");
  }
}
