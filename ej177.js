// Crear un documento con el nombre ej177.js
// Crear una función con el nombre de saludar.
// Esta función no acepta ningún parámetro.
// Al ejecutar la función debe saludar a todos los nombres que sean pasados.
// Llamar a la función saludar con los siguientes parámetros "Nicolas", "Natalia", "Javier", "Ana".

function saludar () {
console.log(arguments)
console.log(arguments[0])
console.log(arguments[1])
console.log(arguments[2])
console.log(arguments[3])
}

saludar ("Nicolas", "Natalia", "Javier", "Ana")