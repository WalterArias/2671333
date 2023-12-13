// ejemplos de post
// data a enviar desde el frontend
let datos = {
  id: 4,
  title: "año de inserción",
  body: "adso 2023",
  userId: 1,
};
// request
fetch("https://jsonplaceholder.typicode.com/posts", {
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
  .then((res) => console.log(res)); // las acciones a desarrollar con la respuesta serializada

/* ejemplo completo
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch  */

/*
  sitio web para generar json automaticos de estudio
  https://www.mockaroo.com/
  
  */
