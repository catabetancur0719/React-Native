// Crear un documento con el nombre ej106.js
// Declarar la función obtenerIDUsuario que retorna un valor number con el número 50
function obtenerIDUsuario (){
    return 50
}

// Declarar la función usuarioValido que retorna un valor boolean
// En esta función obtener el ID del usuario con la función obtenerIDUsuario
// Si el ID del usuario es mayor que 30 retornar falso sino verdadero
// SI el usuarioValido Entonces
// Mostrar el mensaje: EL usuario es válido
function  usuarioValido() {
    const idUsuario = obtenerIDUsuario ()
    if(idUsuario > 30) {
        return false
    }
    return true
   
}

// SINO
// Mostrar el mensaje: EL usuario no es válido

if (usuarioValido()) {
    console.log("El usuario es válido");
} else {
    console.log("El usuario no es válido");
}