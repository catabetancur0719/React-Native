
// - Crear un documento con el nombre ej185.js
// - Crear una variable con el nombre `contador` y asignar 1 como valor incial.
let contador = 1

// - Crear un timer que se llame cada 1 segundo y muestre en pantalla un mensaje.
// - A los 10 segundos cortar la ejecución del timer.

const timer = setInterval(function () {
  
  if (contador <= 10) {
    if (contador === 10) {
      console.log(`Fin del contador, pasaron 10 segundos`)
    } else {
      console.log(`Pasaron ${contador} segundos.`)
    }        
    contador++
  }


  if (contador > 10) {
    clearInterval(timer)
  }

}, 1000)
















// ```bash
// Inicio
// Paso 1 segundo.
// Pasaron 2 segundos.
// Pasaron 3 segundos.
// Pasaron 4 segundos.
// Pasaron 5 segundos.
// Pasaron 6 segundos.
// Pasaron 7 segundos.
// Pasaron 8 segundos.
// Pasaron 9 segundos.
// Fin del contador, pasaron 10 segundos
// ```

// #### Challenge:

// - Podes mostar el tiempo que pasó utilizando `*`?

// ```bash
// Asteriscos!!
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
