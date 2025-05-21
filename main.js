import './sass/style.scss';
// Este código de abajo me ayuda a abrir el menú de hamburguesa
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

