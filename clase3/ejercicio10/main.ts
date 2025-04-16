// Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts, stringUtils.ts y user.ts. 
// Asegúrate de que todas las funciones se puedan importar desde utils/index.ts. 
// En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un 
// solo flujo de trabajo, mostrando todos los resultados en la consola.
import{
    add, 
    substract, 
    capitalize, 
    reverse, 
    createUser
} from './utils_index'

const sumas = add(8,5)
console.log(sumas);
const restas = substract(10, 5)
console.log(restas);
const mayuscula = capitalize("Giselle")
console.log(mayuscula);
const alReves = reverse("capicua")
console.log(alReves);
const newPerson = createUser("Pedro", 58)
console.log(newPerson);