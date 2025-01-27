// Crear un documento con el nombre ej94.js
// Copiar y pegar el código del ejercicio ej74.js
// Refactorizar el código utilizando la estructura for en lugar de do/while

// let contador = 1;
// let asteriscos = 13 
// let mensaje = ''; 

// while (contador <= 13) {  
//   mensaje += '*';        
//   console.log(mensaje);   
//   contador += 2;          
// }
let mensaje = '';

for (let contador = 1; contador <= 13; contador += 2) {
  mensaje += '*';
  console.log(mensaje);
}
