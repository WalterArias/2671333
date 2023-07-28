const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];

//forma clasica usando el for y la longitud del arreglo
/* for (let index = 0; index < ciudades.length; index++) {
  document.write(` - ${ciudades[index]} <br>`);
} */

// forma moderna usando el foreach => atencion el foreach tiene una funcion callback

ciudades.forEach((ciudad) => {
  document.write(`  ${ciudad} <br>`);
});
