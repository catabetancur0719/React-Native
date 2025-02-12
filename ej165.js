// Crear un archivo con el nombre ej165.js
// Crear una colección de números del 1 al 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Crear una función con el nombre map que acepte dos parámetros:
// Una colección
// Una función como parámetro
function map(coleccion, funcion) {
    let nuevaColeccion = [] // Array vacío para almacenar los resultados
    for (let index = 0; index < coleccion.length; index++) {
        nuevaColeccion.push(funcion(coleccion[index])) 
    }
    return nuevaColeccion; 
}

// Llamar a la función map pasando la colección numeros y una función que multiplique por 2 los valores de la coleccion.
// La idea es crear nuestro propio map sin utilizar el método del Array.
// Mostrar la nueva colección en pantalla
function multiplicarPorDos(valor) {
    return valor * 2;
}
const nuevaColeccion = map(numeros, multiplicarPorDos)

console.log(nuevaColeccion)
