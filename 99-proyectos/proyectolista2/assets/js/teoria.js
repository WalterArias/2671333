// capturamos los elementos html con JS para programar

let id = document.getElementById("id");
let tarea = document.getElementById("tarea");
let detalle = document.getElementById("detalle");
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
let miTabla = document.getElementById("miTabla");

// instanciamos el almacenamiento local -- iniciar el servidor de bd
const db = window.localStorage;

// metodo para almacenar  : setItem(llave,contenido)
// metodo para leer el contenido: getItem(llave)
// ejemplo de almacenamiento usando valores sencillos y objetos
let objeto1 = { tarea: "Lavar platos", detalle: "todos los dias despues de almuerzo" };
let objeto2 = { tarea: "Repasar JS", detalle: "todas las noches" };

db.setItem(7, JSON.stringify(objeto1));
db.setItem(8, JSON.stringify(objeto2));

//leer la bd

/* let resultado = JSON.parse(db.getItem(12));
console.log(resultado); */

// deleteItem()   clear()    object.keys()
//

let llaves = Object.keys(db);

llaves.map((llave) => {
  let tareas = JSON.parse(db.getItem(llave));
  let fila = `<tr><td>${llave}</td><td>${tareas.tarea}</td><td>${tareas.detalle}</td></tr>`;
  miTabla.innerHTML += fila;
});
