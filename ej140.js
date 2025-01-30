// Crear un documento con el nombre ej140.js
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


// Filtrar la lista de mutantes removiendo a Scott Summers sin alterar la lista original

const listaFiltrada = mutantes.filter(function(eliminado){
    return eliminado !== 'Scott Summers'
})

// Mostrar en consola el nombre del mutante en el índice 1 en ambas listas
console.log(mutantes[1])
console.log(listaFiltrada[1])