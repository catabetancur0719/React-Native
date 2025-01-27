// Crear un documento con el nombre ej132.js
// Copiar la lista de mutantes del ejercicio 130

let mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip 'Hank' McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James 'Logan' Howlett",
    "Ororo Monroe"
]

// Si James "Logan" Howlett Y Prof. Charles Francis Xavier están en la lista de mutantes entonces:
// Mostrar: Amamos a los X-men
if (mutantes.includes("James 'Logan' Howlett") && mutantes.includes("Prof. Charles Francis Xavier")) {
    console.log("Amamos a los X-men")
// Sino
// Mostrar: Los X-men apestan

} else {
    console.log("Los X-men apestan")
  }
// Comentar James "Logan" Howlett de la lista de mutantes y volver a ejecturar