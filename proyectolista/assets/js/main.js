// Crear el arreglo de objetos vacio
const tareas = [];

// capturamos los elementos html con JS para programar
let id = document.getElementById("id");
let tarea = document.getElementById("tarea");
let detalle = document.getElementById("detalle");
let btnGuardar = document.getElementById("btnGuardar");
let btnMostrar = document.getElementById("btnMostrar");
let miTabla = document.getElementById("miTabla");
let btnJson = document.getElementById("btnJson");
let btnTexto = document.getElementById("btnTexto");

// funciones de la app

const guardar = () => {
  tareas.push({
    id: id.value,
    tarea: tarea.value,
    detalle: detalle.value,
  });
  /*   window.location.href = "/index.html"; */
  mostrar();
};

const mostrar = () => {
  /*
  // muestra todo el arreglo de objetos
  console.log(tareas);
  // muestra la posicion indicada del arreglo de objetos
  console.log(tareas[1]);
  // en la posicion indicada del arreglo de objetos un valor especifico de la fila (columna)
  console.log(tareas[1].tarea);*/

  /* for (let index = 0; index < tareas.length; index++) {
    console.log(tareas[index].id);
  } */

  // map es la ECMA JS  2015  => REACT
  let fila = `<tr><td>${tareas.id}</td><td>${tareas.tarea}</td><td>${tareas.detalle}</td></tr>`;
  miTabla.innerHTML += fila;
  /*   tareas.map((tarea) => {
    let fila = `<tr><td>${tarea.id}</td><td>${tarea.tarea}</td><td>${tarea.detalle}</td></tr>`;
    miTabla.innerHTML += fila;
  }); */
};

// OPERACIONES CON OBJETOS

// SERIALIZACION : La serialización es el proceso de convertir el estado de un objeto en un formato que se pueda almacenar o transportar.
//El complemento de serialización es deserialización,
//que convierte una secuencia en un objeto.

// SERIALIZAR DE TEXTO A OBJETO

/* const serializarJson = () => {
  let texto = '{"id":9,"nombre": "Juancito","estado":true}';
  console.log(texto);
  let json = JSON.parse(texto);
  console.log(json);
};
 */
// serializar de objeto a texto

/* const serializarTxt = () => {
  let objeto = { id: 89, nombre: "Jorge", edad: 30, estado: true };
  console.log(objeto);
  let texto = JSON.stringify(objeto);
  console.log(texto);
}; */

//================================================
// SUPEROBJETO OBJECT

let equipos = [
  { nombre: "Celtics", fundado: 1946, campeonatos: 17 },
  { nombre: "Lakers", fundado: 1946, campeonatos: 17 },
  { nombre: "Bulls", fundado: 1966, campeonatos: 6 },
  { nombre: "Pistons", fundado: 1941, campeonatos: 3 },
];

let keys = Object.keys(equipos);
let entradas = Object.entries(equipos);
let valores = Object.values(equipos);
console.log(valores);
