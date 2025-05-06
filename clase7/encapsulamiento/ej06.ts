// 6. Ejercicio de Supermercado 
// Crea una clase Producto que contenga propiedades privadas como nombre, 
// precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
// negativo y que cantidad no sea menor que 0.
class Producto{
    private _nombre: string;
    private _precio!: number;
    private _cantidad!: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this.precio = precio;           
        this.cantidad = cantidad;  
    }

    public get nombre(): string {
        return this._nombre;           
    }

    public get precio(): number {
        return this._precio;            
    }

    public set precio(value: number) {
        if (value < 0) throw new Error("El precio no puede ser negativo.");
        this._precio = value;           
    }

    public get cantidad(): number {
        return this._cantidad;        
    }

    public set cantidad(value: number) {
        if (value < 0) throw new Error("La cantidad no puede ser negativa."); 
        this._cantidad = value;         
    }

}

const cafe = new Producto("Cafe", 15000, 24);
console.log(cafe.nombre);       
console.log(cafe.precio);  