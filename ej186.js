// Crear un documento con el nombre ej186.js
// Crear una función con el nombre crearPromesa que acepte un parámetro con el nombre mensaje.
// La función crearPromesa retorna una nueva Promise que como parámetro toma una arrow function y el primer parámetro se llama onSuccess que es la función que se va a ejecutar cuando la promesa sea exitosa en el método then.
function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {  
        onSuccess(mensaje)
    })
}

// Crear una nueva variable con el nombre promesa y asignar el resultado de ejecutar la función crearPromesa.
const promesa = crearPromesa('promesa exitosa')

// Llamar al método then de la variable promesa y pasar como parámetro una arrow function que acepte como parámetro un mensaje.
// Mostrar en pantalla el mensaje obtenido luego que la promise fué exitosa.
promesa.then((mensaje) => {
    console.log(mensaje);  
})
