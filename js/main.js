// ===========================
// MAIN JAVASCRIPT - Dronixsys
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Menu ----
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Products Dropdown (mobile accordion toggle) ----
  // On mobile the caret buttons expand/collapse submenus.
  // On desktop the menus open on hover via CSS, so these only act on small screens.
  const isMobileNav = () => window.matchMedia('(max-width: 768px)').matches;

  document.querySelectorAll('.dropdown-caret').forEach(caret => {
    caret.addEventListener('click', (e) => {
      if (!isMobileNav()) return;
      e.preventDefault();
      e.stopPropagation();
      const dropdown = caret.closest('.nav-dropdown');
      const isOpen = dropdown.classList.toggle('open');
      caret.setAttribute('aria-expanded', isOpen);
    });
  });

  document.querySelectorAll('.submenu-caret').forEach(caret => {
    caret.addEventListener('click', (e) => {
      if (!isMobileNav()) return;
      e.preventDefault();
      e.stopPropagation();
      const submenu = caret.closest('.dropdown-submenu');
      const isOpen = submenu.classList.toggle('open');
      caret.setAttribute('aria-expanded', isOpen);
    });
  });

  // ---- Scroll to Top ----
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Intersection Observer (scroll animations) ----
  const animatedEls = document.querySelectorAll(
    '.fade-in-scroll, .slide-in-left, .slide-in-right, .stagger-item'
  );

  if (animatedEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    animatedEls.forEach(el => observer.observe(el));
  }

  // ---- Homepage contact form (basic submit) ----
  const homeForm = document.getElementById('homeContactForm');
  if (homeForm) {
    homeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = homeForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
        homeForm.reset();
        alert('Thank you! We will get back to you soon.');
      }, 1200);
    });
  }

});

// ---- Utility: debounce ----
function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

window.debounce = debounce;
