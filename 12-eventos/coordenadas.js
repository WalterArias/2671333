let imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", (e) => {
  console.log("Eje X:" + e.clientX + "Eje Y:" + e.clientY);
  console.log("Eje X:" + e.pageX + "Eje Y:" + e.pageY);
  console.log("Eje X:" + e.screenX + "Eje Y:" + e.screenY);
});
