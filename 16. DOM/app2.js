// queryselector me permite seleccionar grupos de etiquetas, crea una lista indexada

const li = document.querySelectorAll("li");
//ejemplo de childnodes

const capa = document.getElementById("capa");
// creacion del nodelist y almacenamiento en variable
const nodosHijos = capa.childNodes;

//console.log(nodosHijos);
// ejemplo de item con node list
//console.log(nodosHijos.item(3));

// recorriendo el nodelist

//entries devuelve llave-valor de la lista(array)
/* for (const entradasLista of nodosHijos.entries()) {
  console.log(entradasLista);
}
//values devuelve solamente los valores de la lista
for (const valores of nodosHijos.values()) {
  console.log(valores);
}
//keys devuelve solamente las llaves de la lista
for (const llaves of nodosHijos.keys()) {
  console.log(llaves);
}
 */
// usando foreach

//obtener solo los valores
/* nodosHijos.forEach((nodohijo) => {
  console.log(nodohijo);
}); */

//obtener solo las llaves
nodosHijos.forEach((nodohijo, index) => {
  console.log(index);
});
