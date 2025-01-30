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
function filtrarMutantes(mutante) {
    return mutante !== 'Scott Summers';
}

const listaNueva = mutantes.filter(filtrarMutantes)

// Mostrar en consola el nombre del mutante en el índice 1 en ambas listas
console.log('En la lista original, el mutante en el índice 1 es: ' + mutantes[1]);
console.log('En la lista filtrada, el mutante en el índice 1 es: ' + listaNueva[1]);