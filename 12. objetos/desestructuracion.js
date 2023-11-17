// transformar los elementos de un objeto js en variables

let articulo = {
  id: 900,
  descripcion: "camiseta del DeporCali ",
  existencia: 45,
  estaActivo: true,
  precioVenta: 150000,
};
//extraje del objeto las variables
let { id, descripcion, existencia } = articulo;

console.log(articulo.descripcion);
