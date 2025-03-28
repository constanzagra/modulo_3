// Ejercicio 7: Función que modifica propiedades de un objeto
// Consigna: Crea una función llamada aumentarSalario que acepte un objeto
// empleado con las propiedades nombre (string) y salario (number), y un número
// que represente el porcentaje de aumento. La función debe aumentar el salario
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.
let empleado : {nombre: string, salario: number, aumento: number} = {
    nombre: "Berni Bauque",
    salario: 2000,
    aumento: 21
};


function aumentarSalario(empleado: {nombre: string, salario: number, aumento: number}): string{
    let salarioActualizado: number = (empleado.salario * empleado.aumento) / 100 + empleado.salario
    return `${empleado.nombre} ahora cobrará ${salarioActualizado}`
};

console.log(aumentarSalario(empleado))