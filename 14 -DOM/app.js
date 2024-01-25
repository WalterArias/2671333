// manipular el DOM
const titulo = document.getElementById("valor"); // forma clasica
const titulo2 = document.getElementsByClassName("titulo2");

//forma moderna
const tit1 = document.querySelector("#valor");
const tit2 = document.querySelector(".titulo2");

const receta = document.querySelector("#receta");
// obtener propiedades

/* alert(titulo.getAttribute("id")); // obtiene la propiedad que contiene en el id
alert(titulo.getAttribute("lang")); // obtiene el lenguaje */

// creacion de elementos

let dato = document.createElement("li");
dato.innerText = "Sal";
let dato2 = document.createElement("li");
dato2.innerText = "aceite";
let dato3 = document.createElement("li");
dato3.innerText = "Tomate";

receta.append(dato);
receta.append(dato2);
receta.append(dato3);

//propiedades de los elementos
// mostrar la cantidad de elementos hijos (child element)
/* alert(receta.childElementCount);
// los atributos
alert(receta.attributes);
// los hijos del elemento
alert(receta.children); */
//ancho y alto del elemento
/* alert(receta.clientHeight);
    alert(receta.clientWidth); */
console.log(receta.lastElementChild);
