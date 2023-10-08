let tarea = document.getElementById("tarea");
let detalle = document.getElementById("detalle");
let btnGuardar = document.getElementById("btnGuardar");
let miTabla = document.getElementById("miTabla");

// instanciamos el almacenamiento local
const db = window.localStorage;

// CRUD en localstorage  Create Update Delete

const crear = () => {
  let objeto = { tarea: tarea.value, detalle: detalle.value };
  //db.setItem (key, objeto)
  db.setItem(Math.round(Math.random(1, 100) * 1000), JSON.stringify(objeto));
  Swal.fire({
    title: "Tarea Agregada!",
    text: "Desea agregar otra ?",
    icon: "success",
    confirmButtonText: "Oki",
  });
};
