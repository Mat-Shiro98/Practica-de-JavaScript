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

>Cuando uses variables, se recomienda comenzar con const y cambiar a let solo si sabes que el valor de la variable cambiará en el futuro.

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


# Objetos
>Es una agrupación de datos.

>Un objeto es como una caja donde puedes guardar diferentes cosas y cada cosa tiene un nombre. Cada una de esas >cosas almacenadas en la caja es una propiedad del objeto, y su nombre es la clave que usas para acceder a esa >cosa.

>Por ejemplo, si queremos representar una persona en JavaScript, podríamos usar un objeto para almacenar información sobre esa persona, como su nombre, edad y profesión.

## Definimos un objeto para representar una persona
    let persona = {
      nombre: 'Juan',
      edad: 30,
      profesion: 'Ingeniero'
    };

En este caso, persona es nuestro objeto, y las propiedades que contiene son nombre, edad y profesion. Podemos acceder a cada propiedad utilizando su nombre clave:

    console.log(persona.nombre); // Output: "Juan"
    console.log(persona.edad); // Output: 30
    console.log(persona.profesion); // Output: "Ingeniero"

>Podemos agregar nuevas propiedades a nuestro objeto en cualquier momento:

    persona.ciudad = 'Ciudad Ejemplo';
    console.log(persona.ciudad); // Output: "Ciudad Ejemplo"

>También podemos modificar el valor de una propiedad existente:

    persona.edad = 31;
    console.log(persona.edad); // Output: 31



# Arreglos
>Los arreglos son una colección ordenada de elementos. Piensa en ellos como una lista donde puedes almacenar diferentes valores, como números, cadenas de texto, objetos u otros arreglos. Cada elemento en el arreglo se guarda en una posición específica, conocida como índice.

>Aquí hay un ejemplo simple de un arreglo con algunos elementos:

## Declaración de un arreglo
    const numeros = [1, 2, 3, 4, 5];

>En este caso, numeros es nuestro arreglo y contiene los valores del 1 al 5 en orden.
>Para acceder a los elementos de un arreglo, usamos su índice, que comienza desde 0. Por ejemplo:

    console.log(numeros[0]); // Output: 1
    console.log(numeros[2]); // Output: 3


>También podemos modificar los elementos de un arreglo asignando nuevos valores a sus índices:

    numeros[1] = 10;
    console.log(numeros); // Output: [1, 10, 3, 4, 5]

>Podemos agregar nuevos elementos al final de un arreglo utilizando el método push():

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



OPERADORES DE COMPARACIÓN
##Operador de igualdad ==:

El operador de igualdad == compara dos valores para ver si son iguales, sin tener en cuenta sus tipos de datos. Si los valores son iguales, devuelve true; de lo contrario, devuelve false.

console.log(5 == 5); // Output: true
console.log("5" == 5); // Output: true (compara los valores pero no los tipos)
console.log(10 == 5); // Output: false



##Operador de igualdad estricta ===:
El operador de igualdad estricta === compara dos valores y también verifica que sus tipos de datos sean iguales. Solo devuelve true si los valores y los tipos de datos son idénticos.

console.log(5 === 5); // Output: true
console.log("5" === 5); // Output: false (los tipos son diferentes)
console.log(10 === 5); // Output: false


##Operadores de <, >, >= , <=, !=,!==:

console.log(5 < 2);
console.log(5 > 2);
console.log(5 <= 2);
console.log(5 >= 2);
console.log(5 !== '5'); 
console.log(5 != 2);



-OPERADORES LOGICOS-

(or ||) , (and &&) ,(not !)

Operador lógico AND (&&):

Símbolo: &&
Uso: Retorna true si ambas expresiones son verdaderas, de lo contrario, retorna false.
Ejemplo: true && false devuelve false.
Operador lógico OR (||):

Símbolo: ||
Uso: Retorna true si al menos una de las expresiones es verdadera, de lo contrario, retorna false.
Ejemplo: true || false devuelve true.
Operador lógico NOT (!):

Símbolo: !
Uso: Invierte el valor de una expresión. Si la expresión es verdadera, retorna false, y si es falsa, retorna true.
Ejemplo: !true devuelve false.


DATO:

Por ejemplo cuando nuestro operador OR busca el primer elemento true y lo muestra en pantalla sea string o numero o objetos todo evalua en true menos el 0 ya que devuelve false

const encadenar = false || false || true || 'Hola' || 'Mundo';
console.log(encadenar); //(Muestra el 'Hola')


-- Control de flujo WHILE --

El bucle while es una estructura que permite repetir un bloque de código mientras una condición especificada sea verdadera. En cada iteración, se verifica la condición. Si es verdadera, el bloque de código se ejecuta; luego, la condición se verifica nuevamente y, si sigue siendo verdadera, el bloque se ejecuta nuevamente. Esto continúa hasta que la condición se vuelva falsa, momento en el que el bucle se detiene y el programa continúa con el siguiente código después del bucle.


let contador = 0;

