// Ejercicio 5: Herencia con Modificadores de Acceso 
// Consigna: Crea una clase base Compania con un atributo privado 
// nombreCompania y un atributo protegido ingresosAnuales. Crea una clase 
// derivada EmpresaTecnologia que use el atributo protegido y agregue un 
// método que calcule el doble de los ingresos anuales.
class Company{
    private companyName: string;
    protected anualIncome: number;

    constructor(name: string, income: number){
        this.companyName = name;
        this.anualIncome = income
    }

    showName(): void{
        console.log(`Compañía: ${this.companyName}`);
    }
}

class techCompany extends Company{

    constructor(name: string, income: number){
        super(name, income)
    }

    doubleTheIncome(): void{
        super.showName();
        console.log(`El doble del ingreso anual de la compania es ${this.anualIncome * 2} USD`)
    }
}

const techStartupPepito = new techCompany("Pepito", 1000000);
techStartupPepito.doubleTheIncome();