/* ============================================================
   Monielle Alencar — Personal Academic Website
   JavaScript: Bilingual Switcher, Mobile Navigation, Scroll Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Switcher Initialization
  const currentLang = localStorage.getItem('monielle_site_lang') || 'en';
  setLanguage(currentLang);

  // 2. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Navbar Transparent to Solid Scroll Effect
  const navbar = document.querySelector('.navbar');
  if (navbar && navbar.classList.contains('nav-transparent')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 4. Scroll Reveal Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });
});

/**
 * Global Language Switcher function (EN | PT)
 * Shows/hides elements with .lang-en and .lang-pt classes
 */
function setLanguage(lang) {
  const langEnElements = document.querySelectorAll('.lang-en');
  const langPtElements = document.querySelectorAll('.lang-pt');
  const enBtn = document.getElementById('lang-en-btn');
  const ptBtn = document.getElementById('lang-pt-btn');

  if (lang === 'pt') {
    langEnElements.forEach(el => el.style.display = 'none');
    langPtElements.forEach(el => {
      // restore original display or block/inline
      if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'STRONG' || el.tagName === 'EM') {
        el.style.display = 'inline';
      } else {
        el.style.display = 'block';
      }
    });
    if (enBtn) enBtn.classList.remove('active');
    if (ptBtn) ptBtn.classList.add('active');
    document.documentElement.lang = 'pt';
    localStorage.setItem('monielle_site_lang', 'pt');
  } else {
    langPtElements.forEach(el => el.style.display = 'none');
    langEnElements.forEach(el => {
      if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'STRONG' || el.tagName === 'EM') {
        el.style.display = 'inline';
      } else {
        el.style.display = 'block';
      }
    });
    if (ptBtn) ptBtn.classList.remove('active');
    if (enBtn) enBtn.classList.add('active');
    document.documentElement.lang = 'en';
    localStorage.setItem('monielle_site_lang', 'en');
  }
}
