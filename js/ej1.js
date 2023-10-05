/*

let num1, num2, resultado;

num1 = 2;
num2 = 6;
resultado = num1+num2;

console.log("Resultados de num1 + num2 = "+resultado);

*/

/*

let user,pass;

user = "Zhyro";
pass = "1234";

if (user === "Zhyro" && pass === "1234"){
    console.log("Bienvenido a JS " + user)
}else{
    console.log("Usuario desconocido")
}

*/

/*
function juego(name,level){
    console.log("Usuario: " +name +" / Nivel de poder: "+ level);
}

juego("Pepe","34");
*/

/*
console.log("Dispara al ladron con el numero 1:")

function disparar(boton){
    if(boton === 1){
        console.log("Disparaste al ladron")
    }else{
        console.log("No disparaste, el ladron se escapo")
    }
}

disparar(0);
disparar(1);

*/


/*
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('¡Despegue 🚀!')
    } else {
        console.log('Faltan ' + i + ' segundos')
    }
}

for (let number = 1; number <= 10; number++) {
    console.log(number)
}


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const resultado = i * j
        console.log(i + ' x ' + j + ' = ' + resultado)
    }
}

*/

/*
const dia = "feriado"

switch (dia) {
    case "lunes":
        console.log("¡Hoy es lunes! 😢")
        break

    default:
        console.log("No es lunes, YAY! 🚀")
        break
}
*/

/*

const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
    case 0:
        console.log("¡Hoy es domingo! 😴")
        break
    case 1:
        console.log("¡Nooo, es lunes! 😢")
        break
    case 2:
        console.log("¡Hoy es martes! 🥵")
        break
    case 3:
        console.log("¡Hoy es miércoles! 🤓")
        break
    default:
        console.log("Se acerca el fin de! 🚀")
        break
}

*/

/*

function contador(a) {

    for (let i = a; i >= 0; i--) {
        if (i === 0) {
            console.log('¡Despegue 🚀!')
        } else {
            console.log('Faltan ' + i + ' segundos')
        }
    }

}
contador(50);

*/

/*

let lista = [];

function agregarElemento(elemento) {
    lista.push(elemento);
}

agregarElemento('Hola');
agregarElemento('Buenos días!');
agregarElemento('Buenas Noches!');
agregarElemento('Chau!');

console.log(lista);
console.log(lista[1]);

*/
/*

function ejecutar(arg1){
    for(i = 0; i < arg1.length; i++ ){
        console.log(arg1[i]);
    }
}

const num = [1,2,3,4,5];
const nom = ['Pedro','Lucas','Juan','Messi'];

ejecutar(num);
ejecutar(nom);

console.log(num);
console.log(nom);

*/

/*
const num = parseInt(prompt("Ingresar numero para ver la tabla"));
for(i=0; i <=10;i++){
    for(j=num; i <= 10; j++){
        let r = i*j;
        console.log(i+"x"+j+"="+r);
        break
    }
}
*/
/*
function hacerAlgo(callback) {
    setTimeout(function() {
        console.log("La tarea asincrónica ha terminado");
        callback(); // Llamamos al callback una vez que la tarea ha terminado
    }, 2000); // Simulamos una operación que toma 2 segundos
}

function miCallback() {
    console.log("El callback ha sido invocado");
}

hacerAlgo(miCallback);
*/

// Fat arrow function ( => )

/*

const otraFlecha = (a,b) => {
    return a + b
}
const r = otraFlecha(1,2)
console.log(r)


const miFlecha = (f,h) => f + h
console.log("Resupuesta de: " + miFlecha(2,3));



function funcion(p,o){
    const r = p - o
    console.log(r)
    return r
}

funcion(2,4)

*/

//Funcion anonima

function sumar(a,b,cb){
    const r = a + b
    cb(r)
}


sumar(2,3, function(r){
    console.log("Soy una funcion anonima y mi resultado es: ",r);
})