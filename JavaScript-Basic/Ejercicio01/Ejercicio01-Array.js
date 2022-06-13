const listaPersonal = [4];

let nombre = "Mi nombre es Emilio";
let edad = "Mi edad es " + 35 + " años";
var dev = true;
const nacimiento = new Date (1987, 2, 5);
const dateBook = new Date (1845, 0, 29);
const book = ["El cuervo", "Edgar Allan Poe", dateBook, "https://es.wikipedia.org/wiki/El_cuervo_(poema)"];

listaPersonal [0] = nombre;
listaPersonal [1] = edad;
if (dev = true){
    listaPersonal [2] = "Soy un desarrollador";
} 
listaPersonal [3] = "Naci el " + nacimiento;
listaPersonal [4] = "Mi libro favorito es " + book;

console.log(listaPersonal);
