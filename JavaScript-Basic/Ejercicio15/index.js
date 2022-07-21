const nombre = "Emilio"
const apellido = "Rinaudo"

const usuario1 = { nombre, apellido}

localStorage.setItem("usuario1", JSON.stringify (usuario1) )

console.log(JSON.parse(localStorage.getItem("usuario1")));


sessionStorage.setItem("usuario1", JSON.stringify (usuario1) )

console.log(JSON.parse(sessionStorage.getItem("usuario1")));

const now = new Date()

document.cookie = `usuario=${JSON.stringify(usuario1)};expires=${new Date(now.getTime() + 2 * 6000)}`