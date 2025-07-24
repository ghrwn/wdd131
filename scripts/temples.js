// Toggle hamburger menu
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// Footer date updates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
