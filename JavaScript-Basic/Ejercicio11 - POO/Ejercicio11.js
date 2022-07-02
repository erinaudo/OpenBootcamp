class Estudiante {
    _nombre
    _lista
    constructor (nombre, materia1, materia2, materia3){
        this._nombre = nombre
        this._lista = [materia1, materia2, materia3]
    }

    obtenDatos (){
        const estudiante = {
            nombre: this._nombre,
            lista: this._lista
        }
        console.log(estudiante); 
    }
}

const estudiante1 = new Estudiante ("EMilio Rinaudo", "Javascript", "HTML", "CSS")
estudiante1.obtenDatos()