while (contador < 5) {
  console.log("Número: " + contador);
  contador++;
}


-- switch --

La declaración switch es una estructura de control que te permite evaluar una expresión y compararla con diferentes casos. Cada caso representa un valor posible que puede tener la expresión. Cuando se encuentra un caso que coincide con el valor de la expresión, se ejecuta el bloque de código asociado a ese caso. Si ningún caso coincide, se puede proporcionar un caso default que se ejecutará si no se encontró ninguna coincidencia.

//En el switch se ingresa el valor ingresado
switch(2){
    case 1:{
        console.log('Soy caso 1');
        break;
    }
    case 2:{
        console.log('Soy caso 2');
        break;
    }
    case 3:{
        console.log('Soy caso 3');
        break;
    }
    default:
        console.log('No existe caso');
        break;
}   


--FOR--

El bucle for es una estructura de control que te permite ejecutar un bloque de código repetidamente, un número específico de veces. Es especialmente útil cuando sabes cuántas veces deseas repetir una acción.

for (inicialización; condición; incremento/decremento) {
  // Código a repetir
}

Inicialización: Aquí, generalmente se declara una variable y se le asigna un valor inicial. Esto se ejecuta solo una vez antes de comenzar el bucle.

Condición: Es una expresión que se verifica antes de cada iteración. Si la condición es verdadera, el bucle continúa; si es falsa, el bucle se detiene.

Incremento/Decremento: Aquí, generalmente se aumenta o disminuye el valor de la variable declarada en la inicialización. Esto se ejecuta después de cada iteración.

Aquí tienes un ejemplo de cómo usar un bucle for para imprimir los números del 1 al 5:

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

En este ejemplo:

let i = 1 inicializa la variable i con el valor 1 antes de comenzar el bucle.
i <= 5 es la condición. El bucle se ejecutará mientras i sea menor o igual a 5.
i++ incrementa el valor de i en uno después de cada iteración.



-- FUNCIONES --
Una función en JavaScript es como una "caja" que contiene un conjunto de instrucciones o acciones. Puedes darle un nombre y luego usar ese nombre para "llamar" la función y ejecutar esas instrucciones. Las funciones te permiten reutilizar código y hacer que tu programa sea más organizado.

// Definición de función
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

// Llamada de función
saludar("Juan"); // Output: "Hola, Juan!"


En este ejemplo:

function saludar(nombre) define una función llamada saludar que toma un parámetro llamado nombre.

Dentro de la función, console.log("Hola, " + nombre + "!"); es la acción que se ejecutará cuando la función sea llamada.
saludar("Juan"); llama a la función saludar y pasa "Juan" como el valor para el parámetro nombre.

Las funciones pueden realizar tareas más complejas y retornar valores, lo que te permite crear bloques de código reutilizables que pueden ser utilizados en diferentes partes de tu programa.


# Ejercicios

¡Por supuesto! Aquí tienes algunos ejercicios de JavaScript con diferentes temas, desde básicos hasta un poco más avanzados:

**Ejercicios de `if` y `else`**:

1. **Verificación de número positivo o negativo**: Escribe un programa que solicite al usuario ingresar un número y luego muestre un mensaje que indique si el número es positivo, negativo o cero.

2. **Determinar si un número es par o impar**: Crea un programa que pida al usuario ingresar un número y luego determine si es par o impar. Muestra un mensaje apropiado en función del resultado.

**Ejercicios de bucles `for`**:

3. **Suma de números pares**: Escribe un programa que calcule la suma de todos los números pares del 1 al 100 utilizando un bucle `for`.

4. **Tablas de multiplicar**: Crea un programa que solicite al usuario ingresar un número y luego imprima la tabla de multiplicar correspondiente a ese número, desde 1 hasta 10.

**Ejercicios de bucles `while` o `do...while`**:

5. **Adivina el número**: Genera un número aleatorio entre 1 y 100. Luego, permite al usuario adivinar el número. Proporciona pistas como "demasiado alto" o "demasiado bajo" hasta que adivine el número correcto. Utiliza un bucle `while` para esto.

6. **Suma de números hasta cierto límite**: Pide al usuario ingresar un número límite. Luego, utiliza un bucle `do...while` para sumar todos los números desde 1 hasta el número límite ingresado por el usuario.

**Ejercicios de funciones**:

7. **Cálculo de factorial**: Crea una función que calcule el factorial de un número. El factorial de un número entero no negativo `n` se define como el producto de todos los enteros positivos desde 1 hasta `n`.

8. **Validación de contraseña**: Escribe una función que tome una contraseña como argumento y determine si es válida o no. Una contraseña válida debe tener al menos 8 caracteres, contener al menos una letra mayúscula y al menos un número.

Estos ejercicios cubren varios conceptos básicos y un poco más avanzados de JavaScript, incluyendo el uso de `if` y `else`, bucles `for`, bucles `while` o `do...while`, y funciones. Puedes adaptarlos y modificarlos según tus necesidades para practicar y mejorar tus habilidades en JavaScript.