// esta en el elemeto windows y me permite programar acciones que se ejecutan
// en un tiempo determinado
// unidad de medida minima del tiempo es milisegundos
// 1 segundo = 1000 ms

let saludar = () => {
  return document.write(`hola js <br>`);
};

setTimeout(saludar, 6000); // usamos una funcion callback a ejecutarse en 6 segs
