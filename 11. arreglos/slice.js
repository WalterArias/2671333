const ciudades = ["Cali", "Medellin", "Bogotá", "New York", "Cartago"];
ciudades.forEach((ciudad) => {
  document.write(`  ${ciudad} <br>`);
});
document.write("-------------- <br>");
//insertando en posición específica

ciudades.splice(2, 1, "Buga", "Obando");

ciudades.forEach((ciudad) => {
  document.write(`  ${ciudad} <br>`);
});
