// Crear un documento con el nombre ej73.js
// Mostrar en consola el siguiente dibujo utilizando la estructura while
// **************
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

let contador = 14
let asteriscos = 1
let mensaje = ''

while(contador >= asteriscos)
{
  mensaje -= '*'
  console.log(mensaje)
  contador--
}