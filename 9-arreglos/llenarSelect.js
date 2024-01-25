const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];
//capturamos el elemento html para manipular, recordar que es un elemento padre
let miSelect = document.getElementById("miSelect");

ciudades.forEach((ciudad) => {
  // creamos los elementos hijos del select
  let opcion = `<option value="${ciudad}">${ciudad}</option>`;
  // llenamos el select con los hijos creados....recuerde el operador de incremento !
  miSelect.innerHTML += opcion;
});
