//ejemplos con el classlist css dinamico
/* const capa = document.getElementById("capa");

capa.addEventListener("click", () => {
  capa.classList.add("fondo1", "borde");
});
 */

const pereira = document.querySelector("#pereira");
const ciudades = document.querySelector("#ciudades");

//elemento padre traversal DOM

/* console.log(pereira.parentElement);
console.log(pereira.childNodes); */

// mas ejemplos de hijos

console.log(ciudades.children[2].textContent);

//hermanos
console.log(ciudades.previousElementSibling); //anterior
console.log(ciudades.nextElementSibling); //posterior
