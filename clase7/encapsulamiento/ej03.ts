// 3. Ejercicio de Estudiante 
// Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
// edad, y calificaciones. Implementa métodos para agregar calificaciones y 
// calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
// una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
// calcular el promedio. 
class Estudiante{
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number[];

    constructor(nombre: string, edad: number){
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = []
    }

    public agregarCalificacion(calificacion: number): void{
        if(calificacion > 100 || calificacion < 0){
            throw new Error('La calificación debe ser entre 0 y 100')
        }else{
            this._calificaciones.push(calificacion)
        }
    }

    public calcularPromedio(): number{
        if (this._calificaciones.length == 0){
            throw new Error('No hay calificaciones agregadas');
        }else{
            const suma = this._calificaciones.reduce((a, v) => a + v, 0);
            const promedio = suma / this._calificaciones.length;
            return promedio
        }
    }

    public get nombre(): string{
        return this._nombre
    }
}

const estudiante01 = new Estudiante("Martina", 22);
estudiante01.agregarCalificacion(6);
estudiante01.agregarCalificacion(3);
estudiante01.agregarCalificacion(9);
console.log(`Promedio de ${estudiante01.nombre}: ${estudiante01.calcularPromedio()}`);