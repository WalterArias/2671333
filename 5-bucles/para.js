// bucle for o para en JS

let saludo = `Bienvenido a JS <br>`;
let condicionControl = 8; // esta es la bandera de parada del bucle

for (let index = 0; index < condicionControl; index++) {
  console.log(saludo);
  document.write("el resultado del problema:" + saludo + index); //estilo clasico
  document.write(`el resultado del problema: ${saludo}  ${index}`); //estilo moderno
}
