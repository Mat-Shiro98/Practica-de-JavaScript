//operadores

const suma = 1+2;
const resta = 2-5;
const multiplicación = 5*2;
const divición = 6/3;

console.log(suma,resta,multiplicación,divición);

//Modulo 
const modulo = 10%3;
//Es lo que sobra de la divición
console.log("Me sobra: "+modulo);


//Incremento de valor

//Usamos let ya que el const es para un valor unico y no puede cambiar

let num = 5;
num++;
num++;
num++;

console.log("El incremento de num fue de 5 a "+num);


//Decremento

let num2 = 5;
num2--;
num2--;
num2--;

console.log("A disminuido de 5 a "+num2);


//Operador de asignación

let num3 = 5;

num3 += 3;
console.log("Se sumo 3 al 5 = "+num3);

num3 = 5;
num3 -= 2;
console.log("Se resto 2 al 5 = "+num3);

num3 = 5;
num3 *= 4;
console.log("Se le multiplico 4 al 5 = "+num3);

num3 = 5;
num3 /= 5;
console.log("Se le dividio 5 al 5 = "+num3);


//Operadores de comparación

console.log(5 < 2);
console.log(5 > 2);
console.log(5 <= 2);
console.log(5 >= 2);
console.log(5 !== '5'); 
console.log(5 !== 5); 
console.log(5 != 2);

console.log(5 == '5'); //Por más q sea string el operador == lo toma como true
console.log(5 === '5'); //En cambio en el === lo toma como false por que es estricto que tiene que ser un numero


//Operadores Logicos

let operador = false || true;
console.log("Cualquiera es "+operador);


const num1 = 2;
const num9 = 4;

let oper2 = true && false;
console.log("no pueden pasar "+oper2);

oper2 = true && true;
console.log("Pueden pasar: "+oper2);

//Se puede encadenar
const encadenar = true && true && false;
console.log(encadenar);

// Con la negación cambia el valor
const encadenar2 = !false;
console.log(encadenar2);
