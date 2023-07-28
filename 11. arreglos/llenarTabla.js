const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];

//manipulamos el elemento del html -DOM-
let miTabla = document.getElementById("miTabla");

//armamos el bucle
ciudades.forEach((ciudad) => {
  //creamos una fila con una columna para agregar a la tabla
  let fila = `<tr>
                    <td>${ciudad}</td>
              </tr>`;
  //llenamos la tabla
  miTabla.innerHTML += fila;
});
