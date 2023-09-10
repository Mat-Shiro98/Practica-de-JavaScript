/*
let x,y,z;
let total;

x = 10;
y = 7;
z = 2;

total = x + (y*z);

console.log("El resultado de x+(y*z) es: " + total);

*/
/*
function iterar(arg1){
    for(let i = 0; i < arg1.length; i++){
        console.log(arg1[i]);
    }
}

const numeros = [1,2,'hola',4,5];
const nombres = ['Pedro','Juan','Felipe','chanchito feliz','chanchito triste'];
iterar(nombres);
iterar(numeros);
*/

/*
function juego(player){
    if (player === "Marcos"){
        console.log("Hola Marcos");
    }else{
        console.log("Error de nombre");
    }
}
juego("Marcos");
*/

function jugadores(a,b){
    for(i=0; i < a.length; i++){
        console.log("Nombre: "+ a[i] + " / nivel: " + b[i])
    }
}
const nombre = ["Zhyro","Celeste","Xeo"];
const nivel = ["99","77","1000"];

jugadores(nombre,nivel);


