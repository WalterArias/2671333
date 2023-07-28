//funciones matematicas para la calculadora

// D.O.M. capturamos los elementos HTML para manipular en JS

let resultado = document.getElementById("resultado");
let res = document.getElementById("res");

// Funciones Matematicas de la calculadora

//escribir 7 en el input

function escribir7() {
  return (resultado.value += 7);
}

function escribir8() {
  return (resultado.value += 8);
}

function sumar() {
  return (resultado.value += "+");
}

function restar() {
  return (resultado.value += "-");
}

function borrar() {
  return (resultado.value = " ");
}

function calcular() {
  // la funcion eval()  evalua el resultado de una expresion matemática
  let total = eval(resultado.value);
  // le pasamos el valor a el input resultado
  /*  return (resultado.value = total); */
  return (res.innerHTML = `su indicador de masa es: ${total} <img src="./Escudo_Deportivo_Cali.png" alt="" srcset="">`);
}
