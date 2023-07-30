//Objetos

const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero'
};

console.log(persona.nombre); // Output: "Juan"
console.log(persona.edad); // Output: 30
console.log(persona.profesion); // Output: "Ingeniero"

//Podemos agregar nuevas propiedades a nuestro objeto en cualquier momento:

persona.ciudad = 'Ciudad Ejemplo';
console.log(persona.ciudad); // Output: "Ciudad Ejemplo"

//También podemos modificar el valor de una propiedad existente:

persona.edad = 31;
console.log(persona.edad); // Output: 31
