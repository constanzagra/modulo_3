// Ejercicio 3: Creación y manipulación de objetos
// Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
// (string), deporte (string), y energia (number). Luego, define una función entrenar
// que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
// final, muestra el estado del deportista en la consola.
let deportista : {nombre: string; deporte: string; energia: number, entrenar: Function} = {
    nombre : "Luciana Aymar",
    deporte: "Hockey",
    energia: 100,
    entrenar(deportista: object, horas: number): any{
        let energiaRestante: number = this.energia - (horas * 5)
        return energiaRestante
    }
};

console.log(deportista.entrenar(deportista, 2))

//Otra forma de hacerlo
// const deportista = {
//     nombre: "Tatiana",
//     deporte: "Natación",
//     energia: 100,
//   };  
//   function entrenar(deportista: { nombre: string; deporte: string; energia: number }, horas: number): void {
//     const gastoEnergia = horas * 5;
//   deportista.energia -= gastoEnergia;
//    if (deportista.energia < 0) deportista.energia = 0;
//     console.log(`Después de entrenar ${horas}h, el estado del deportista es:`);
//     console.log(deportista);
//    …..
//   } 
//   entrenar(deportista, 4);