//Funciones por separado

let suma = (op1, op2) => {console.log(op1 + op2)};
let resta = (op1, op2) => {console.log(op1 - op2)};
let multiplicacion = (op1, op2) => {console.log(op1 * op2)};
let division = (op1, op2) => {console.log(op1 / op2)};
let cuadrado = (op1) => {console.log(Math.pow(op1,2))}


module.exports = {suma,resta,multiplicacion,division,cuadrado};