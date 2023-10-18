//Requiere el paquete colors
require('colors');

//Requiere al archivo math
const math = require('./modules/math.js')

//Definimos una funcion flecha asincronica
const main = async () => {

    //Manda imprimir un mensaje en la consola
    console.log('hola SENA CBA\n'.magenta);

    //Define una constante llamada numeros y le da unos valores numericos en un arreglo
    const numeros = [1, 2, 400, 741, 1000, 2341, 2679];
    /*Se utiliza for para repetir un conjunto de instrucciones un número
     específico de veces o para recorrer elementos de una colección, como un arreglo*/
    for (const numero of numeros) {
        const invertidoComoNumero = math.invertirNumero(numero);
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        //Manda a imprimir el mensaje en la consola
        console.log("*********El numero '%s' es '%s' invertido como numero, y '%s' como cadena************".yellow,
                    numero, invertidoComoNumero, invertidoComoCadena);
    }

    //Define una constante llamada textos y le da unos valores string en un arreglo
    const textos = ['Hola sebastian', 'Cedula 1203030', 'Ingeniero de Software'];
    for(const texto of textos) {
        const textoInvertido = math.invertirTexto(texto);
        console.log("*********El texto '%s' se invierte como '%s'*********".blue, texto, textoInvertido);
    }

    //Define una constante llamada datos y le da unos valores string y numeric en un arreglo
    const datos = [93452618, 'ADSO 2798618', [2798618, 'ADSO']]
    for(let dato of datos){
        const datoConvertido = math.conversionDatos(dato);
        console.log(`*********El resultado de conversion es: ${datoConvertido}**********`.blue);
    }
}

//Llama a toda la funcion flecha
main();