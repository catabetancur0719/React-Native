// Crear un documento con el nombre ej123.js
// Declarar una lista de alumnos con varios de los nombres de tus compañeros
const alumnos = [
'cata',
'Yess',
'Juan',
'Andres', 
'Nico',
'Sofi'
]

// Mostrar en consola el nombre del 2do y 6to alumno en mayúscula
const longitudArray = alumnos.length
const ultimoItem = longitudArray - 1

console.log(alumnos[1].toUpperCase(), alumnos[ultimoItem].toUpperCase())

// Mostrar en consola la cantidad de alumnos
console.log([alumnos.length])