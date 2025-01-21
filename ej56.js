/*Crear un documento con el nombre ej56.js
Copiar el código del ej53.md
Refactorizar el código y utilizar operador ternario en lugar de if/else */

const numero1 = 10;
const numero2 = 5;

if (numero1 >= numero2) {
    console.log(" La variable numero1 es más grande que la variable numero2")
}  /*else {
    console.log("La variable numero1 no es más grande que la variable numero2")
}*/

numero1 >= numero2
? console.log(" La variable numero1 es más grande que la variable numero2") 
: console.log("La variable numero1 no es más grande que la variable numero2")
