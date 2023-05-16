const botonMenuHeader = document.getElementById('boton-menu-header');
const barraDeNav = document.getElementById('barra-de-nav');

botonMenuHeader.addEventListener('click', function() {
  barraDeNav.classList.toggle('menu-plegado');
});