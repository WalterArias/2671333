//El método search() ejecuta una búsqueda que encaje entre una
//expresión regular y el objeto String desde el que se llama
let palabras =
  "Javascript es un lenguaje de programación. facilita lainteración con los usuarios";
let posicion = palabras.search("sdfa");
console.log(posicion);
// cuando se ingresa un parametro que no coincide con la expresion regular o el equivalente del string retornara -1
