/*
const numero = 42;
const texto = "Hola, mundo";
const arreglo = [1, 2, 3];
const objeto = { nombre: "Juan", edad: 30 };
const funcion = function() {};

console.log(typeof numero); // "number"
console.log(typeof texto); // "string"
console.log(typeof arreglo); // "object"
console.log(typeof objeto); // "object"
console.log(typeof funcion); // "function"
*/

//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

/*
let edad;
edad = 3;

if(edad >= 18){
    console.log("Puede conducir tiene: "+edad+ " años");
}else{
    console.log("No puede conducir, es menor de edad");
}

//Nota: Funciona
*/

//Pide una nota (número). Muestra la calificación según la nota:
/*
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

/*
let nota;

nota = 9;

if(nota < 3){
    console.log("Muy deficiente");
}else if(nota >= 3 && nota < 5){
    console.log("Insuficiente");
}else if(nota >= 5 && nota < 6){
    console.log("Suficiente");
}else if(nota >= 6 && nota < 7){
    console.log("Bien");
}else if(nota >= 7 && nota < 9){
    console.log("Notable");
}else if(nota >= 9 && nota <= 10){
    console.log("Sobresaliente");
}else{
    console.log("Error de Datos");
}

//Nota: Funciona

*/


//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// DECLARAMOS UNA VARIABLE DONDE VAMOS A CONCATENAR LAS CADENAS
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
// SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO document.write(resultado); 

