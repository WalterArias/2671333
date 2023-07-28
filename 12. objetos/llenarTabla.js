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

let miTabla = document.getElementById("miTabla");

//proceso

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
