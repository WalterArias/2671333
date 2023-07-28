//definiendo objetos

let aprendices = [
  {
    id: 135,
    nombre: "Anderson Tasama",
    edad: 20,
    estaActivo: true,
  },
  {
    id: 139,
    nombre: "Juan PSP VPN ",
    edad: 10,
    estaActivo: false,
  },
  {
    id: 139,
    nombre: "Kevin Alzate ",
    edad: 22,
    estaActivo: true,
  },
];

aprendices.forEach((aprendiz) => {
  document.write(`${aprendiz.id} - ${aprendiz.nombre} <br>`);
});
