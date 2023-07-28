let condicionParada = confirm("desea continuar");
console.log(condicionParada);
let inicio = 0;
let contador = 1; //cuenta el numero de giros
let acumulador = 0; //acumula la variable segun el numero de giros
while (condicionParada) {
  console.log(`numero del giro : ${inicio}`);
  contador = contador + 1; //ojo tenga en cuenta el inicializado de la variable

  condicionParada = confirm("desea continuar");
  inicio++; //incremento
}
