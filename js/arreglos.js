// Declaración de un arreglo
const numeros = [1, 2, 3, 4, 5];
console.log(numeros); // Output: 3

//En este caso, numeros es nuestro arreglo y contiene los valores del 1 al 5 en orden.
//Para acceder a los elementos de un arreglo, usamos su índice, que comienza desde 0. Por ejemplo:

console.log(numeros[0]); // Output: 1
console.log(numeros[2]); // Output: 3

//También podemos modificar los elementos de un arreglo asignando nuevos valores a sus índices:

numeros[1] = 10;
console.log(numeros); // Output: [1,10,3,4,5]

//ejemplo con un arreglo vacio:
const arrVacio = [];

//Y con el método push() podemos ir agregando datos a ese arreglo:

arrVacio.push(6);
arrVacio.push('Hola mundo');

console.log(arrVacio); // Output: [6,'Hola mundo']