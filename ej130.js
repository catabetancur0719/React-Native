// Crear un documento con el nombre ej130.js
// Declarar la siguiente lista de mutantes:

// Prof. Charles Francis Xavier
// Scott Summers
// Dr. Henry Philip "Hank" McCoy
// Jean Elaine Grey
// Calvin Montgomery Rankin
// Kevin Sydney
// Lorna Sally Dane
// Alexander Summers
// Suzanne Chan
// James "Logan" Howlett
// Ororo Monroe

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

// Ordenar la lista
const listaOrdenadaAlfabeticamente = mutantes.sort()

// Revertir el orden de la lista ordenada
const listaOrdenadaRevertida = listaOrdenadaAlfabeticamente.reverse()

// Unir los nombres de todos los mutantes utilizando * para separarlos
const listaSeparada = mutantes.join(' * ')

// Mostrar en consola:

// Lista original de mutantes
// Lista ordenada de mutantes
// Lista revertida de mutantes
// Nombres de mutantes sepadaros por *
console.log(mutantes, listaOrdenadaAlfabeticamente, listaOrdenadaRevertida, listaSeparada)


// Tener en cuenta que algunos métodos pueden modificar la colección inicial

// Para compiar un array se puede usar Array.from(array)