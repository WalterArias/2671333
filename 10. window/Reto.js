let texto = document.getElementById("texto");
let saludar = () => (texto.innerHTML += `Saludos :) <br>`);
let iniciar = () => (intervalo = setInterval(saludar, 300));
let parar = () => clearInterval(intervalo);
