(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const menu = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  let stored = null;
  try { stored = localStorage.getItem('adarsh-theme'); } catch (_) { /* storage can be blocked */ }
  if (stored === 'dark' || stored === 'light') root.dataset.theme = stored;
  function updateTheme() {
    const isDark = root.dataset.theme === 'dark';
    if (toggle) {
      toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.textContent = isDark ? '☀' : '◐';
    }
  }
  updateTheme();
  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('adarsh-theme', next); } catch (_) { /* no persistence if blocked */ }
    updateTheme();
  });
  function closeMenu(){nav?.classList.remove('nav-open');menu?.setAttribute('aria-expanded','false');}
  menu?.addEventListener('click', () => {
    const open = !nav.classList.contains('nav-open');
    nav.classList.toggle('nav-open', open);
    menu.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', e => { if(e.matches) closeMenu(); });
})();
