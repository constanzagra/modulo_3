// Ejercicio 8: Funciones con diferentes tipos de retorno
// Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
// función debe retornar el área de la figura. Usa tipos específicos para cada caso.
function calcularArea(figura: string, medida: number, ancho?: number): any {
    if(figura == "circulo"){
        const pi = 3.14159; 
        return pi * Math.pow(medida, 2);
    }else if(figura == "rectangulo" && ancho){
        return medida * ancho
    }else{
        return "Figura no reconocida"
    }
};

console.log(calcularArea("circulo", 5));
console.log(calcularArea("rectangulo", 10, 6));