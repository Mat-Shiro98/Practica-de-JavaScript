
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

>En este caso, persona es nuestro objeto, y las propiedades que contiene son nombre, edad y profesion. Podemos acceder a cada propiedad utilizando su nombre clave:

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


>Para saber la cantidad de elementos en un arreglo, podemos usar la propiedad length:

    console.log(numeros.length); // Output: 6


>Otro ejemplo con un arreglo vacio:

    const arrVacio = [];

>Y con el método push() podemos ir agregando datos a ese arreglo:

    arrVacio.push(6);
    arrVacio.push('Hola mundo');

    console.log(arrVacio); // Output: [6]


# While y do while

>En un bucle while, la condición se verifica antes de que se ejecute el bloque de código del bucle. Si la condición es true, el bloque se ejecutará; si la condición es false desde el principio, el bloque de código no se ejecutará en absoluto.

>Ejemplo de un bucle while:
    let i = 0;
        while (i < 5) {
            console.log(i);
            i++;
        }

>En un bucle do...while, el bloque de código se ejecuta al menos una vez antes de verificar la condición. Después de la primera ejecución, se verifica la condición, y si es true, el bloque de código se ejecutará nuevamente; si la condición es false, el bucle se detiene.

>Ejemplo de un bucle do while:

        let j = 0;
        do {
            console.log(j);
            j++;
        } while (j < 5);


# Switch

>La declaración switch es una estructura de control que te permite evaluar una expresión y compararla con diferentes casos. Cada caso representa un valor posible que puede tener la expresión. Cuando se encuentra un caso que coincide con el valor de la expresión, se ejecuta el bloque de código asociado a ese caso. Si ningún caso coincide, se puede proporcionar un caso default que se ejecutará si no se encontró ninguna coincidencia.

>Ejemplo de switch case:

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


# for

>El bucle "for" es una estructura de control que te permite ejecutar un bloque de código repetidamente, un número específico de veces. Es especialmente útil cuando sabes cuántas veces deseas repetir una acción.

>sintáxis:
    for (inicialización; condición; incremento/decremento) {
        // Código a repetir
    }

>Inicialización: Aquí, generalmente se declara una variable y se le asigna un valor inicial. Esto se ejecuta solo una vez antes de comenzar el bucle.

>Condición: Es una expresión que se verifica antes de cada iteración. Si la condición es verdadera, el bucle continúa; si es falsa, el bucle se detiene.

>Incremento/Decremento: Aquí, generalmente se aumenta o disminuye el valor de la variable declarada en la inicialización. Esto se ejecuta después de cada iteración.


>un ejemplo de cómo usar un bucle for para imprimir los números del 1 al 5:

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

>Resultado: 
        >1
        >2
        >3
        >4
        >5


# for anidado

>Un bucle for dentro de otro bucle for se conoce como bucle anidado y se utiliza para recorrer o iterar a través de una estructura de datos bidimensional o realizar tareas que requieren operaciones en múltiples niveles. 

>Imagina que tienes dos bucles for anidados, uno dentro del otro. El bucle externo se encarga de controlar las filas, mientras que el bucle interno se encarga de controlar las columnas (o viceversa, dependiendo de cómo los organices).

## Estructura básica:

>El bucle externo (llamémoslo for externo) comienza desde el principio y se ejecuta hasta que su condición sea falsa. Esta condición determina cuántas veces se repetirá todo el proceso.

>Dentro del bucle for externo, tienes otro bucle (el bucle interno, llamémoslo for interno) que también tiene su propia condición y cuerpo.

>El bucle for interno se ejecuta completamente cada vez que el bucle for externo realiza una iteración. Esto significa que el for interno se reinicia desde el principio cada vez que el for externo avanza.

>Ejemplo:

    for (let fila = 1; fila <= 3; fila++) {
    for (let columna = 1; columna <= 3; columna++) {
        console.log(`Fila ${fila}, Columna ${columna}`);
     }
    }

>Explicación:

>El bucle for externo controla las filas. Comienza con fila igual a 1 y se ejecuta hasta que fila sea mayor que 3.

>Dentro del bucle for externo, tenemos el bucle for interno que controla las columnas. Comienza con columna igual a 1 y se ejecuta hasta que columna sea mayor que 3.

>Cada vez que el bucle for externo avanza (por ejemplo, cuando fila es igual a 1), el bucle for interno se ejecuta completamente tres veces (cuando columna es igual a 1, 2 y 3), y luego el bucle externo avanza nuevamente con fila igual a 2, y el proceso se repite hasta que se complete la matriz 3x3.


# Funciones

>Una función en JavaScript es como una "caja" que contiene un conjunto de instrucciones o acciones. Puedes darle un nombre y luego usar ese nombre para "llamar" la función y ejecutar esas instrucciones. Las funciones te permiten reutilizar código y hacer que tu programa sea más organizado.

>Ejemplo:

    function saludar(nombre) {
         console.log("Hola, " + nombre + "!");
    }

> Llamada de función:

    saludar("Juan"); 

>> Output: "Hola, Juan!"


