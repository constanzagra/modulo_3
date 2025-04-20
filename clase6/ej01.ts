// Ejercicio 1: Herencia Simple  
// Consigna: Define una clase base Torta que tenga propiedades generales como 
// nombre y tipo, y un método hacerDescripcion() que devuelva una descripción 
// general de la torta. Luego, crea una clase derivada TortaDeChocolate que 
// extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva 
// "Soy una torta de chocolate, deliciosa y suave." 
class Cake{
    public name: string;
    public type: string;

    constructor(name:string, type: string){
        this.name = name;
        this.type = type;
    }

    describe(): void{
        console.log(`La ${this.name} es una torta de ${this.type}`);
    }
}

class ChocolateCake extends Cake{
    constructor(name: string, type:string){
        super(name, type)
    }

    describe(): void{
        console.log(`Soy una torta de chocolate, deliciosa y suave`);
    }
}

const tortaDeChocolate = new ChocolateCake("marquise", "chocolate");
tortaDeChocolate.describe()