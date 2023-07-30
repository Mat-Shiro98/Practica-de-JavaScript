#Declaraciones de Variables y tipos de datos

Para ejecutar el codigo .js tenemos que ir a la terminal y escribir (node js/test.js) en este caso dependiendo del lugar del codigo donde este.

##Primer codigo
*console.log('Hola mundo')* -----> Esto mostrara en la consola 

##Tipo de datos de JS##

-String: cadena de caracteres. 'a' 'Hola mundo' 'hola como estas' '123'
-Boolean: true o false.
-Null: es un valor vacío o nulo.
-Number: son numeros 123123 123 34 453434.
*'123' es un String, es distinto a 123 que es un Number*
-Undefined. ----> es una variable no definido
-Object: objetos ---> Es la agrupación de los distintos datos


#Variables#

-var 
-let
-const

Consideraciones adicionales:

Cuando uses variables, se recomienda comenzar con const y cambiar a let solo si sabes que el valor de la variable cambiará en el futuro.

Es una buena práctica reducir al mínimo el uso de var debido a su comportamiento de ámbito de función que puede llevar a errores difíciles de depurar.

En resumen, 'var' tiene un ámbito de función y permite la redeclaración, 'let' tiene un ámbito de bloque y no permite la redeclaración, mientras que 'const' tiene un ámbito de bloque y no permite la reasignación de valores. El uso adecuado de cada uno dependerá del contexto y los requisitos específicos de tu código.

Usar la variable 'let'

ejemplo:

let mi_primera_var = ('Mi primera variable en js!');
console.log(mi_primera_var);

Una vez asignada la variable de 'let' podes reusar esa misma variable sin necesidad de agregar el 'let' y cambiar su valor.

let mi_primera_var = ('Mi primera variable en js!');
console.log(mi_primera_var);

mi_primera_var = 'Esto a cambiado!';
console.log(mi_primera_var);



#Boolean#
El tipo de datos Boolean representa una variable que solo puede tener dos valores: true o false. Es muy útil para representar estados lógicos o respuestas a preguntas con respuestas binarias.

Ejemplo:
let esMayorDeEdad = true;
let tienePermiso = false;

En el ejemplo anterior, esMayorDeEdad y tienePermiso son variables de tipo Boolean. La primera variable es true, lo que indica que la persona es mayor de edad, mientras que la segunda es false, lo que significa que no tiene permiso.



#Null#
El valor null es un valor especial que se puede asignar a una variable para indicar que su valor es "nulo" o "vacío". Representa la ausencia intencional de un valor o la falta de valor.

let resultado = null;



#Undefined#
El valor undefined es otro valor especial en JavaScript que se asigna automáticamente a una variable que no ha sido inicializada o a una variable que aún no ha sido asignada.

let nombre;
console.log(nombre); // Output: undefined


En resumen:

'Boolean': representa valores lógicos true o false.
'null': se utiliza para representar la ausencia intencional de valor.
'undefined': se refiere a una variable que aún no ha sido inicializada o a la que no se le ha asignado un valor.


#Objetos#
Es una agrupación de datos.

Un objeto es como una caja donde puedes guardar diferentes cosas y cada cosa tiene un nombre. Cada una de esas cosas almacenadas en la caja es una propiedad del objeto, y su nombre es la clave que usas para acceder a esa cosa.

Por ejemplo, si queremos representar una persona en JavaScript, podríamos usar un objeto para almacenar información sobre esa persona, como su nombre, edad y profesión.

// Definimos un objeto para representar una persona
let persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero'
};

En este caso, persona es nuestro objeto, y las propiedades que contiene son nombre, edad y profesion. Podemos acceder a cada propiedad utilizando su nombre clave:

console.log(persona.nombre); // Output: "Juan"
console.log(persona.edad); // Output: 30
console.log(persona.profesion); // Output: "Ingeniero"

Podemos agregar nuevas propiedades a nuestro objeto en cualquier momento:

persona.ciudad = 'Ciudad Ejemplo';
console.log(persona.ciudad); // Output: "Ciudad Ejemplo"

También podemos modificar el valor de una propiedad existente:

persona.edad = 31;
console.log(persona.edad); // Output: 31



#Arreglos#
Los arreglos son una colección ordenada de elementos. Piensa en ellos como una lista donde puedes almacenar diferentes valores, como números, cadenas de texto, objetos u otros arreglos. Cada elemento en el arreglo se guarda en una posición específica, conocida como índice.

Aquí hay un ejemplo simple de un arreglo con algunos elementos:

// Declaración de un arreglo
const numeros = [1, 2, 3, 4, 5];

En este caso, numeros es nuestro arreglo y contiene los valores del 1 al 5 en orden.
Para acceder a los elementos de un arreglo, usamos su índice, que comienza desde 0. Por ejemplo:

console.log(numeros[0]); // Output: 1
console.log(numeros[2]); // Output: 3


También podemos modificar los elementos de un arreglo asignando nuevos valores a sus índices:

numeros[1] = 10;
console.log(numeros); // Output: [1, 10, 3, 4, 5]

Podemos agregar nuevos elementos al final de un arreglo utilizando el método push():

numeros.push(6);
console.log(numeros); // Output: [1, 10, 3, 4, 5, 6]


Para saber la cantidad de elementos en un arreglo, podemos usar la propiedad length:

console.log(numeros.length); // Output: 6


Otro ejemplo con un arreglo vacio:

const arrVacio = [];

Y con el método push() podemos ir agregando datos a ese arreglo:

arrVacio.push(6);
arrVacio.push('Hola mundo');

console.log(arrVacio); // Output: [6]




