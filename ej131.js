// Crear un documento con el nombre ej131.js
// Crear un array con el nombre de 5 alumnas del curso
const alumnos = ['Cata', 'Yess', 'Nico', 'Juan', 'Andres']

// Mostrar en consola los siguiente nombres de forma individual (uno por linea):
// Nombres de las alumnas (a mano utilizando índices)
console.log("Nombres de las alumnos:")
console.log(alumnos[0]) 
console.log(alumnos[1]) 
console.log(alumnos[2])
console.log(alumnos[3]) 
console.log(alumnos[4]) 

// Nombres de los alumnos (utilizando while)
let alumnosWhile = 0
while (alumnosWhile < alumnos.length) {
  console.log(alumnos[alumnosWhile])
  alumnosWhile++
}
// Nombres de todos los alumnos del curso (utilizando for)
for (let alumnosFor = 0; alumnosFor < alumnos.length; alumnosFor++) {
  console.log(alumnos[alumnosFor])
}
