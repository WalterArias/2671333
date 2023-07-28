//calculos necesarios
function calcular() {
  // datos que llegan del HTML
  let salario = parseInt(document.getElementById("salario").value);
  let nivel = parseInt(document.getElementById("nivel").value);

  //capa para mostrar la salida
  let respuesta = document.getElementById("respuesta");
  //variable para almecenar el resultado del incremento salarial
  let incremento = 0;

  switch (nivel) {
    case 1:
      incremento = salario * 0.035 + salario;
      return (respuesta.innerHTML = `el nuevo salario es ${incremento}`);
      break;

    case 2:
      incremento = salario * 0.041 + salario;
      return (respuesta.innerHTML = `el nuevo salario es ${incremento}`);
      break;

    case 3:
      incremento = salario * 0.048 + salario;
      return (respuesta.innerHTML = `el nuevo salario es ${incremento}`);
      break;

    case 4:
      incremento = salario * 0.053 + salario;
      return (respuesta.innerHTML = `el nuevo salario es ${incremento}`);
      break;

    default:
      return (respuesta.innerHTML = `Error al ingresar el nivel académico! <br> debe ser : 1,2,3,4 `);
      break;
  }
}
