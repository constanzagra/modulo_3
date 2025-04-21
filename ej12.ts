// Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases  
// Crea un sistema de inventario que gestione diferentes tipos de productos. 
// Define una clase abstracta Producto con: 
// • Propiedades protegidas: nombre, precio. 
// • Un método abstracto calcularDescuento(). 
// Implementa dos subclases: Ropa y Electronica. 
// • La subclase Ropa aplicará un 10% de descuento. 
// • La subclase Electronica tendrá un 5% de descuento. 
// Añade un método concreto en la clase abstracta para mostrar la información del 
// producto.
abstract class Producto{
    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number){
        this.nombre = nombre
        this.precio = precio
    }

    abstract calcularDescuento(): void;

    mostrarInfo(): void{
        console.log(`El producto ${this.nombre} cuesta $${this.precio}`);
    }
}

class Ropa extends Producto{
    constructor(nombre: string, precio: number){
        super(nombre, precio)
    }

    override mostrarInfo(): void {
        console.log(`La prenda ${this.nombre} cuesta ${this.precio}`);
    }

    calcularDescuento(): void {
        let descuento = this.precio * 0.10
        console.log(`El descuento del producto ${this.nombre} es de ${descuento}`);
    }
}

class Electronica extends Producto{
    constructor(nombre: string, precio: number){
        super(nombre, precio)
    }

    override mostrarInfo(): void {
        console.log(`Producto: ${this.nombre} Precio: ${this.precio}`);
    }

    calcularDescuento(): void {
        let descuento = this.precio * 0.05
        console.log(`El descuento del producto ${this.nombre} es de ${descuento}`);
    }
}