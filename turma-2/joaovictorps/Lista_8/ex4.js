let rs = require('readline-sync')

let marca = rs.question('Qual a marca do carro ? \n >')
let cor = rs.question('Qual a cor do carro ? \n >')
let valor = rs.questionInt('Qual o valor do carro ? \n >')

let carro = {
    marca,
    cor,
    valor
}

console.log(carro)