//definiendo objetos

let aprendices = [
  {
    id: 135,
    nombre: "Anderson Tasama",
    edad: 20,
    estaActivo: true,
    colores: ["red", "azul", "rosado", true],
    materias: {
      ingles: 2.3,
      programacion: 5,
      etica: 4.8,
    },
  },
  {
    id: 200,
    nombre: "Felipe Perez",
  },
];

// operador de objetos de javascript : .
/* aprendices.nombre = "Pedro Perez";
aprendices.colores[0] = "rojo";
aprendices.materias.ingles = 2.8;
console.log(aprendices.materias);
 */
/*  aprendices.forEach((aprendiz) => {
  document.write(`${aprendiz.id} - ${aprendiz.nombre} <br>`);
}); */

aprendices.push({ id: 400, nombre: "Jose Gomez" });
//console.log(aprendices);

// formas clasica
/* aprendices.forEach((aprendiz) => {
  document.write(`${aprendiz.id} - ${aprendiz.nombre} <br>`);
});
 */
//forma 2

Object.entries(aprendices).forEach(([llave, valor]) => {
  if (valor.nombre === "Felipe Perez") {
    console.log(valor.nombre);
  }
});
