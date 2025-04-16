// Actividad 3: Crear una función genérica 
// Crea una función genérica que tome un parámetro de cualquier tipo y lo 
// devuelva. Prueba la función con diferentes tipos de datos.
function genericFunction<T>(param:T):T{
    return param
}

export let number = genericFunction<number>(15)
console.log(`Ejemplo de uso con tipo number: ${number}`);

let texto = genericFunction<string>("BHolis!")
console.log(`Ejemplo de uso con tipo string: ${texto}`);

let booleano = genericFunction<boolean>(true)
console.log(`Ejemplo de uso con tipo boolean: ${booleano}`);