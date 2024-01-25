// forma 1 usando conversiones y el gett

let fechaActual = new Date(); // trae la fecha actual
console.log(fechaActual);
let fnmsg = fechaActual.getTime();
// la fecha transformada a milisegundos

/// dias a milisegundos
let dias = 10;
let diasmsg = dias * 24 * 60 * 60 * 1000;

let fnNueva = fnmsg + diasmsg;
console.log(fnNueva);
fnNueva = new Date(fnNueva);
console.log(fn);

// forma 2 usando las funciones de la api fecha
/* let fecha = new Date();
let dias = 10;

fecha.setDate(fecha.getDate() + dias);

console.log(fecha.toLocaleDateString()); */
