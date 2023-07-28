//calculos necesarios
function calcular() {
  // datos que llegan del HTML
  let r = parseInt(document.getElementById("r").value);
  let t = parseInt(document.getElementById("t").value);
  let q = parseInt(document.getElementById("q").value);

  //capa para mostrar la salida
  let respuesta = document.getElementById("respuesta");

  if (r * 4 - t * 3 + 4 * q * 2 < 870) {
    return (respuesta.innerHTML = `los datos ingresados ${r},${t},${q} <br> SI satisfacen la expresion`);
  } else {
    return (respuesta.innerHTML = `los datos ingresados ${r},${t},${q} <br> NO satisfacen la expresion`);
  }
}
