/**
 * OREUM · 오름
 * main.js — sticky nav shadow, hero slide counter, intersection reveal
 */
(function () {
  'use strict';

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('siteNav');
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 4
        ? '0 8px 24px -12px rgba(0,0,0,.5)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll reveal ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section, .wide, .quote-sec, .cta, .hero-inner, .trail, .stay, .article')
      .forEach((el) => {
        el.classList.add('reveal');
        io.observe(el);
      });
  }

  /* ---------- Simple stays tab filter (visual only) ---------- */
  document.querySelectorAll('.stays-tabs').forEach((group) => {
    group.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      e.preventDefault();
      group.querySelectorAll('a').forEach((a) => a.classList.remove('on'));
      link.classList.add('on');
    });
  });

  /* ---------- Smooth anchor scroll with header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
