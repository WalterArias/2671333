// recibimos los datos del formulario

const resultado = document.getElementById("resultado");
function sumar() {
  let dato1 = parseInt(document.getElementById("dato1").value);
  let dato2 = parseInt(document.getElementById("dato2").value);
  const suma = dato1 + dato2;
  /* return document.write(`la suma de los dos numeros es:  ${suma}`); */
  return (resultado.innerHTML = `la suma de los dos numeros es:  ${suma}`);
}
