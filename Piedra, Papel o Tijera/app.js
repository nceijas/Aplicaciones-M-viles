const eleccionUsuarioElement = document.getElementById("eleccionUsuario");
const eleccionPCElement = document.getElementById("eleccionPC");
const resultadoElement = document.getElementById("resultado");
const victoriasUsuarioElement = document.getElementById("VicUsuario");
const victoriasPCElement = document.getElementById("VicPC");
const botones = document.querySelectorAll("button");
const CLICK = "click";
let scoreU = 0;
let scorePC = 0;
const eleccionesPosibles = ["Piedra", "Papel", "Tijera"];

botones.forEach((boton) => boton.addEventListener(CLICK, comenzar));

function comenzar(evento) {
  const boton = evento.currentTarget;
  const eleccionUsuario = boton.dataset.elec;
  const eleccionPC = getEeleccionPC();

  const resultado = quienGana(eleccionUsuario, eleccionPC);

  sumaUsuario(resultado);
  sumaPC(resultado);

  resultadoElement.innerText = `${resultado} usando ${eleccionUsuario} contra ${eleccionPC}`;
  eleccionUsuarioElement.setAttribute("src", `/Img/${eleccionUsuario}.png`);
  eleccionPCElement.setAttribute("src", `/Img/${eleccionPC}.png`);
  victoriasPCElement.innerText = `Victorias PC = ${scorePC}`;
  victoriasUsuarioElement.innerText = `Victorias Usuario = ${scoreU}`;
}

function getEeleccionPC() {
  const aleatorio = Math.floor(Math.random() * 3);

  return eleccionesPosibles[aleatorio];
}

function quienGana(eleccionUsuario, eleccionPC) {
  if (
    (eleccionUsuario === "Papel" && eleccionPC === "Piedra") ||
    (eleccionUsuario === "Piedra" && eleccionPC === "Tijera") ||
    (eleccionUsuario === "Tijera" && eleccionPC === "Papel")
  ) {
    return "GANASTE";
  } else if (eleccionUsuario === eleccionPC) {
    return "EMPATASTE";
  } else {
    return "PERDISTE";
  }
}

function sumaUsuario(resultado) {
  if (resultado === "GANASTE") {
    scoreU++;
  }
}

function sumaPC(resultado) {
  if (resultado === "PERDISTE") {
    scorePC++;
  }
}
