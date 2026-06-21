/* ============================================
   KWU Market — Main JavaScript
   Static site logic: nav, scroll reveal,
   product rendering, search & filter,
   contact reveal toggle.
   ============================================ */

// ─── Product Data ────────────────────────────────
// Each product has a different seller (contact person).
const PRODUCTS = [
  {
    id: 1,
    name: "Brownies Panggang Premium",
    description: "Brownies coklat panggang homemade dengan topping almond dan dark chocolate. Tekstur fudgy, rasa intense.",
    price: "Rp 35.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=450&fit=crop&q=80",
    badge: "Best Seller",
    seller: { name: "Rina Aulia", phone: "0812-3456-7890" }
  },
  {
    id: 2,
    name: "Tote Bag Canvas Handmade",
    description: "Tote bag kanvas tebal dengan sablon desain original. Bisa custom nama atau quote favoritmu.",
    price: "Rp 55.000",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Dimas Pratama", phone: "0813-5678-1234" }
  },
  {
    id: 3,
    name: "Keripik Pisang Coklat",
    description: "Keripik pisang renyah dibalut coklat Belgia. Packaged rapi, cocok buat cemilan atau oleh-oleh.",
    price: "Rp 25.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Siti Nurhaliza", phone: "0857-1234-5678" }
  },
  {
    id: 4,
    name: "Gelang Manik Custom",
    description: "Gelang manik-manik warna-warni handmade. Bisa request warna dan inisial nama sesuai selera.",
    price: "Rp 15.000",
    category: "craft",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=450&fit=crop&q=80",
    badge: "New",
    seller: { name: "Ayu Lestari", phone: "0878-9012-3456" }
  },
  {
    id: 5,
    name: "Es Kopi Susu Literan",
    description: "Es kopi susu fresh brew dalam kemasan 1 liter. Blend arabika Gayo, manisnya pas, creaminess on point.",
    price: "Rp 45.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=450&fit=crop&q=80",
    badge: "Popular",
    seller: { name: "Rizky Ananda", phone: "0821-6789-0123" }
  },
  {
    id: 6,
    name: "Stiker Aesthetic Pack",
    description: "Paket 20 stiker waterproof dengan desain aesthetic original. Cocok buat laptop, tumbler, atau journal.",
    price: "Rp 20.000",
    category: "craft",
    image: "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Fajar Hidayat", phone: "0838-2345-6789" }
  },
  {
    id: 7,
    name: "Desain Logo & Branding",
    description: "Jasa desain logo profesional untuk UMKM atau project kampus. Termasuk 3 konsep dan 2x revisi.",
    price: "Rp 150.000",
    category: "digital",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Bayu Setiawan", phone: "0856-7890-1234" }
  },
  {
    id: 8,
    name: "Masker Kain Batik",
    description: "Masker kain 3 ply dengan motif batik modern. Nyaman dipakai seharian, bisa dicuci ulang.",
    price: "Rp 18.000",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Nadia Putri", phone: "0819-3456-7890" }
  },
  {
    id: 9,
    name: "Sambal Matah Homemade",
    description: "Sambal matah Bali autentik dalam jar 250ml. Bawang merah segar, serai harum, level pedas bisa request.",
    price: "Rp 30.000",
    category: "food",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Kadek Surya", phone: "0852-4567-8901" }
  },
  {
    id: 10,
    name: "Jasa Edit Video",
    description: "Editing video pendek untuk konten sosmed, presentasi kampus, atau project. Durasi maks 3 menit.",
    price: "Rp 100.000",
    category: "digital",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Andre Wijaya", phone: "0877-5678-9012" }
  },
  {
    id: 11,
    name: "Scrunchie Set (3pcs)",
    description: "Set 3 scrunchie dari kain satin premium. Warna pastel yang lembut, elastis tahan lama.",
    price: "Rp 28.000",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1598030473002-bf41e7da4a79?w=600&h=450&fit=crop&q=80",
    badge: "New",
    seller: { name: "Maya Anggraini", phone: "0896-6789-0123" }
  },
  {
    id: 12,
    name: "Lilin Aromaterapi Soy Wax",
    description: "Lilin aromaterapi dari soy wax murni. Aroma lavender atau vanilla, burn time 30+ jam.",
    price: "Rp 42.000",
    category: "craft",
    image: "https://images.unsplash.com/photo-1602607544928-e7ee7bf35dba?w=600&h=450&fit=crop&q=80",
    badge: null,
    seller: { name: "Hana Safira", phone: "0831-7890-1234" }
  }
];


