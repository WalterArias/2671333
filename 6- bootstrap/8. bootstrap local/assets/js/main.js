let abrirRegistro = () => {
  window.open("registro.html", "_self");
};

/* alertify.confirm(
  "This is a confirm dialog.",
  function () {
    alertify.success("Ok");
  },
  function () {
    alertify.error("Cancel");
  }
); */

/* alertify.alert("Error", "Clave Invalida !"); */

//ejemplo con SWEETALERT

let valor = 1;

if (valor === 1) {
  Swal.fire({
    title: "Correcto!",
    text: "Do you want to continue",
    icon: "success",
    confirmButtonText: "Cool",
  });

  // window.open("registro.html");
} else {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
}
