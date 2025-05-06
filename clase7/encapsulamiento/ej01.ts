// 1. Ejercicio de Coche 
// Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
// propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
// métodos para encender el coche y realizar un viaje, que incrementen el 
// kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
// inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
// establecer un año o kilometraje no válido, imprime un mensaje indicando el error.

class Coche{
    private _marca: string;
    private _modelo: string;
    private _anio!: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, anio: number){
        this._marca = marca;
        this._modelo = modelo;
        this.anio = anio;
        this._kilometraje = 0;
    }

    public get anio(): number {
        return this._anio;
    }

    public set anio(value: number){
        if(value < 1886){
            throw new Error("El año no puede ser anterior a 1886");
        }else{
            this._anio = value
        }
    }

    public encender(): void{
        console.log(`El ${this._marca} ${this._modelo} está encendido`);
    }

    public viajar(kms: number): void{
        if(kms < 0){
            console.log('El kilometraje no puede ser negativo');
        }else{
            this._kilometraje += kms
            console.log(`Se han recorrido ${kms}kms. Kilometraje actual: ${this._kilometraje}`);
        }
    }

    public get kilometraje(): number{
        return this._kilometraje
    }
}

const miAuto = new Coche('Renault', 'Sandero', 202);
miAuto.encender();
miAuto.viajar(890);
console.log(`Kilometraje actual: ${miAuto.kilometraje}`);