// Actividad 1: Usar For...In para recorrer propiedades de un objeto 
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un 
// bucle for...in para recorrer y mostrar cada propiedad y su valor. 
export const estudiante = {
    nombre: "Micaela",
    edad: 26,
    ciudad: "Buenos Aires"
};

// for(let prop in estudiante){
//     console.log(estudiante[prop as keyof typeof estudiante]);
// };

//Otra forma de hacerlo
// for (const prop in estudiante) {
//     if (Object.prototype.hasOwnProperty.call(estudiante, prop)) {
//       console.log(prop); // Ej: 'nombre', 'edad', 'ciudad'
    
//      // Usamos una aserción de tipo para acceder a los valores
//       console.log(estudiante[prop as keyof typeof estudiante]); // Ej: 'Ana', 25, 'Madrid'
//     }
// };