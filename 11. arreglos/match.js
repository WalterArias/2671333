const text = "los colores primarios son: rojo,azul y amarillo ";

//uso de match para encontrar la primera coincidencia
const primeraCoincidencia = text.match(/(\w+)/);
console.log("primera coincidencia", primeraCoincidencia[0]); // resultado: "los"cd ..
