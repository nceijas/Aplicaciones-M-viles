const CLICK = "click";

// document.getElementById("LA").addEventListener(CLICK, function () {
//   alert("Soy la tecla LA");
// });

// function saludar(nombre) {
//   alert(`Hola, ${nombre}`);
// }

// function ingresarNombre(funcion) {
//   const nombre = prompt("Ingrese su nombre, por favor.");
//   funcion(nombre);
// }

// ingresarNombre(saludar);

const botones = document.querySelectorAll("button");

botones.forEach((boton) => boton.addEventListener(CLICK, Sonar));

function Sonar(evento) {
  const boton = evento.target;
  const nota = boton.dataset.note;
  const sonidoNota = document.getElementById(`sonido${nota}`);
  sonidoNota.pause();
  sonidoNota.currentTime = 0;
  sonidoNota.play();
}

document.addEventListener("keydown", teclado);

function teclado(evento) {
  const key = evento.key;
  const boton = document.querySelector(`button[data-key="${key}"]`);
  if (boton) boton.click();
}
