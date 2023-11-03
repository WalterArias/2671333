//dom
let imagen = document.getElementById("imagen");
let btnEnviar = document.getElementById("btnEnviar");
let btnSaludar = document.getElementById("btnSaludar");
let caja = document.getElementById("caja");

btnSaludar.addEventListener("click", (evento) => {
  alert("entraste a la zona de la imegn !");
  console.log(evento.detail);
});
/* imagen.addEventListener("mouseout", function () {
  alert("saliste de la zona !");
});
 */
caja.addEventListener("keyup", (e) => {
  if (e.key == "r") {
    console.log("eres el ganador !");
    caja.value = " ";
  } else {
    console.log("siga jugando");
  }
});
console.log(caja);
