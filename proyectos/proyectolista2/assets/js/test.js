/* let adso = [];

//al final
adso.push("narva", "lopez", "steven", "hector", "alzate");
console.log(adso);
//borrar el primero
adso.shift();
console.log(adso);
//agrega al inicio
adso.unshift("javier");
console.log(adso);
// inserta o elimina dependiendo de los parametros  OJO !!!!
adso.splice(2, 1, "bladimir");
console.log(adso);

//posicion especifica de acuerdo al indice
adso[3] = "xyzccc";
 */
let pares = [2, 4, 6, 8];

//recorrer
/* for (let index = 0; index < equipos.length; index++) {
  console.log(equipos[index]);
} */
/* equipos.forEach((elemento) => {
  console.log(elemento);
}); */

let arregloNuevo = pares.map((par) => {
  console.log(par + 1);
});
