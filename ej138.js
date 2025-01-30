// Crear un documento con el nombre ej138.js
// Copiar la lista de mutantes del ejercicio 130
const mutantes = [
    'Prof. Charles Francis Xavier',
    'Scott Summers',
    'Dr. Henry Philip "Hank" McCoy',
    'Jean Elaine Grey',
    'Calvin Montgomery Rankin',
    'Kevin Sydney',
    'Lorna Sally Dane',
    'Alexander Summers',
    'Suzanne Chan',
    'James "Logan" Howlett',
    'Ororo Monroe',
    ]

// Crear una copa de la colección de mutantes que nos gustan modificando los siguientes valores:
// Prof. Charles Francis Xavier
// James "Logan" Howlett
// Jean Elaine Grey
// Agregar <3 a cada mutante que nos gusta
// Ejemeplo: <3 Jean Elaine Grey
const mutantesModificados = mutantes.map(function (mutante) {
    if (
      mutante === 'Prof. Charles Francis Xavier' ||
      mutante === 'Jean Elaine Grey' ||
      mutante === 'James "Logan" Howlett'
    ) {
      return `<3 ${mutante}`; // Agregar "<3" a los mutantes que nos gustan
    }
    return mutante; // Dejar el resto de los mutantes igual
  });

// Mostrar en consola usando console.table(valor):
// Lista original de mutantes
// Lista modificada de mutantes
console.log(mutantesModificados);