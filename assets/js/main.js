/**
 * OREUM · 오름
 * main.js
 *   · sticky nav shadow
 *   · scroll reveal
 *   · filter tabs
 *   · smooth anchor scroll
 *   · KR / CN / EN language toggle (localStorage persistence)
 */
(function () {
  'use strict';

  /* ---------- Language toggle (KR / CN / EN) ---------- */
  const STORAGE_KEY = 'oreum:lang';
  const LANG_ATTR = { ko: 'ko', cn: 'zh-CN', en: 'en' };

  function setLang(lang) {
    if (!LANG_ATTR[lang]) lang = 'ko';
    const html = document.documentElement;
    html.classList.remove('lang-ko', 'lang-cn', 'lang-en');
    html.classList.add('lang-' + lang);
    html.setAttribute('lang', LANG_ATTR[lang]);

    document.querySelectorAll('.lang-toggle button').forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    // Swap placeholders based on data-ph-{ko|cn|en}
    const phAttr = 'data-ph-' + lang;
    document.querySelectorAll('[data-ph-ko], [data-ph-cn], [data-ph-en]').forEach((el) => {
      const val = el.getAttribute(phAttr);
      if (val) el.setAttribute('placeholder', val);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  let initialLang = 'ko';
  try { initialLang = localStorage.getItem(STORAGE_KEY) || 'ko'; } catch (e) {}
  setLang(initialLang);

  document.querySelectorAll('.lang-toggle button').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  /* ---------- Sticky nav shadow on scroll ---------- */
  const nav = document.getElementById('siteNav');
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 4 ? '0 8px 24px -12px rgba(0,0,0,.5)' : 'none';
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
      .forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  }

  /* ---------- Filter tabs (visual only) ---------- */
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
