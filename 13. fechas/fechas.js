// manejo de fechas en JS   Date()
/* 
let fecha = new Date();
console.log(fecha); */
//document.write(fecha);

// restando fechas

let fechaInicial = new Date("2023-01-01");
let fechaActual = new Date();
let diferencia = fechaActual - fechaInicial;
console.log(diferencia);

let horas = Math.round(diferencia / (1000 * 60 * 60));
let dias = diferencia / (1000 * 60 * 60 * 24);
let years = diferencia / (1000 * 60 * 60 * 24 * 365);
console.log(dias);
