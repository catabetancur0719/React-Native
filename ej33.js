/* Crear un documento con el nombre ej33.js
Declarar la cariable cantidadDeUsuarios y asignar el valor 100

Incrementar la cantidad de usuarios en 5
Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
Se dieron de baja 3 usuarios
Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
Compramos una empresa y los usuarios se duplicaron
Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios
Sabemos que el 50% de los usuarios son mujeres y el otro 50% son varones, Dividir la cantidad de usuarios en 2 para saber cuántos hombres y mujeres hay de cada género
Mostrar en consola la cantidad de usuarios en este momento y el mensaje: Cantidad de usuarios: cantidadDeUsuarios*/ 
let cantidadDeUsuarios = 100

cantidadDeUsuarios += 5

console.log(`cantidad de usuarios: ${cantidadDeUsuarios} `)

cantidadDeUsuarios -= 3 
console.log(`cantidad de usuarios: ${cantidadDeUsuarios} `)

cantidadDeUsuarios *= 2
console.log(`cantidad de usuarios: ${cantidadDeUsuarios} `)

const mujeres = cantidadDeUsuarios / 2
const hombres = cantidadDeUsuarios /2 

console.log(`cantidad de usuarios: ${cantidadDeUsuarios} mujeres ${mujeres}, hombres ${hombres} `)