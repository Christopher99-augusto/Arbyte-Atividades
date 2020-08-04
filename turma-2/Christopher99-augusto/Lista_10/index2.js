let rs = require('readline-sync')

class usuario {
    constructor(){
        this.nome = rs.question("Qual o seu nome?")
        this.idade = rs.question("Qual sua idade?")
    }
}
const algumusuario = new usuario();

console.log(algumusuario)