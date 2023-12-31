let tarea = document.getElementById("tarea");
let detalle = document.getElementById("detalle");
let btnGuardar = document.getElementById("btnGuardar");
let miTabla = document.getElementById("miTabla");
let btnBorra = document.getElementById("btnBorra");

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
  window.location.href = "http://127.0.0.1:5500/";
};

const borrarDb = () => {
  Swal.fire({
    title: "Esta seguro?",
    text: "Atención: esta operacion es irreversible!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar !",
  }).then((result) => {
    if (result.isConfirmed) {
      db.clear();
      Swal.fire("Borrado !", "Base de datos eliminada", "success");
      window.location.href = "http://127.0.0.1:5500/";
    }
  });
};

const listarDb = () => {
  let llaves = Object.keys(db);
  llaves.map((llave) => {
    let tareas = JSON.parse(db.getItem(llave));
    let fila = `<tr><td>${llave}</td><td>${tareas.tarea}</td><td>${tareas.detalle}</td><td><button type="button" class="btn btn-danger" onclick="borraUno()"><i class="bi bi-trash"</i></button></td></tr>`;
    miTabla.innerHTML += fila;
  });
};
listarDb();

const borraUno = () => {
  let valor = miTabla.rows[1].cells[0].innerHTML;
  console.log(valor);
};

// para revisar
function alertInnerHTML(e) {
  e = e || window.event; //IE
  alert(this.innerHTML);
}

for (var i = 0; i < miTabla.length; i++) {
  for (var j = 0; j < miTabla.rows[i].cells.length; j++) {
    miTabla.rows[i].cells[j].onclick = alertInnerHTML;
  }
}
