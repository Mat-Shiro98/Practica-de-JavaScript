// Control de Flujos 

if(true){
    console.log("Estoy dentro de if!");
}else{
    console.log("Estoy dentro de else!")
}


let num1 =2;
let num2 = '2';


if(num1 === num2){
    console.log("Estoy dentro de if!");
}else{
    console.log("Estoy dentro de else!")
}


const obj1 = 'Perro';
const obj2 = 'gato';

if(obj1 || obj2){
    console.log("Son iguales!!");
}else{
    console.log("No existe")
}



const edad = 6;

if(edad > 5 && edad < 18){
    console.log("El niño puede jugar");
}else{
    console.log("No puede jugar")
}