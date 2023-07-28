// imprimir los primeros 10 numeros naturales
// bucle while
/* let inicio = 0; //index*/
let condicionParada = 10; // bandera
let contador = 1; //cuenta el numero de giros
let acumulador = 0; //acumula la variable segun el numero de giros

/* while (inicio <= condicionParada) {
  console.log(`numero del giro : ${inicio}`);
  contador = contador + 1; //ojo tenga en cuenta el inicializado de la variable
  acumulador = acumulador + inicio;
  inicio++; //incremento
}

console.log(`el numero de giros o vueltas fue: ${contador}`);
console.log(`el acumulado de la suma fue: ${acumulador}`); */

//fin del bucle while

// usando el bucle for PARA

for (let index = 0; index <= condicionParada; index++) {
  contador = contador + 1; //ojo tenga en cuenta el inicializado de la variable
  acumulador = acumulador + index;
}
console.log(`el numero de giros o vueltas fue: ${contador}`);
console.log(`el acumulado de la suma fue: ${acumulador}`);
