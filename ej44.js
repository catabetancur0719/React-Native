/* Crear un documento con el nombre ej44.js
Declarar la variable texto y asignar el siguiente valor: HOLA
Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
Mostrar en consola el contenido de la variable resultado en minúscula
Deberías ver como resultado la palabra aloh*/

const texto = "HOLA"
const resultado = texto.charAt(3) + texto.charAt(2) + texto.charAt(1) + texto.charAt(0);

console.log(resultado.toLowerCase());
