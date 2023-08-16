//el concat sirve para unir dos array o mas este
//metodo no modifica los array existentes sino
//que crea un nuevo array con los valores unidos

const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const array3 = [5, 7, 8, 9];
//aca se unen dos array
const combinado = array1.concat(array2);
console.log(combinado);

//aca vamos a unir tres array
const combinado2 = array1.concat(array2, array3);
//esta es mejora de JS 2017
const conSpread = [...array1, ...array2, ...array3];
console.log(conSpread);
