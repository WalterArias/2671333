//consumir usando el metodo get
let data = document.getElementById("data");
fetch("data.json")
  .then((res) => res.json())
  .then((res) => {
    /*  for (let index = 0; index < res.length; index++) {
      data.innerHTML += res[index].title + "<br>";
      console.log(res[index].title);
    } */
    /*   res.map((post) => {
      let fila = `<tr><td>${post.id}</td><td>${post.title}</td></tr>`;
      data.innerHTML += fila;
    }); */
    res.map((post) => {
      let card = `
      <div class="card" id="data" style="width: 18rem">
      <img src=${post.imagen} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>      
      `;
      data.innerHTML += card;
    });
    /* res.forEach((post) => {
      data.innerHTML += post.title + "<br>";
    }); */
  });
