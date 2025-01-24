// Crear un documento con el nombre ej61.js

// Escribir un programa donde se ingresa un número entre 1 y 7 que representa un día de la semana y se obtiene un mensaje como salida. En caso de ingresar un número que no sea válido mostrar un mensaje de error

// Declarar la variable dia y asignar un número del 1 al 7
let dia = 3; 

// Declarar la variable nombreDelDia y asignar un valor null
let nombreDelDia = null;

// Versión SWITCH
switch (dia) {
    case 1:
      nombreDelDia = 'lunes';
      break;

    case 2:
      nombreDelDia = 'martes';
      break;

    case 3:
      nombreDelDia = 'miércoles';
      break;

    case 4:
      nombreDelDia = 'jueves';
      break;

    case 5:
      nombreDelDia = 'viernes';
      break;

    case 6:
      nombreDelDia = 'sábado';
      break;

    case 7:
      nombreDelDia = 'domingo';
      break;
      
    default:
      nombreDelDia = null;
  }

// Según el día seleccionado Entonces
// asignar el nombre del día correspondiente al número en la variable nombreDelDia (ejemplo: si dia es 1 entonces nombreDelDia debería ser 'lunes')
// SINO
// Asignar el valor null en la variable nombreDelDía
// Si nombreDelDía no es null Entonces
// Mostrar el siguiente mensaje en consola: El día seleccionado es ${nombreDelDía}
if (nombreDelDia !== null) {
    console.log(`El día seleccionado es ${nombreDelDia}`);

// SINO
// Mostrar el siguiente mensaje en consola: Por favor seleccionar un número de 1 a 7

} else {
    console.log('Por favor seleccionar un número de 1 a 7');
  }

// Versión IF/ELSE/IF
// Escribir la misma funcionalidad pero utilizando la estructura de If's anidados. El resultado debe ser el mismo
dia = 8; 
nombreDelDia = null;

if (dia === 1) {
  nombreDelDia = 'lunes';
} else if (dia === 2) {
  nombreDelDia = 'martes';
} else if (dia === 3) {
  nombreDelDia = 'miércoles';
} else if (dia === 4) {
  nombreDelDia = 'jueves';
} else if (dia === 5) {
  nombreDelDia = 'viernes';
} else if (dia === 6) {
  nombreDelDia = 'sábado';
} else if (dia === 7) {
  nombreDelDia = 'domingo';
} else {
  nombreDelDia = null;
}

if (nombreDelDia !== null) {
  console.log(`El día seleccionado es ${nombreDelDia}`);
} else {
  console.log('Por favor seleccionar un número de 1 a 7');
}

// En ambos casos ingresar distintos números como valor de la variable dia y ver el resultado

