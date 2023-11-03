// forma 1 usando conversiones y el gett

/* let fechaActual = new Date();
let fnmsg = fechaActual.getTime();
console.log(fnmsg); // la fecha transformada a milisegundos

/// dias a milisegundos
let dias = 10;
let diasmsg = dias * 24 * 60 * 60 * 1000;
 console.log(diasmsg); 

let fnNueva = fnmsg + diasmsg;
fnNueva = new Date(fnNueva);
console.log(fnNueva); */

// forma 2 usando las funciones de la api fecha
let fecha = new Date();
let dias = 10;

fecha.setDate(fecha.getDate() + dias);

console.log(fecha.toLocaleDateString());
