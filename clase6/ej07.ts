// Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real 
// Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método 
// preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción 
// para que ambas bebidas oculten su lógica de preparación interna pero 
// expongan un comportamiento común.
interface Bebida{
    preparar(): void;
}

class Cafe implements Bebida{
    preparar(): void {
        console.log("Preparando café...");
    }
}

class Te implements Bebida{
    preparar(): void {
        console.log("Preparando el  té...");
    }
}

const pedido1 = new Cafe();
pedido1.preparar();
