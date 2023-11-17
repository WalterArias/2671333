// objetos literales
//object literal

let aprendiz = {
  id: 135,
  nombre: "Bruce Wayne",
  apodo: "Batman",
  edad: 20,
  estaActivo: true,
  colores: ["red", "azul", "rosado", true],
  materias: {
    ingles: 2.3,
    programacion: 5,
    etica: 4.8,
  },
  mostrarDatos() {
    console.log(this.nombre + this.edad + this.estaActivo);
  },
};

//invocar los metodos
/* aprendiz.mostrarDatos(); */

//manipular el objeto como un array
//transformar en array
let aprendizArray = Object.entries(aprendiz);
/* console.log(aprendizArray); */

//obtener las llaves
let aprendizKeys = Object.keys(aprendiz);
console.log(aprendizKeys);

//eliminar atributos de un objeto
aprendiz.edad = null; //pasarle un valor al atributo
delete aprendiz.estaActivo; // eliminar fisicamente el atributo

console.log(aprendiz);
