import chalk from 'chalk'
const color = chalk.bold.green

import { suma, multiplica } from "./controller.js"

let valor1 = suma(1, 2)
let valor2 = suma(4, 5)

let valorSumado = multiplica(valor1, valor2)

console.log(color(valorSumado));
