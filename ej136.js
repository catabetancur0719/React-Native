// Crear un documento con el nombre ej136.js
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

// Recorrer la lista de mutantes uno a uno (forEach)
mutantes.forEach(function(mutante){
    console.log(mutante)
})

// Crear a mano un string y concatenar los nombres de Jean Elaine Grey y James "Logan" Howlett ' / ' (no usar join)

const agregarALogan = mutantes[3] + ' James "Logan" Howlett'

// Mostrar en consola el string creado
console.log(agregarALogan)