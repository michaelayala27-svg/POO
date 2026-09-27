const boton = document.querySelector('#boton-dato');
const dato = document.querySelector('#dato-extra');
if (boton && dato) {
  boton.addEventListener('click', () => {
    dato.hidden = !dato.hidden;
    boton.textContent = dato.hidden ? 'Mostrar un dato' : 'Ocultar el dato';
  });
}
