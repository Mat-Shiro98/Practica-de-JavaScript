/*

console.log('Hola mundo');

//Variables
let mi_primera_var = ('Mi primera variable en js!');
console.log(mi_primera_var);

mi_primera_var = 'Esto a cambiado!';
console.log(mi_primera_var);


//boolean
let esMayorDeEdad = true;
let tienePermiso = false;
console.log(esMayorDeEdad);


//Null
let resultado = null;
console.log(resultado);


//Undefined
let nombre;
console.log(nombre); // Output: undefined

*/


/*
// Contador de edad, usando readline para escribir en consola

const año_actual = 2023;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresar tu año de nacimiento: ", (nacimiento) => {
    if (!isNaN(nacimiento)) {
        const edad = año_actual - parseInt(nacimiento);
        console.log("Tu edad es: " + edad);
    } else {
        console.log("La entrada no es un número válido.");
    }
    
    rl.close();
});
*/

/*

const saboresHelado = ["Chocolate", "Vainilla", "Fresa", "Mango", "Menta"];

for (let i = 0; i < saboresHelado.length; i++) {
    console.log(`Ofrecemos helado de ${saboresHelado[i]} en la tienda.`);
}

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let vidas = 5;
let haGanado = false; // Agregamos una variable para controlar si el juego ha sido ganado

function hacerPregunta() {
    if (haGanado) {
        rl.close();
        return;
    }

    const respuestaCorrecta = 4;
    rl.question("¿Cuánto es 2 + 2? ", (respuesta) => {
        const numeroRespuesta = parseInt(respuesta);

        if (!isNaN(numeroRespuesta)) {
            if (numeroRespuesta === respuestaCorrecta) {
                haGanado = true; // Marcamos el juego como ganado
                console.log(`¡Respuesta correcta! ¡Has ganado! Te quedaste con ${vidas} vidas.`);
            } else {
                vidas--;
                console.log(`Respuesta incorrecta. Te quedan ${vidas} vidas.`);

                if (vidas === 0) {
                    console.log("Has perdido. ¡Mejor suerte la próxima!");
                    rl.close();
                    return;
                }
            }

            if (vidas > 0 && !haGanado) {
                hacerPregunta();
            } else {
                rl.close();
            }
        } else {
            console.log("Ingresa un número válido.");
            hacerPregunta();
        }
    });
}

console.log("Bienvenido al juego de preguntas y respuestas. Tienes 5 vidas.");
hacerPregunta();
