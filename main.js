// Toggle mobile navigation menu
window.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('menu-close');
  const menu = document.getElementById('menu');
  if (menu) {
    if (openBtn) openBtn.addEventListener('click', () => {
      menu.classList.toggle('translate-x-0');
    });
    if (closeBtn) closeBtn.addEventListener('click', () => {
      menu.classList.toggle('translate-x-0');
    });
  }
  // Initialize AOS animations
  if (window.AOS) AOS.init({ once: true });
});
