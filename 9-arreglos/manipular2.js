const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];
//agregando al inicio
ciudades.unshift("Boston", "Los Angeles");
//agregando al final
ciudades.push("Zaragoza", "Madrid");

ciudades.forEach((ciudad) => {
  document.write(`  ${ciudad} <br>`);
});
