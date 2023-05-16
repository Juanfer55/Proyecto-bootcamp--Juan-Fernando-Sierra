const botonMenuHeader = document.getElementById('boton-menu-header');
const barraDeNav = document.getElementById('barra-de-nav');

botonMenuHeader.addEventListener('click', function() {
  barraDeNav.classList.toggle('menu-plegado');
});
// Para hacer este código para el menú plegable investigué en internet porque no tengo mucho conocimiento en JavaScript//