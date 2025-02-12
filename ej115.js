// Crear un documento con el nombre ej115.js
// Crear una función con el nombre esElMasGrande que acepte un nombre como parámetro
// Si el parámetro es Roman entonces:
// Mostrar el siguiente mensaje en mayúscula: El mejor de la historia es Román
// Sino
// Mostrar el siguiente mensaje en minuscula: Por favor ingrese el nombre de un gran jugador

function esElMasGrande(nombre) {
    if (nombre === "Cata") {
        return "La MEJOR DE LA HISTORIA ES CATA"
    } else {
        return "por favor ingrese el nombre de un gran jugador"
    }
}

console.log(esElMasGrande("Cata"))
console.log(esElMasGrande("lili"))