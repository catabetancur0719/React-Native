/*// Contar del 1 al 10:
// Muestra en consola los números del 1 al 10 utilizando un bucle for.

//for(contador = 1; contador <= 10; contador++)
//     console.log(contador)*/

/*// Contar hacia atrás:
// Muestra en consola los números del 10 al 1.

for (contador = 10 ; contador >= 1; contador--)
    console.log(contador) */

/*//Números pares:
//Muestra en consola los números pares del 0 al 20.

for (contador = 0; contador <= 20; contador++) {
    if (contador % 2 === 0)
        console.log(contador)
    } */

// Números impares:
// Muestra en consola los números impares del 1 al 19.

// for(contador = 0; contador <= 19; contador++){
//     if(contador % 2 !== 0)
//         console.log(contador)
// }
    

/* metodo sort para numeros ascendentes

const numeros = [ 10, 20, 8, 4, 3, 1, 50, 54]
const numerosOrdenadosAsc = numeros.sort(function(primerNumero,segundoNumero)
{
    return segundoNumero - primerNumero //si quiero que sea de menor a mayo solo cambio los parametros entre ellos de lugar
})
console.log(numerosOrdenadosAsc)*/

/* metodo reverse

const numeros = [ 10, 20, 8, 4, 3, 1, 50, 54]
const numerosOrdenadosAsc = numeros.sort(function(primerNumero,segundoNumero)
{
    return primerNumero - segundoNumero
})
const numerosOrdenadosDesc = numerosOrdenadosAsc.reverse()

console.log(numerosOrdenadosDesc)*/

// const saludar = function (nombre, apodo) {
//     console.log(`hola ${nombre} ${apodo}`);
//   };
  
//   setTimeout(saludar, 5000, "Marta", "Martita");

// funcionQueTardaMuchoTiempoEnResolver(() => {
//     console.log("fin del proceso largo");
//   });
//   console.log("El código sigue ejecutando");

// const promise1 = new Promise((onSuccess) => {
//     console.log("Promise 1");
//     setTimeout(onSuccess(10), 2000);
//   });
  
//   const promise2 = new Promise((onSuccess) => {
//     console.log("Promise 2");
//     setTimeout(onSuccess, 10000);
//   });
  
//   const promise3 = new Promise((onSuccess) => {
//     console.log("Promise 3");
//     setTimeout(onSuccess, 5000);
//   });
  
//   const promises = [promise1, promise2, promise3];
  
//   Promise.all(promises).then((values) => {
//     console.log(values);
//     console.log("terminaron");
//   });


//NUEVOS ITERADORES
const animales = ["perro", "gato", "elefante"];

for (const animal of animales) {
  console.log(animal);
}

const texto = "Nicolas";

for (const letra of texto) {
  console.log(letra);
}

const usuario = {
  name: "Nicolas",
  age: 45,
  city: "Toronto",
};

for (const key in usuario) {
  console.log(`${key}: ${usuario[key]}`);
}