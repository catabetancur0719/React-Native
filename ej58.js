//Crear un documento con el nombre ej58.js
//Declarar la variable hora
//Establecer un valor entre 0 y 24
const hora = 15

//Si la hora es menor que 12 y mayor que 5 entonces
//Mostrar el mensaje: Buen día
if(hora <= 12 &&  hora>= 5) { 
    console.log("Buen día")

//Si la hora es mayor o igual que 12 y menor que 20 entonces
//Mostrar el mensaje: Buenas tardes
} else if (hora >= 12 &&  hora<= 20)

console.log (" Buenas tardes")
//Si No:
//Mostrar el mensaje:
else {console.log(" Buenas noches")}
//Cambiar el valor de la variable hora un par de veces y ejecutarlo para ver que pasa

// Declarar la variable hora
// Establecer un valor entre 0 y 24



const mensaje = 
    hora >= 5 && hora < 12 
        ? "Buen día"
        : hora >= 12 && hora < 20
        ? "Buenas tardes"
        : "Buenas noches";

console.log(mensaje);
