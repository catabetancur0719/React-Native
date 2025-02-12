// Crear un documento con el nombre ej169.js
// Lee el siguiente código eintenta desifrar qué resultado da al ejecutar esta función.
// Como parte del ejercicio escribe lo que pasa.

function obtenerFuncion() {
  const nombre = "JavaScript"

  function mostrarMensaje() {
    console.log("Yo <3 " + nombre)
  }

  mostrarMensaje()
}

obtenerFuncion()

//declaramos la funcion obtener funcion y dentro de esta declarmaos una varibale con valor javascript
//dentro de esta funcion, declaramos otra funcion llamada mostrar mensaje y la imprimimos en la consola concatenandola con el valor de la variable
//ejecutamos dentro de la primer funcion, la segunda funcion que nos debe mostrar el mensaje pero como el mensaje esta dentro de la funcion mostrar mensaje que esta a su vez declarada dentro de la funcon no mostraria nada

//ejecutamos la primera funcion para poder mostrar el resultado de la segunda funcion