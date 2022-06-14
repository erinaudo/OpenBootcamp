let nombre = 'Emilio';
let apellido = 'Rinaudo';

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudiantesLength = estudiante.length;
console.log(estudiantesLength);

let nombrePrimerLetra = nombre[0];
console.log(nombrePrimerLetra);

let apellidoPrimerLetra = apellido.charAt(6);
console.log(apellidoPrimerLetra);

let estudianteSinEspacios = estudiante.replace(" ", "");
console.log(estudianteSinEspacios.length);

let boolean = estudiante.includes("Emilio");
console.log(boolean);

