// Crear un documento con el nombre ej147.js
// Copiar y pegar el código del ejercicio 146
const nombreDeUsuario = {
    username: 'batman',
    password: 'Alfred1960KPO',
    }
    
if (nombreDeUsuario.username === 'batman' && nombreDeUsuario.password  === 'Alfred1960KPO') {
    console.log(nombreDeUsuario)
    } else {
    console.log('Usuario no autenticado') 
    }

// Modificar la función autenticarUsuario:
// Sólo acepta un parámetro que se llama usuario
function autenticarUsuario(usuario){
    if( usuario.username === 'batman')
        
        return true;
        
else {
    return false;
}}

if (autenticarUsuario(nombreDeUsuario.username, nombreDeUsuario.password)) {
    console.log(nombreDeUsuario)


} else {
    console.log('Usuario no autenticado')
}



// En lugar de utilizar los parámetros anteriores, ahora vamos a usar las propiedades username y password del objeto usuario
// El resto del código debería funcionar igual que en el ejercicio anterio