/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/ 

function FuncionSinParametros(){
    return true
}
async function devuelvePromesa(){
    return setTimeout(()=>console.log("Hola soy una promesa"),5000)
}
console.log(devuelvePromesa)
function* idsPares(){
    let id = 0;
    while(true){
        id += 2
        yield id
    }
}
const ids = idsPares();
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)