// ─── DOM Ready ───────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollReveal();
  initProducts();
});


// ─── Navbar ──────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  // Scroll effect: hide on scroll down, show on scroll up
  if (navbar) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - lastScrollY;

          // Add scrolled styling when past threshold
          navbar.classList.toggle("scrolled", currentScrollY > 40);

          // Hide on scroll down, show on scroll up (only after 80px)
          if (currentScrollY > 80 && scrollDelta > 5) {
            navbar.classList.add("navbar--hidden");
          } else if (scrollDelta < -5) {
            navbar.classList.remove("navbar--hidden");
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });

    // Close on link click
    links.querySelectorAll(".navbar__link").forEach(link => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      });
    });
  }
}


// ─── Scroll Reveal ───────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach(el => observer.observe(el));
}


// ─── Products ────────────────────────────────────
function initProducts() {
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
        <div class="products__empty">
          <div class="products__empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted);"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          </div>
          <p class="products__empty-text">Produk tidak ditemukan</p>
          <p class="products__empty-hint">Coba ubah kata kunci atau filter kategori</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((product, index) => {
      const initials = product.seller.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .toUpperCase();

      const delayClass = `reveal-delay-${Math.min((index % 4) + 1, 6)}`;

      return `
        <div class="product-card reveal ${delayClass}" data-id="${product.id}">
          <div class="product-card__image-wrapper">
            <img
              class="product-card__image"
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
            />
            ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ""}
          </div>
          <div class="product-card__body">
            <p class="product-card__category">${formatCategory(product.category)}</p>
            <h3 class="product-card__name">${product.name}</h3>
            <p class="product-card__desc">${product.description}</p>
            <p class="product-card__price">${product.price}</p>
            <div class="product-card__footer">
              <button
                class="btn btn--contact"
                onclick="toggleContact(this, ${product.id})"
                aria-expanded="false"
                id="contact-btn-${product.id}"
              >
                Lihat Kontak Penjual
              </button>
              <div class="contact-reveal" id="contact-${product.id}">
                <div class="contact-reveal__inner">
                  <div class="contact-reveal__avatar">${initials}</div>
                  <div class="contact-reveal__info">
                    <div class="contact-reveal__name">${product.seller.name}</div>
                    <div class="contact-reveal__phone">${product.seller.phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Re-observe new reveal elements
    initScrollReveal();
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
      const tab = e.target.closest(".products__filter-tab");
      if (!tab) return;

      filterTabs.querySelectorAll(".products__filter-tab").forEach(t =>
        t.classList.remove("active")
      );
      tab.classList.add("active");

      activeCategory = tab.dataset.category;
      renderProducts();
    });
  }

  // Initial render
  renderProducts();
}


// ─── Contact Toggle ──────────────────────────────
function toggleContact(button, productId) {
  const reveal = document.getElementById(`contact-${productId}`);
  if (!reveal) return;

  const isOpen = reveal.classList.contains("open");

  // Close all other open contacts first
  document.querySelectorAll(".contact-reveal.open").forEach(el => {
    el.classList.remove("open");
    const parentCard = el.closest(".product-card");
    if (parentCard) {
      const btn = parentCard.querySelector(".btn--contact");
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


// ─── Helpers ─────────────────────────────────────
function formatCategory(cat) {
  const map = {
    food: "Kuliner",
    fashion: "Fashion",
    craft: "Kerajinan",
    digital: "Jasa Digital"
  };
  return map[cat] || cat;
}
