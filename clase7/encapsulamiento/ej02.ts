// 2. Ejercicio de Libro 
// Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
// tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
// Implementa métodos para prestar y devolver el libro, asegurando que solo se 
// pueda prestar si está disponible y que se pueda devolver solo si ha sido 
// prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
// válida. 
class Libro{
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anioPublicacion: number){
        this._titulo = titulo;
        this._autor = autor;
        this._anioPublicacion = anioPublicacion;
        this._disponible = true;
    }

    public prestar(): void{
        if(!this._disponible){
            console.log(`El libro '${this._titulo} no está disponible`);
        }else{
            this._disponible = false;
            console.log(`Se ha prestado el libro ${this._titulo}`);
        }
    }

    public devolver(): void{
        if(this._disponible){
            console.log(`El libro no ha sido prestado`);
        }else{
            this._disponible = true;
            console.log(`${this._titulo} ha sido devuelto`);
        }
    }

    public get disponible(): string{
        if(this._disponible){
            return 'Disponible'
        }else{
            return 'No disponible'
        }
    }

    public get titulo(): string{
        return this._titulo
    }
}

const libro = new Libro('El existencialismo es un humanismo', "Jean Paul Sartre", 1975);
console.log(`${libro.titulo}: ${libro.disponible}`);
libro.prestar();
console.log(`${libro.titulo}: ${libro.disponible}`);