// definimos el arreglo de objetos con 3 objetos, cada objeto tiene 4 atributos

let aprendices = [
  {
    id: 135,
    nombre: "Anderson Tasama",
    edad: 20,
    estaActivo: true,
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
];

let losAprendices = document.getElementById("losAprendices");

///logica

//recorremos el arreglo de objetos

aprendices.forEach((aprendiz) => {
  //creamos la opcion del select
  let opcion = `<option value="${aprendiz.id}">${aprendiz.nombre}</option>`;
  losAprendices.innerHTML += opcion;
});
