//Se define la constante math
const math = {};

//Funcion flecha invertirnumero
const invertirNumero = numero => {
    /*let se utiliza para declarar variables, las variables
solo son visibles y accesibles dentro del bloque en el que se declara*/
    let invertido = 0;
    /*se utiliza while para ejecutar un bloque de código
     repetidamente mientras una condición especificada sea verdadera*/
    while (numero !=0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};

//Funcion flecha invertirNumeroComoTexto
const invertirNumeroComoTexto = numero => {
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    return numeroInvertidoComoTexto;
};

//Funcion flecha invertirTexto
const invertirTexto = texto => {
    //El split divide la cadena de texto en este caso con un ''
    const splitText = texto.split('');
    //Pone el texto al reves
    const reversedText = splitText.reverse();
    /*join combina los elementos de un arreglo en una 
    sola cadena de texto los une mediante un separador específico, en este caso ''*/
    const joinedText = reversedText.join('');
    return joinedText;
};

//Funcion flecha invertirArreglo
const invertirArreglo = arreglo => {
    //Pone el arreglo al reves
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

//Funcion flecha conversionDatos
const conversionDatos = data => {
    let dataType = typeof data;
    let dataVar;

    //if ejecuta un bloque de código si una condición especificada se evalúa como verdadera
    if (data === '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingresado esta vacio o incorrecto';
        //else se utiliza para especificar un bloque de código que se ejecutará cuando la condición en el if sea falsa
    }else {
        console.log(`*********El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}***********`.green);
        //switch se utiliza para tomar decisiones basadas en el valor de una expresión 
        switch (dataType) {
            //Cada case representa un valor o conjunto de valores posibles para la expresión que se evalúa en el switch
            case 'number':
                dataVar = invertirNumero(data);
                //el break permite salir de la estructura de control y permite seguir con la siguiente instruccion
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArreglo(data);
                break;
                /*default se utiliza para especificar un bloque de código que se ejecutará si ninguno de los
                 casos anteriores dentro del switch coincide con el valor de la expresión evaluada*/
            default:
                dataVar = 'El valor ingresado no se puede invertir';
        }
    }
    return dataVar;
}

//Se definen las funciones
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

//Exporta el modulo math
module.exports = math;