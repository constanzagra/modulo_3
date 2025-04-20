// Ejercicio 4: Herencia de Métodos y Sobrescritura  
// Consigna: Define una clase base Flor con el método describir(), que imprime un 
// mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, 
// cada una sobrescribiendo el método describir() con un mensaje específico. 
class Flor{
    protected cantidad: number;

    constructor(cantidad: number){
        this.cantidad = cantidad
    }

    describir(): void{
        console.log(`Quedan ${this.cantidad} flores en stock`);
    }
}

class Rosa extends Flor{
    constructor(cantidad: number){
        super(cantidad)
    }

    override describir(): void {
        console.log(`Quedan ${this.cantidad} rosas en stock`);
    }
}

class Girasol extends Flor{
    constructor(cantidad: number){
        super(cantidad)
    }

    override describir(): void {
        console.log(`Quedan ${this.cantidad} girasoles en stock`);
    }
}

const rosas = new Rosa(38);
const girasoles = new Girasol(20);
rosas.describir();
girasoles.describir()