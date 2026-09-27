const boton = document.querySelector<HTMLButtonElement>('#boton-dato');
const dato = document.querySelector<HTMLParagraphElement>('#dato-extra');

if (boton && dato) {
  boton.addEventListener('click', () => {
    dato.hidden = !dato.hidden;
    boton.textContent = dato.hidden ? 'Mostrar un dato' : 'Ocultar el dato';
  });
}
