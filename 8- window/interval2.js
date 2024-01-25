//funcion callback

let contador = () => {
  return (document.getElementById("consola").innerHTML += "Hola <br>");
};

let activarTimer = () => {
  //Para poder desactivar el intervalo se debe asignar primero en una variable

  //no tiene nombre sin "let"
  intervalo = setInterval(contador, 100); //función anónima
};

let desactivarTimer = () => {
  //Llamo la variable donde fue asignado el timer
  clearInterval(intervalo);
};
document.getElementById("activar").addEventListener("click", activarTimer);
document.getElementById("desactivar").addEventListener("click", desactivarTimer);
