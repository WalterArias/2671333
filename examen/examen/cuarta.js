//calculos necesarios
function calcular() {
  // datos que llegan del HTML
  let y = parseInt(document.getElementById("y").value);
  let x = 0;

  //capa para mostrar la salida
  let respuesta = document.getElementById("respuesta");

  //proceso

  if (y >= 0 && y <= 10) {
    return (respuesta.innerHTML = ` ecuacion 4/y -y = ${4 / y - y}`);
  } else if (y >= 11 && y <= 25) {
    return (respuesta.innerHTML = ` ecuacion y<sup>3</sup>-12 = ${Math.pow(y, 3) - 12}`);
  } else if (y >= 26 && y <= 50) {
    return (respuesta.innerHTML = ` ecuacion y<sup>2</sup>+y<sup>3</sup>-18 = ${Math.pow(y, 2) + Math.pow(y, 3) - 18}`);
  } else {
    return (respuesta.innerHTML = ` resultado igual a 0`);
  }
}
