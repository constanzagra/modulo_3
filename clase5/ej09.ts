// Ejercicio 9: Sistema de Gestión de Vehículos 
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases: 
// o Vehiculo: Clase base con propiedades como marca, modelo y un 
// método para mostrar información del vehículo. 
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para 
// tipoCombustible y un método para mostrar la información completa 
// del coche. 
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad 
// para cilindrada y un método para mostrar la información completa 
// de la motocicleta.
class Vehicle{
    public brand: string;
    public model: string;

    constructor(brand: string, model: string){
        this.brand = brand;
        this.model = model;
    }

    public showDetails(): void{
        console.log(`Model: ${this.model}. Brand: ${this.brand}`);
    }
}

class Car extends Vehicle{
    public fuelType: string;

    constructor(brand: string, model: string, fuelType: string){
        super(brand, model);
        this.fuelType = fuelType;
    }

    public showDetails(): void {
        super.showDetails();
        console.log(`Required fuel: ${this.fuelType}`);
    }
}

class Motorcycle extends Vehicle{
    public eDisplacement: Number;

    constructor(brand: string, model: string, eDisplacement: number){
        super(model, brand);
        this.eDisplacement = eDisplacement;
    }

    public showDetails(): void {
        super.showDetails();
        console.log(`Engine displacement: ${this.eDisplacement}`);
    }
}

const clio = new Car("Renault", "Clio", "Gasolero");
clio.showDetails();