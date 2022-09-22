/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/


let compras = ["pan", "leche" , "huevos", "harina", "carne"]
compras.push("aceite de girasol")//añadi un objeto
console.log(compras)
compras.pop()//saque el ultimo objeto
console.log(compras)
const peliculas = [
    {
        titulo: "El efecto mariposa",
        director: "Eric Bress",
        fecha: new Date(2004, 3, 30)
    },
    {
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 16)
    },
    {
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        fecha: new Date(1995, 0, 13)
    }
]

const peliculasNuevas = peliculas.filter(peliculas => peliculas.fecha > new Date(2010, 0, 1))
console.log(peliculasNuevas)

const directoresPeliculas = peliculas.map( peliculas => peliculas.director )
console.log(directoresPeliculas)

const titulosPeliculas = peliculas.map( peliculas => peliculas.titulo)
console.log(titulosPeliculas)

const titulosDirectores = directoresPeliculas.concat(titulosPeliculas);
const titulosDirectores2 = [...titulosPeliculas,...directoresPeliculas];

console.log(titulosDirectores)
console.log(titulosDirectores2)
