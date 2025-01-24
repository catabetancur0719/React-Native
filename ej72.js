// Crear un documento con el nombre ej72.js
// Mostrar en consola el siguiente dibujo utilizando la estructura while
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
// ***********
// ************
// *************
// **************
let contador = 1
let asteriscos = 14
let mensaje = ''

while(contador <= asteriscos)
{
  mensaje += '*'
  console.log(mensaje)
  contador++  
}