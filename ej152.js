// Crear un documento con el nombre ej152.js
// Declarar un objeto usuario con las siguientes propiedades y métodos
// propiedad: username, valor: null
// propiedad: password, valor: null
const usurario = {
    username: null,
    password: null,

// método: saludar
// El método saludar muestra un mensaje de saludo:
// Este método muestra en consola el siguiente saludo: Hola, soy el usuario ${username}, Si el objeto tiene la propiedad username con un valor que no sea null
// Sino muestra un mensaje de error: Este usuario no tiene username
saludar: function () {
    if(usurario.username !== null){
        console.log(`Hola, soy el usuario ${username}`) 
    } else {
        console.log('Este usuario no tiene username')
    }

},

// método: updaterUsername
// El método updaterUsername acepta un parámetro con el nombre del usuario y asigna este valor a la propiedad username
updaterUsername: function (miUsuario) {
usurario.username === miUsuario
},

// método: updatePassword
// El método updatePassword acepta un parámetro con el nombre del usuario y asigna este valor a la propiedad password
updatePassword: function (miContrasenia) {
usurario.password === miContrasenia
}
}

// Mostrar en consola:

// Hacer update de la propiedad username del objeto usuario usando el método
usurario.updaterUsername = 'Catalina'

// Hacer update de la propiedad password del objeto usuario usando el método
usurario.updatePassword = 'contraseniaCata'

// Llamar al método saludo del objeto usuario
usurario.saludar()

// Imprimir el password del usuario en consola
console.log(usurario.updatePassword)