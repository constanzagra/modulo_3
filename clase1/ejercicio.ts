// Ejercicio 1: Declarar y asignar tipos primitivos 
// Ejercicio 2: Modifica el valor de una variable 
// Ejercicio 3: Combina variables primarias 

let nombre: string = "Constanza Riveros";
let edad: number = 26;
let esEstudiante: boolean = true;
let materiasAprobadas: any = 12;
console.log(`Nombre: ${nombre}. Edad: ${edad}. Estudiante: ${esEstudiante ? "si" : "no"}. Materias aprobadas: ${materiasAprobadas}`);
materiasAprobadas = "ninguna";
console.log(`Nombre: ${nombre}. Edad: ${edad}. Estudiante: ${esEstudiante ? "si" : "no"} Materias aprobadas: ${materiasAprobadas}`)

// Ejercicio 4: Parámetros opcionales simulados 
// Declara dos variables, una para almacenar un nombre y otra para almacenar una 
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no 
// proporcionada". Si se asigna la edad, imprímela junto al nombre. 
let nombreCompleto: string = "Taylor Swift";
let edadIngresada: number | undefined;
console.log(`Nombre: ${nombreCompleto}. Edad: ${edadIngresada !== undefined ? edadIngresada : "Edad no proporcionada"}.`)

// Ejercicio 5: Datos nulos y diferenciados 
// Declara una variable de tipo string | null. Asigna inicialmente un valor de cadena, 
// y luego cambia su valor a null. Imprime ambos estados en la consola, explicando 
// el significado de null en TypeScript. 
let stringONull: string | null = "Esto es un string";
console.log(stringONull);
stringONull = null;
console.log(stringONull);

// Ejercicio 6: Uso de unknown 
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los valores.
let desconocida: unknown = 2025;
console.log(typeof(desconocida), desconocida);

// Ejercicio 7: Tipos literales 
// Usa un tipo literal para declarar una variable que solo acepte uno de los valores: 
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en 
// TypeScript.

// Ejercicio 8: Cálculo simple con datos primitivos 
// Declara dos variables numéricas, realiza una operación matemática simple con 
// ellas (como una suma), y guarda el resultado en una tercera variable. Imprime el 
// resultado. 
let numero_1: number = 15;
let numero_2: number = 20;
let resultado: number = numero_1 + numero_2;
console.log(`El resultado de la suma es ${resultado}`);

// Ejercicio 9: Comparaciones lógicas 
// Declara dos variables booleanas y realiza una comparación lógica (como AND, OR). Imprime el resultado.
let esMayorDeEdad: boolean = true;
let tieneEntrada: boolean = true;
if(esMayorDeEdad && tieneEntrada){
    console.log("Puede pasar");
}else if(!esMayorDeEdad && tieneEntrada){
    console.log("No puede pasar");
}else{
    ("Sin entrada no podes pasar")
};

// Ejercicio 10: Uso de objetos 
// Declara un objeto en TypeScript con propiedades de tipo string, number y 
// boolean. Accede a estas propiedades e imprímelas en la consola.
let estudiante = {nombre: "Sofia", anio: 2, esRegular: true}
console.log(`Nombre: ${estudiante.nombre}. Año: ${estudiante.anio}. Regular: ${estudiante.esRegular}`);