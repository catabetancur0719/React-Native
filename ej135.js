// Crear un documento con el nombre ej135.js
// Copiar la lista de mutantes del ejercicio 130
const mutantes = [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe',
    ]

// Listar los mutantes uno a uno (forEach)
mutantes.forEach(function(mutante, indice){

// Mostrar en consola la posición y nombre de cada mutante

    console.log(`El indice del mutante es ${indice} ${mutante}`)
})