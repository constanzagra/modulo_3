// Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces) 
// Consigna: Crea dos interfaces: Volador con el método volar() y Transportable 
// con el método transportar(). Luego crea una clase Avion que implemente ambas 
// interfaces y sobrescriba los métodos. 
interface Volador{
    volar(): void;
}

interface Transportable{
    transportar(): void;
}

class Avion implements Volador, Transportable{
    pasajeros: number;
    velocidad: number;

    constructor(velocidad: number, pasajeros: number){
        this.pasajeros = pasajeros;
        this.velocidad = velocidad;
    }

    volar(): void{
        console.log(`Este avión está volando ${this.velocidad} km/h`);
    }
    transportar(): void{
        console.log(`Y transporta a ${this.pasajeros} pasajeros`);
    }
}

const vueloAF894 = new Avion(1020, 265);
vueloAF894.volar();
vueloAF894.transportar();
