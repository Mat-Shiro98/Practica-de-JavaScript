// Control de Flujos 

if (true) {
    console.log("Estoy dentro de if!");
} else {
    console.log("Estoy dentro de else!")
}


let num1 = 2;
let num2 = '2';


if (num1 === num2) {
    console.log("Estoy dentro de if!");
} else {
    console.log("Estoy dentro de else!")
}


const obj1 = 'Perro';
const obj2 = 'gato';

if (obj1 || obj2) {
    console.log("Son iguales!!");
} else {
    console.log("No existe")
}



const edad = 6;

if (edad > 5 && edad < 18) {
    console.log("El niño puede jugar");
} else {
    console.log("No puede jugar")
}



//Control de flujo While

let x = 0
while (x < 5) {
    console.log(x);
    x++
}

console.log('Terminando el loop');



// Control de flujo Switch

switch (5) {
    case 1: {
        console.log('Soy caso 1');
        break;
    }
    case 2: {
        console.log('Soy caso 2');
        break;
    }
    case 3: {
        console.log('Soy caso 3');
        break;
    }
    default:
        console.log('No existe caso');
        break;
}


//for

//for (let i = 0; i < 10 ; i++) {
//    console.log('Nuemero: '+i);
//}


const numeros = [1, 2, 3, 4, 5, 'hola'];

//console.log('Seleccionaste el numero: '+numeros[5]);


for (let i = 0; i < numeros.length; i++) {
    console.log('Nuemero: ' + numeros[i]);
}
