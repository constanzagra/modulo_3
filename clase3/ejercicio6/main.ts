// Crea un namespace llamado Geometry en un archivo geometry.ts que contenga 
// las siguientes funciones: 
// • areaOfCircle(radius: number): number: devuelve el área de un círculo. 
// • areaOfSquare(side: number): number: devuelve el área de un cuadrado. 
// Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar 
// a las funciones y muestra los resultados en la consola. 
import { Geometry } from "./geometry";

let circulo = Geometry.areaOfCircle(4);
let cuadrado = Geometry.areaOfSquare(5);

console.log(circulo, cuadrado);