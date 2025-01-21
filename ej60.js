//Crear un documento con el nombre ej60.js
//Declarar la variable nota y asignar un valor de 0 a 10
const nota = 3

//Si la nota es mayor o igual a 9 entonces
//Mostrar en consola el siguiente mensaje: El alumno aprobó y es muy bueno
if (nota >= 9) {
    console.log("El alumno aprobó y es muy bueno")
}
//Si la nota es menor que 9 Y mayor o igual que 6 entonces
//Mostrar en consola el siguiente mensaje: El alumno aprobó
else if (nota >= 6 && nota < 9){
    console.log("El alumno aprobó")
}

//Si No
//Mostrar en consola el siguiente mensaje: El alumno no aprobó y debe hacer los ejercicios de nuevo
else {
    console.log("El alumno no aprobó y debe hacer los ejercicios de nuevo")
}

const mensaje = 
    nota >= 9 
        ? "El alumno aprobó y es muy bueno"
        : (nota >= 6 && nota < 9) 
        ? "El alumno aprobó"
        : "El alumno no aprobó y debe hacer los ejercicios de nuevo";

console.log(mensaje);