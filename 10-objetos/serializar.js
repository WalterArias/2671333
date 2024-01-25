// usar el estandar JSON (JAVASCRIPT OBJECT NOTATION) para transformar strings a
// objetos y viceversa
//objeto definido con la notacion JSON
let articulo = {
  id: 900,
  descripcion: "camiseta del DeporCali ",
  existencia: 45,
  estaActivo: true,
  precioVenta: 150000,
};

// TRANSFORMALO EN CADENA DE TEXTO O STRING

let articuloStr = JSON.stringify(articulo);
console.log(articuloStr);
console.log(articuloStr.descripcion);
// de string a objeto JAVASCRIPT
let articuloJson = JSON.parse(articuloStr);
console.log(articuloJson);
