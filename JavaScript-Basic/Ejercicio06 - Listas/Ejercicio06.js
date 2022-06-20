//Lista Compras
const listaCompra = ["huevo", "papas", "dentifrico", "cerveza", "jabon"]
listaCompra.push("Aceite de Girasol")
listaCompra.pop()

//LIsta Peliculas
const listaPeliculas = [
    {nombre: "inception", director: "Nolan", anio: 2010},
    {nombre: "Forest Gump", director: "Zemeckis", anio: 1994},
    {nombre: "Ted", director: "MacFarlane", anio: 2012},
]

const listaPeliculas_2 = listaPeliculas.filter(valor => valor.anio > 2010)

const listaDirectores = listaPeliculas.map(valor => valor.director)

const listaTitulos = listaPeliculas.map(valor => valor.nombre)

const listaTD = listaTitulos.concat(listaDirectores)

const listaTD2 = [...listaTitulos, ...listaDirectores]

console.log(listaTD);
