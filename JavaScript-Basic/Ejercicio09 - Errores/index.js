const logger = require('./logger');

const nombreCorrecto = nombre => {
    if (nombre === "Emilio"){
        return (`${nombre} es el nombre correcto`)
    } 
    throw new Error ("Nombre incorrecto")
}

const name = "Pepe";

try {
    const usuario = nombreCorrecto(name)
    console.log(usuario);
}catch (e) {
    console.error("ERROR!!!!");
    console.error(`${e}, ingrese otro nombre`);
}