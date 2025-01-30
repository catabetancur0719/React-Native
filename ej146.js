// Crear un documento con el nombre ej146.js
// Copiar y pegar el código del ejercicio 145
const nombreDeUsuario = {
    username: 'batman',
    password: 'Alfred1960KPO',
    }
    
    if (nombreDeUsuario.username === 'batman' && nombreDeUsuario.password  === 'Alfred1960KPO') {
        console.log(nombreDeUsuario)
    } else {
       console.log('Usuario no autenticado') 
    }
   
// Vamos a refactorizar el código
// Crear una función que se llame autenticarUsuario
// Esta función acepta 2 parámetros nombreDeUsuario y clave
// Retorna un valor true si el nombreDeUsuario es batman y clave es Alfred1960KPO!
function autenticarUsuario(nombreDeUsuario, clave) {
    if(nombreDeUsuario === 'batman' && clave === 'Alfred1960KPO' )
        
        return true;
    

// Retorna false si el nombreDeUsuario o clave son incorrectos
 else {
    return false;
}}

// Si el usuario es válido usando la función autenticarUsuario entonces
// Mostrar los datos del usuario

if (autenticarUsuario(nombreDeUsuario.username, nombreDeUsuario.password)) {
    console.log(nombreDeUsuario)

// Sino
// Mostrar en consola el siguiente error: Usuario no autenticado
} else {
    console.log('Usuario no autenticado')
}


