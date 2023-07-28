//alert('welcome to my world, terricola !')


// javascript NO ES TIPADO !! es decir NO HAY QUE DEFINIR EL TIPO DE DATOS
// javascript define variables por asignacion ejemplo

//definimos una variable y le asignamos un valor
// ENTRADAS
let entero = 9;  // variable tipo entero
let decimal = 3.1416;  // variable tipo decimal o double o float
let texto = "este es un texto";
let activo = 1; //1 es true 0 es false
const PI = 3.1416;  // constante matematica
const E = 2.71828; // numero aureo



//PROCESO
// capturamos un valor y lo almacenamos o asignamos en la variable dato
let dato = prompt("escriba su edad ?")


//SALIDAS
console.log("la edad ingresada es:", dato); // hace la salida por la consola incluida del browser
document.write("la edad ingresada es:" + dato); // escribe dentro del body del html el valor
alert("la edad ingresada es:" + dato)   // ojo es intrusivo == CARGA PRIMERO QUE TODO