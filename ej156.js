// Crear un documento con el nombre ej156.js
// Copiar y pegar el código del ejercicio 155
// Vamos a refactorizar el código:
// Agregar a los objetos juego un método que se llame imprimirEnPantalla con el siguiente formato:
// ${nombre}
// $ ${precio}
// ${cantidadVendida} vendidos
// ${localidad}
// Modificar el código anterior y utilizar el método imprimirEnPantalla para mostrar el detalle de cada juego

const juegos = [

    {
        nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
        precio: 1060,
        cantidadVendida: 276,
        localidad: 'Capital Federal',
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {   nombre: "Lego Marvel Super Heroes",
        precio: 700,
        cantidadVendida: 48,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },
    
    {   nombre: "Gta V Ps4 Físico",
        precio: 1449,
        cantidadVendida: 82,
        localidad: "Santa Fe",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {   nombre: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
        precio: 1190,
        cantidadVendida: 348,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    
    },

    {
        nombre:" Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
        precio: 1250,
        cantidadVendida: 445,
        localidad: "Buenos Aires",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {
        nombre: "Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!",
        precio: 890,
        cantidadVendida: 182,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {
        nombre: "Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4",
        precio: 950,
        cantidadVendida: 517,
        localidad:" Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {
        nombre:" Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!",
        precio: 940,
        cantidadVendida: 275,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {
        nombre: "Need For Speed Ps4 Físico Nuevo Sellado Playstation",
        precio: 790,
        cantidadVendida: 89,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {   
        nombre: "Lego Batman",
        precio: 1000,
        cantidadVendida: 39,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {
        nombre: "Fifa 17 Ps4 Original Fisico 2017",
        precio: 1290,
        cantidadVendida: 310,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }
    },

    {  nombre: "Resident Evil 7 Ps4 Biohazard Físico",
        precio: 1390,
        cantidadVendida: 154,
        localidad:" Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
        }

    },

    {
        nombre: "Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick",
        precio: 1390,
        cantidadVendida: 241,
        localidad: "Capital Federal",
        imprimirEnPantalla: function () {
            console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}\n`);
          }
    }
]

juegos.forEach(function (juego) {
    juego.imprimirEnPantalla()
})