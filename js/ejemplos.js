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

/*
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

*/

// Para ingresar datos pero en la terminal del chrome
/*
const input = window.prompt("Por favor, ingresa un número negativo o positivo:");
const num = parseFloat(input);

if (!isNaN(num)) {
    if (num > 0) {
        console.log("Es un número positivo");
    } else if (num < 0) {
        console.log("Es un número negativo");
    } else {
        console.log("Es cero");
    }
} else {
    console.log("No es un número válido.");
}

*/
/*
// 2. **Determinar si un número es par o impar**: 
// Crea un programa que pida al usuario ingresar un número y luego determine si es par o impar. Muestra un mensaje apropiado en función del resultado.

const numero = parseInt(prompt("Por favor, ingresa un número:"));

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
} else {
    console.log("No ingresaste un número válido.");
}
*/

//Ejercicio: Calificación de un examen
//Escribe un programa que solicite al usuario ingresar su calificación en un examen. 
//Luego, muestra un mensaje apropiado en función de la calificación ingresada. 
//Por ejemplo, podrías mostrar "Aprobado" si la calificación es mayor o igual a 70, y "Reprobado" si es menor a 70.
/*
const nota = parseFloat(prompt("Por favor, ingresa un nota de examen:"));

if (nota >= 70){
    console.log("Aprobado");
}else{
    console.log("Desaprobado");
}

*/

/*
//Ejercicio: Calculadora simple
//Crea un programa que solicite al usuario ingresar dos números y una operación 
//matemática (por ejemplo, suma, resta, multiplicación o división). 
//Luego, realiza la operación seleccionada en los dos números y muestra el resultado.

const num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
const num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));
const operacion = prompt("Por favor, ingresa la operación a realizar (+, -, *, /):");
let resultado;

if (operacion === "+"){
    resultado = num1 + num2;
    console.log("El resultado es: " + resultado);
}else if  (operacion === "-"){
    resultado = num1 - num2;
    console.log("El resultado es: " + resultado);
}else if  (operacion === "*"){
    resultado = num1 * num2;
    console.log("El resultado es: " + resultado);
}else if  (operacion === "/"){
    if(num2 !== 0){
        resultado = num1 / num2;
        console.log("El resultado es: " + resultado);
    }else{
        console.log("No se puede dividir por 0");
    }
}

*/

//Ejercicio: Calculadora de Factorial
//Crea un programa que solicite al usuario ingresar un número entero positivo y luego calcule su factorial. 
//El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta ese número. 
//Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120.

//Completa el código para calcular el factorial del número ingresado por el usuario. 
//Puedes utilizar un bucle for para realizar este cálculo. 
//Asegúrate de manejar casos en los que el usuario ingrese un número negativo o cero.
/*
const num = parseInt(prompt("Por favor, ingresa un número entero positivo:"));
let resultado = 1; // Inicializar resultado a 1

if (num > 0) {
    for (let i = 1; i <= num; i++) {
        resultado *= i; // Multiplicar resultado por el número actual en el bucle
    }
    console.log("El factorial de " + num + " es " + resultado);
} else {
    console.log("No es un número entero positivo");
}
*/
/*

const numInicial = parseInt(prompt("Por favor, ingresa el número inicial:"));
const numFinal = parseInt(prompt("Por favor, ingresa el número final:"));

let parTotal = 0;
let imparTotal = 0;

for(i = numInicial; i<= numFinal; i++){
    if(i % 2 === 0){
        parTotal++;
    }else{
        imparTotal++;
    }
}

console.log("Total de pares: "+ parTotal);
console.log("Total de impares: "+ imparTotal);

*/

