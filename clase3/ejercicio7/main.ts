// Crea un módulo shapes.ts que contenga las siguientes funciones: 
// • circleArea(radius: number): number: devuelve el área de un círculo. 
// • squareArea(side: number): number: devuelve el área de un cuadrado. 
// Exporta ambas funciones como exportaciones nombradas. En main.ts, importa 
// las funciones y úsalas para calcular y mostrar las áreas en la consola.
import { circleArea, squareArea } from "./shapes";

console.log(circleArea(5));
console.log(squareArea(4));