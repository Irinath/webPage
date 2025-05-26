let elemento = document.querySelector('.mi-clase');
elemento.textContent = 'Adiós!!';

const boton = document.querySelector('.mi-boton');

boton.addEventListener("click", function() {
    console.log("hicimos un click!");
});