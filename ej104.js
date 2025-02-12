// Crear un documento con el nombre ej104.js
// Declarar la variable fibonacci y asignar una función como valor
// La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
// Ejecutar esta función 3 veces

// Declaramos la variable fibonacci y le asignamos una función
const fibonacci = function () {
    let a = 0, b = 1;
  
    for (let count = 0; count < 10; count++) {
      console.log(a); // Mostramos el número actual
  
      let siguiente = a + b; // Calculamos el siguiente número
      a = b; // Movemos los valores
      b = siguiente;
    }
  };
  
  // Ejecutamos la función 3 veces
  fibonacci();
  fibonacci();
  fibonacci();
  