// Ejercicio 182
// Crear un documento con el nombre ej182.js
// Crear un array con el nombre animales con los siguientes items perro, gato, delfin, elefante.
// Utilizar el método map de los array para crear una colección con todos los items de la colección animales en mayúscula.
// Utilizar una arrow function como callback del map.
// Mostrar el siguiente resultado
// Animales:
// - PERRO
// - GATO
// - DELDFIN
// - ELEFANTE

const animales = ["perro", "gato", "delfin", "elefante"]

var animalesEnMayuscula = animales.map(function(animal) {
    return animal.toUpperCase()
})

console.log("Animales:");
animalesEnMayuscula.forEach(function(animal) {
    console.log(animal);
});