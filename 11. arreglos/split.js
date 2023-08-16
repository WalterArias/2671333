//El split divide un string en dos o más sub cadenas usando un separador(carácter, otra cadena, o una expresión regular)

let mensaje = "Soy un tipo feliz y afortunado";

// Dividiendo la cadena "mensaje" usando el carácter espacio
let arr = mensaje.split(" ");
// El arreglo
console.log(arr); // ["Soy", "un", "tipo", "feliz", "y", "afortunado"]

//Caracter por caracter
let men = "Soy un tipo feliz";

//Dividimos el string caracter por caracter con una cadena vacía
console.log(men.split("")); // ["S", "o", "y", "", "u", "n", "", "t", "i", "p", "o"...]

//El método split también se puede poner un límite
//string.split(separador, límite);

let mens = "Soy un tipo feliz y afortunado";
//Dividimos la cadena "mens" con un límite
console.log(mens.split(" ", 3)); // ["Soy", "un", "tipo"]
