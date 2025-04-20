// Ejercicio 2: Herencia Simple con Acceso 
// Consigna: Crea una clase base Maestro con propiedades protegidas nombre y 
// materia, y un método enseñar(). Luego, crea una clase derivada 
// MaestroMatematicas que extienda de Maestro y sobrescriba el método 
// enseñar() para imprimir un mensaje específico de matemáticas. 
class Teacher{
    protected name: string;
    protected subject: string;

    constructor(name: string, subject: string){
        this.name = name;
        this.subject = subject;
    }

    toTeach(): void{
        console.log(`Hola! Soy ${this.name} y enseño ${this.subject}.`);
    }
}

class mathTeacher extends Teacher{
    constructor(name: string, subject: string){
        super(name, subject)
    }

    override toTeach(): void {
        super.toTeach();
        console.log(`Mis clases son martes y jueves.`);
    }
}

const profeMat = new mathTeacher("Florencia", "Matematica");
profeMat.toTeach();