// definimos el arreglo de objetos con 3 objetos, cada objeto tiene 4 atributos

let aprendices = [
  {
    id: 135,
    nombre: "Anderson Tasama",
    edad: 20,
    estaActivo: false,
  },
  {
    id: 139,
    nombre: "Juan David Montoya ",
    edad: 19,
    estaActivo: true,
  },
  {
    id: 180,
    nombre: "Kevin Alzate ",
    edad: 22,
    estaActivo: true,
  },
  {
    id: 200,
    nombre: "Freddy Rivera",
    edad: 21,
    estaActivo: true,
  },
];

let miTabla = document.getElementById("miTabla");
let losAprendices = document.getElementById("losAprendices");

//proceso
//llenamos la tabla de forma interactiva
aprendices.forEach((aprendiz) => {
  // creamos la fila
  let fila = `<tr> 
        <td>${aprendiz.id}</td>
        <td>${aprendiz.nombre}</td>
        <td>${aprendiz.edad}</td>
        <td>${aprendiz.estaActivo}</td>
</tr>`;
  miTabla.innerHTML += fila;
});

// llenamos el select de forma interactiva

aprendices.forEach((aprendiz) => {
  //creamos la opcion
  let opcion = `<option value="${aprendiz.id}">${aprendiz.nombre} estado ${aprendiz.estaActivo}</option>`;
  losAprendices.innerHTML += opcion;
});
