const fechaHoy = new Date()

const fechaNacimiento = new Date("05 Marzo 1987")

let fechasComp = (fechaHoy.getTime > fechaNacimiento.getTime)

const diaNacimiento = fechaNacimiento.getDay()

const mesNacimiento = fechaNacimiento.getMonth() + 1

const yearNacimiento = fechaNacimiento.getFullYear()

console.log(yearNacimiento);
