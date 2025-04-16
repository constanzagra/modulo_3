// Crea un módulo index.ts que re-exporte todas las funciones y constantes de los 
// módulos mathUtils.ts y stringUtils.ts. 
// En main.ts, importa todo desde index.ts y utiliza al menos una función de cada 
// módulo, mostrando el resultado en la consola.
import{
    add, 
    substract, 
    capitalize, 
    reverse
}from './index'; 

const suma = add(365, 366);
const resta = substract(2008, 34);
const toCap = capitalize("holis");
const deReversa = reverse("de reversa mami");

console.log(suma, resta, toCap, deReversa);