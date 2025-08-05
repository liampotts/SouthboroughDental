// Toggle mobile navigation menu
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  if (button && menu) {
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
