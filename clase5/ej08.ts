// Ejercicio 8: Integramos contenidos - Animales 
// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
// Animal, Mascota, y MascotaExotica. 
// o La clase Animal debe tener propiedades como nombre y tipo. 
// o La clase Mascota debe extender Animal e incluir una propiedad para dueño. 
// o La clase MascotaExotica debe extender Animal e incluir una propiedad para habitat. 
// 2. Implementa métodos para mostrar información sobre cada tipo de animal 
// y agrega ejemplos de instanciación.
class Animal{
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public mostrarInformacion(): void {
        console.log(`Tipo: ${this.tipo}, Nombre: ${this.nombre}`);
    }
}

class Mascota extends Animal{
    public duenio: string;

    constructor(nombre: string, tipo: string, duenio: string){
        super(nombre, tipo);
        this.duenio = duenio;
    }

    public mostrarInformacion(): void {
        console.log(`Tipo: ${this.tipo}, Nombre: ${this.nombre} - Dueño ${this.duenio}`);
    }
}

class MascotaExotica extends Animal{
    public habitat: string;

    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo); 
        this.habitat = habitat;
    }

    public mostrarInformacion(): void {
        console.log(`Tipo: ${this.tipo}, Nombre: ${this.nombre} . Habitat: ${this.habitat}`);
    }
}

const gato = new Animal("Charly", "gato");
gato.mostrarInformacion();

const perrito = new Mascota("Anibal", "perro", "Constanza");
perrito.mostrarInformacion();

const pez = new MascotaExotica("rodolfo", "pez", "agua dulce");
pez.mostrarInformacion()