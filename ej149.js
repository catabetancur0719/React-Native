// Crear un documento con el nombre ej149.js
// Definir y declarar un objeto persona con tus datos y valores
// Este objeto tiene que tener al menos 10 propiedades y al menos un tipo de dato de: string, number, boolean, array y object (si un objeto puede tener otros objetos como propiedades)
// Algunas propiedades definirlas utilizando el objeto literal al asignarlo:
// {
//   propiedad: valor,
//   propiedad: valor
// }

// Algunas propiedades definirlas utilizando la forma más dinámica:
// let objeto = {
//   propiedad: valor,
//   propiedad: valor,
// };
const persona = {
    nombre: 'Catalina',
    apellido: 'Betancur',
    apodo: 'Catarata',
    mejoresAmigos : ['Lili', 'Home', 'Jota'],
    informacionDeNacimiento : {
        lugarDeNacimiento: 'Medellin',
        fechaDeNacimiento: '19-07-1993'}
}

// objeto.propiedadNueva = valor;
// objeto.propiedadNueva = valor;
persona.edad = 31;
persona.casada = false;
persona.colombiana = true;
persona.altura = 1.65;
persona.hijos = null;

// Mostrar en consola el objeto persona
console.log(persona)