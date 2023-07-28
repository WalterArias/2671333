//calculos necesarios
function calcular() {
  // datos que llegan del HTML
  let t = parseInt(document.getElementById("t").value);
  let p = parseInt(document.getElementById("p").value);
  let potencia = parseInt(document.getElementById("potencia").value);

  //capa para mostrar la salida
  let respuesta = document.getElementById("respuesta");

  //========================================================
  //verificamos la expresion
  console.log(Math.pow(t / p, potencia) == Math.pow(t, potencia) / Math.pow(p, potencia));
  //========================================================

  //proceso
  if (Math.pow(t / p, potencia) == Math.pow(t, potencia) / Math.pow(p, potencia)) {
    return (respuesta.innerHTML = `los valores ingresados ${t} y ${p} SI satisfacen la expresion planteada`);
  } else {
    return (respuesta.innerHTML = `los valores ingresados ${t} y ${p} NO satisfacen la expresion planteada`);
  }

  //verificamos la expresion
  console.log(Math.pow(t / p, potencia) == Math.pow(t, potencia) / Math.pow(p, potencia));
}
