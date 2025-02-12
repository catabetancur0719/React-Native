// Crear un documento con el nombre ej190.js
// Copiar el código del ejercicio ej189.js
// Intentar modificar la función crearPromesa para que tarde 5 segundos en resolver la promesa (como vimos con setTimeout)
// Un cambio necesario va a ser que al llamar onSuccess tenemos que pasar el mensaje obtenido como parámetro en la función crearPromesa.
// Para eso podemos utilizar el siguiente código:
// // En lugar de llamar a onSuccess directamente, pasamos una arro función que al ejecutarse llame a onSuccess pasando el mensaje como parámetro.
// setTimeout(() => onSuccess(mensaje), 5000);


function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {  
        onSuccess(mensaje)
        setTimeout(() => {
            onSuccess(mensaje)
        }, 5000)
    })
}

const promesa = crearPromesa('promesa exitosa')

promesa.then((mensaje) => {
    console.log(mensaje);  
})

 async function mostrarPromesa (mensaje) {
   const resultado = await crearPromesa (mensaje)
   console.log(resultado)
 }
 mostrarPromesa('Wow, estamos usando async / await.')