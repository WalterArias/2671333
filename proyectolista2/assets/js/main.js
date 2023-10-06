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
// metodo para leer el contenido: getItem()
// ejemplo de almacenamiento usando valores sencillos y objetos
let objeto = { nombre: "Pedro", apellido: "Perez", edad: 33 };
db.setItem(10, "Juanillo");
db.setItem(11, "Pedrillo");
db.setItem(12, JSON.stringify(objeto));

//leer la bd

let resultado = JSON.parse(db.getItem(12));
console.log(resultado);
