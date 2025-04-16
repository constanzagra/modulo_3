// Crea un módulo types.ts que contenga: 
// • Un tipo Person con las propiedades name y age. 
// • Una función createPerson(name: string, age: number): Person: devuelve un 
// objeto Person. 
// Exporta el tipo y la función como exportaciones nombradas. En main.ts, importa 
// el tipo y la función, crea una persona y muestra su información en la consola. 
type person = {name: string, age: number}

export function createPerson(name: string, age: number): person{
    return {name, age}
};