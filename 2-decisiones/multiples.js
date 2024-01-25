// decision multiple

let opcionMenu = parseInt(
  prompt("que opcion quiere del restaurante (máximo 5) ?")
);

switch (opcionMenu) {
  case 1:
    console.log("HAMBURGUESA");
    break;
  case 2:
    console.log("SALCHIPAPA");
    break;
  case 3:
    console.log("HOT DOG");
    break;
  case 4:
    console.log("HOT MONDONGO");
    break;
  case 5:
    console.log("AREPA BURGER");
    break;
  default:
    console.log("NO TENEMOS ESA OPCION EN EL MENU !!");
    break;
}
