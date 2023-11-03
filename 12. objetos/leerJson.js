//lectura de una archivo externo JSON usamos promesas de javascript PROMISES

/* fetch("aprendices.json") */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((users) => {
    return users.json();
  })
  .then((users) => {
    users.forEach((users) => {
      console.log(users.name + "--->" + users.email);
    });
  });
