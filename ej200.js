// Crear un documento con el nombre ej200.js
// Sin mirar el contenido del curso y con tus propias palabras intenta enteder a quién hace referencia this en este contexto:


const persona = {
  nombre: "Nicolas",
  saludar: function () {
    console.log(this); // este this llama al objeto global
    console.log(this.nombre); // este this llama a la propiedad nombre que esta dentro de la funcion 
  },
  saludar2: () => {
    console.log(this);
  },
};


// Qué diferencia hay si utilizamos arrow function en lugar de functions?  this no funciona con arrow function
// Escribir utilizando los comentarios de JavaScript lo que creas que hace referencia this. 