// Ejercicio 201
// Crear un documento con el nombre ej201.js
// Explica con tus propias palabras como funciona this dentro de las funciones.

function saludar() {
  console.log(this);
}

saludar();
// Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this.
// También explicar cómo funcionan las funciones call, apply y bind y que diferencias tienen.

//segun como lo utilicemos hace referencia al valor global 
//call establece quien es this en el objeot pero no en lo global
// apply: el segundo parametro se pasa como coleccion
// bind: retorna una nueva function