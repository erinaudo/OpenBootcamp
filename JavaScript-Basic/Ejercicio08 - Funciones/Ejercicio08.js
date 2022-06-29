//Función sin parámetros
function alwaysTrue () {
    return true
}

console.log(alwaysTrue())

//Función asíncrona
async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

//Función generadora
function* parGenerator (){
    let id = 0;
    while (true){
        yield id += 2;
    }
}
