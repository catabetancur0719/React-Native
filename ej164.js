// Crear un documento con el nombre ej164.js
// Crear una colección de números del 1 al 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Crear una función con el nombre forEach que acepte dos parámetros:
// Una colección
// Una función como parámetro
function forEach(coleccion, funcion) {

    for (var i = 0; i < coleccion.length; i++) {
        funcion(coleccion[i])
    }
}

// Llamar a la función forEach pasando la colección numeros y una función que imprima en pantalla cada uno de los valores como parametros
// La idea es crear nuestro propio forEach sin utilizar el método del Array.

forEach(numeros, function(valor) {
    console.log(valor)
})