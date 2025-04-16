// Actividad 4: Usar aserciones de tipo 
// Declara una variable de tipo any y usa una aserción para tratarla como string, 
// accediendo a la propiedad .length.
let value: any = "Hola, TypeScript";
let changedValue: number = (value as string).length;

console.log(`Longitud del string: ${changedValue}`);