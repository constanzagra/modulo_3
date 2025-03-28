// Ejercicio 10: Funciones y arrays de objetos
// Consigna: Crea una función llamada listarLibros que acepte un array de objetos
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.
let libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" }
];

function listarLibros(listaDeLibros: {titulo: string, autor: string}[]): string{
    let arregloDeLibros = listaDeLibros.map((libro) => {
    return `Libro: ${libro.titulo}. Autor: ${libro.autor}`});
    return arregloDeLibros.join('\n')
};

console.log(listarLibros(libros))