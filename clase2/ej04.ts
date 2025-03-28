// Ejercicio 4: Función que devuelve un objeto
// Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
// titulo (string), autor (string) y paginas (number). La función debe devolver un
// objeto con esas propiedades. Luego, crea dos libros utilizando la función y
// muestra sus detalles en la consola
function crearLibro(titulo: string, autor: string, paginas: number): Object{
    return {titulo, autor, paginas}
};

let elPrincipito: object = crearLibro("El principito", "Saint Exupery", 120);
let miPlanta: object = crearLibro("Mi planta de naranja lima", "José Vasconcelo", 90);
console.log(elPrincipito, miPlanta);
