// Crear un documento con el nombre ej114.js
// Crear una función con el nombre invertirTexto que acepta un texto como parámetro
function invertirTexto(texto) {
    return texto.split('').reverse().join('')
}

// Mostrar en consola el texto invertido
// Casos de uso:
// Si se ejecuta la función con el valor hola se espera que la función retorne aloh
console.log(invertirTexto("hola"))