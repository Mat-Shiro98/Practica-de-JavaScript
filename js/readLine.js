/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor, ingrese su nombre: ", (nombre) => {

    //Apartir de acá podes crear tu codigo

    if(nombre === "Pepe"){
        console.log("Hola Pepe");
    }else{
        console.log("No sos Pepe");
    }
    
    rl.close();
});
*/

//Ingresar Más de un dato

/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Por favor, ingrese su nombre: ", (name) => {
    console.log(`Hola, ${name}!`);

    // Solicitar más datos al usuario
    rl.question("¿Cuántos años tienes? ", (edad) => {
        console.log(`Tienes ${edad} años.`);
        rl.close();
    });
});

*/


// Puedes usar esa misma variables por fuera del readLine

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nombre; // Declarar la variable nombre fuera de readline

rl.question("Por favor, ingrese su nombre: ", (respuesta) => {
    nombre = respuesta; // Asignar el valor a la variable nombre
    console.log(`Hola, ${nombre}!`);
    rl.close();
});

// La variable nombre se puede utilizar aquí fuera del bloque readline
console.log(`Fuera de readline, el nombre es ${nombre}`);
