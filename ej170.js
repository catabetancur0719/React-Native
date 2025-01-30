// Crear un documento con el nombre ej170.js
// Lee el siguiente código eintenta desifrar qué resultado da al ejecutar esta función.
// Como parte del ejercicio escribe lo que pasa.


function contar() {
    let contador = 0;
    return function () {
      contador++;
      console.log(contador);
    };
  }
  
  const incrementar = contar();
  incrementar();
  incrementar();
  incrementar();
  incrementar();

/*declara a funcion contar le agrega una variable que empieza en cero y retorna la funcion, 
luego el contador suma + 1 y lo imprime en la consaola.
luego crea la variable incrementar donde almacena el resultado de contador y ejecuta incrementar 4 veces  */