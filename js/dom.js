/*
var resultado = ""
// BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    // PEDIMOS LA CADENA POR TECLADO
    var cadena = prompt("Introduce una cadena");
    // SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        // CONCATENAMOS SIN UTILIZAR GUIÓN
        resultado = resultado + cadena;
    }
    // SINÓ
    else {
        // CONCATENAMOS CON GUIÓN
        resultado = resultado + "-" + cadena;
    }
// MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));

document.write(resultado);
*/

/*
const new_user = prompt("Crea un usuario");
const new_pass = prompt("Crea una contraseña");

let user, pass;

user = new_user;
pass = new_pass;

const nombre = prompt("Introduce tu nombre");
const contraseña = prompt("Introduce tu contraseña");

if (user === nombre && pass === contraseña) {
    alert("Hola " + nombre);
} else {
    alert("Error de usuario");
}

*/
/*
var suma = 0;

do {
var num = prompt("Introduce tu numero");
    if (Number(num) == num) {
        num = Number(num);
        suma = suma + num;
        
    } 
    else {
        if (num != undefined) {
            alert(num + " No es un numero");
        }
    }

} while (num != undefined);
document.write(suma);

*/

// DECLARAMOS LAS VARIABLES    
var i, rep;
// BUCLE FOR PARA RECORRER DE 1 A 30
for (i = 1; i <= 30; i++) {
    // BUCLE INTERIOR PARA HACER LAS REPETICIONES
    for (rep = 0; rep < i; rep++) {
        // IMPRIMIMOS EL NÚMERO i, i VECES
        document.write(i);
    }
    // IMPRIMIMOS UN SALTO DE LÍNEA
    document.write("<br>");
}

