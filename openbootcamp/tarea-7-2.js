/*

*/

const datoPersonales = {
    nombre : "Nahuel",
    apellido: "Cellone",
    edad :22,
    altura : 184,
    eresDesarrolador : true,
}

const edad = datoPersonales.edad
const lista =[
     {
        ...datoPersonales
    },
    datospersonalesAmigo1 = {
        nombre : "Samuel",
        apellido: "Novillo",
        edad :21,
        altura : 170,
        eresDesarrolador : false,
    },
    datospersonalesAmigo1 = {
        nombre : "Alejo",
        apellido: "Grimaut",
        edad :20,
        altura : 160,
        eresDesarrolador : true,
    }
]
const edadesOrdenadas = lista.sort((a, b)=> b.edad - a.edad)
console.log(edadesOrdenadas)