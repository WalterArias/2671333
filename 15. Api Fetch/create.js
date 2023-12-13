// ejemplos de post
// data a enviar desde el frontend
let datos = {
  name: "morpheus",
  job: "leader",
};
// request
fetch("https://reqres.in/api/users", {
  method: "POST", //metodo de insercion de http
  body: JSON.stringify(datos), // la carga, payload, datos que envío en la peticion o request
  //configuracion de las cabeceras http del request o peticion
  headers: {
    // usada para enviar un archivo json
    "Content-Type": "Application/json",
    //usada para enviar datos desde un form
    /* 'Content-Type': 'application/x-www-form-urlencoded', */
  },
})
  .then((res) => res.json()) // respuesta desde el servidor (backend) en string, acá la serializamos
  .then((res) => {
    document.write("Insercion exitosa !" + "<br>");
    document.write(res.id + " " + res.name + "<br>");
    document.write("Creado en:" + res.createdAt);
  }); // las acciones a desarrollar con la respuesta serializada
