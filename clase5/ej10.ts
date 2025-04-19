// Ejercicio 10: Registro de Estudiantes 
// 1. Crea un sistema para registrar Estudiantes con las siguientes clases: 
// o Estudiante: Clase que incluye propiedades como nombre, edad y 
// curso, además de un método que muestre la información del 
// estudiante. 
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con 
// métodos para agregar un estudiante y mostrar todos los estudiantes 
// registrados.
class Student{
    public name: string;
    public age: number;
    public grade: string;

    constructor(name: string, age: number, grade: string){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    public showDetails(): void{
        console.log(`Student: ${this.name} - Age: ${this.age} - Grade: ${this.grade}`);
    }
}

class studentRegistration {
    private students: Student[] = [];

    public addStudent(student: Student): void{
        this.students.push(student)
    }

    public showStudents(): void{
        console.log('Students list: ');
        this.students.forEach(student => student.showDetails())
    }
}


const registry = new studentRegistration();
const student01 = new Student("Anna", 16, "5th 1");
const student02 = new Student("James", 15, "4th 3")
registry.addStudent(student01);
registry.addStudent(student02);
registry.showStudents();