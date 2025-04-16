// Actividad 7: Aserciones y genéricos con funciones y objetos 
// Crea una función genérica llamada procesarObjeto que reciba un objeto 
// genérico y: 
// 1. Use un bucle for...in para recorrer sus propiedades. 
// 2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a 
// minúsculas. 
// 3. Si es un número (number), elévalo al cuadrado. 
// 4. Si es un booleano, invierte su valor. 
// Usa aserciones de tipo para realizar las transformaciones.

function procesarObjeto<T>(obj: T): void{
    for(let prop in obj){
        const value = obj[prop as keyof T]
        if(typeof value === "string"){
            console.log(value.toLowerCase())
        }else if(typeof value === "number"){
            console.log((value as number) ** 2);
        }else if(typeof value === "boolean"){
        console.log(!value as boolean);}
        
    }
};

const estudiante = {
    nombre: "Micaela",
    edad: 26,
    ciudad: "Buenos Aires",
    libre: false
};

console.log(procesarObjeto(estudiante));