// 5. Ejercicio de Vacaciones 
// Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
// duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
// que duracion no sea menor que 1 y presupuesto sea mayor que 0.
class Vacacion{
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino = destino;
        this.duracion = duracion;
        this.presupuesto = presupuesto
    }

    public get destino(): string{
        return this._destino
    }

    public get duracion(): number{
        return this._duracion
    }

    public set duracion(value: number){
        if(value < 1){
            throw new Error('La duración no puede ser menor a 1')
        }
        this._duracion = value;
    }

    public get presupuesto(): number{
        return this._presupuesto
    }

    public set presupuesto(value: number) {
        if(value < 0){
            throw new Error('El presupueto debe ser mayor a 0')
        }
        this._presupuesto = value
    }
}

const Patagonia10 = new Vacacion("Patagonia Argentina", 8, 30000);
console.log(Patagonia10.duracion);
console.log(Patagonia10.destino);
