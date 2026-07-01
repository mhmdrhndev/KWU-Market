/* ============================================
   KWU Market — Main JavaScript
   Navbar toggle, scroll reveal
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollReveal();
});


// --- Navbar ---
function initNavbar() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
  }
}


// --- Scroll Reveal ---
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
