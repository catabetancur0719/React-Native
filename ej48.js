//Crear un documento con el nombre ej48.js
//Declarar la variable mensaje y asignar el siguiente valor: '3.14 es un gran número, pero mejor es 42 que le da significado a la vida'
const mensaje = '3.14 es un gran número, pero mejor es 42 que le da significado a la vida'

//Declarar la variable pi y obtener el valor 3.14 de la variable mensaje y transformarlo como número decimal
const pi = parseFloat(mensaje.slice(0,4))

//Declarar la variable significadoDeLaVida y obtener el valor 42 de la variable mensaje y transformarlo como número entero
const significadoDeLaVida = parseInt(mensaje.substr(38,2))

//Declarar la variable resultado y asignar el resultado de la suma de las variables pi y significadoDeLaVida
const resultado = pi + significadoDeLaVida

//Mostrar en consola el contenido de la variable resultado
console.log(resultado)

//Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables pi y significadoDeLaVida, concatenando los valores. Utilizar el método toString para convertir los numbers a strings.
console.log(resultado.toString() + " es el resultado de sumar las variables pi y significadoDeLaVida")