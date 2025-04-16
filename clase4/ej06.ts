// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y  Aserciones 
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de 
// valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of, 
// filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de 
// tipo para acceder a las propiedades específicas de string. 
function filtrarElementos(array: (number | string | boolean)[]): string[]{
    const resultado: string[] = [];

    for(let el of array){
        if(typeof el === 'string'){
            let txt = el as string;
            console.log(`Longitud del texto: ${txt.length}`);
            resultado.push(txt);
        }
    }
    return resultado
};

const arreglo = [true, 28, "Buenos Aires"];

console.log(filtrarElementos(arreglo));
