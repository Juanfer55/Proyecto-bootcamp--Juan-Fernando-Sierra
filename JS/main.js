const botonMenuHeader = document.getElementById('boton-menu-header');
const barraDeNav = document.getElementById('barra-de-nav');

botonMenuHeader.addEventListener('click', function() {
  barraDeNav.classList.toggle('menu-plegado');
});

const elementosMenu = document.getElementsByClassName('barra-de-navegacion');
for (let i = 0; i < elementosMenu.length; i++) {
  elementosMenu[i].addEventListener('click', function() {
    barraDeNav.classList.add('menu-plegado');
  });
}
// Para hacer este código invesigué porque no tengo mucho conocimiento en JavaScript//