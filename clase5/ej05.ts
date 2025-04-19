// Ejercicio 5: Interfaz 
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un 
// método presentarse(). 
// 2. Crea una clase llamada Persona que implemente esta interfaz y 
// proporciona la implementación del método presentarse(). 
interface IPersona {
    nombre: string;
    edad: number;

    presentarse: () => void;
};

class Persona implements IPersona{

    constructor(public nombre: string, public edad: number){}

    public presentarse(): void{
        console.log(`Hola! Soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const Anibal = new Persona("Anibal", 7);
Anibal.presentarse();