// - Crear un documento con el nombre ej109.js
// - Crear una función **autenticarUsuario** que acepte 2 parámetros **usuario** y **password**
// - La función retorna un valor verdadero sólo si se cumple con las siguiente validaciones:
//   - Usuarios y passwords válidos:
//     - nacho, Nerd1979
//     - pedro, Batman0217
//     - marta, Madre2312
function autenticarUsuario(usuario, password) {
    if (
        (usuario === "nacho" && password === "Nerd1979") ||
        (usuario === "pedro" && password === "Batman0217") ||
        (usuario === "marta" && password === "Madre2312")
      ) {
        return true
      }
      return false 
    }

// - El programa debe mostrar el siguiente mensaje si el usuario y password son válidos:
//   - Bienvenido ${usuario}, te estabamos esperando
function verificarCredenciales(usuario, password) {
    if (autenticarUsuario(usuario, password)) {
      console.log(`Bienvenido ${usuario}, te estábamos esperando`)

// - Sino
//   - Por favor ingrese credenciales válidas
} else {
    console.log("Por favor ingrese credenciales válidas")
  }
}

// - Utilizar la función **autenticarUsuario** para validar el usuario, intentar con distintos usuarios y passwords incluídos los que deberían funcionar bien
// Crear la función autenticarUsuario
verificarCredenciales("nacho", "Nerd1979")
verificarCredenciales("pedro", "Batman0217")
verificarCredenciales("marta", "Madre2312")
verificarCredenciales("juan", "12345")
verificarCredenciales("nacho", "12345")
