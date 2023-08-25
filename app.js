//Referencia el modulo funciones a traves de la constante funciones

require("colors");

//console.log(functions);
process.stdout.write("Ejercicio\n\n");

let nombreAprendiz = 'Johan Estiven';
let apellidoAprendiz = 'Vergara Urrego';

let nombreCompletoAprendiz = nombreAprendiz[0].toUpperCase()+
nombreAprendiz.substring(1).toLowerCase() + " " +
apellidoAprendiz.substring(0).toUpperCase();

console.log(nombreCompletoAprendiz);

let i = nombreCompletoAprendiz.length;
let y=1;
while(i > 0){
    console.log(i +"    "+ nombreCompletoAprendiz.substring(0,i));
    i--;
    y++;
}
/*for (let index = 0; index < array.length; index++){
    const element = array[index];
}*/