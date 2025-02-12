// Crear un documento con el nombre ej189.js
// Copiar el código del ejercicio ej186.js
// Modifica la función crearPromesa para que la Promise retornada ahora use setTimeout para esperar 5 segundos en resolverse.

function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {  
        onSuccess(mensaje)
        setTimeout(function () {
            resolve(mensaje)
        }, 5000)
    })
}

const promesa = crearPromesa('promesa exitosa')

promesa.then((mensaje) => {
    console.log(mensaje);  
})

// Crear una función con el nombre mostrarPromesa que acepta un mensaje como parámetro.
// La función mostrarPromesa es una función async y nos permite usar await adentro para esperar el resultado de llamar a la función crearPromesa.
// Ejecutar la función mostrarPromesa pasando como parámetro Wow, estamos usando async / await.
 async function mostrarPromesa (mensaje) {
   const resultado = await crearPromesa (mensaje)
   console.log(resultado)
 }
 mostrarPromesa('Wow, estamos usando async / await.')