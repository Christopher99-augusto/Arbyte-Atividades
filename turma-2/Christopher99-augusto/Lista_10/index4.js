let rs = require('readline-sync')
class Carro {
    constructor(){
        this.marca = rs.question("Digite o marca do seu carro: \n")
        this.modelo = rs.question("Digite o modelo do seu veiculo: \n")
        this.cor = rs.question("Digite a cor do seu veiculo: \n")
    }
}
let carro = new Carro

let carroDois = new Carro

let carroTres = new Carro

    if(carro.marca == carroDois.marca && carro.modelo == carroDois.modelo && carroTres.marca == carro.marca){
        
        console.log("Os dois carros são iguais.")
    }
    else{
        console.log("Os carros são diferentes.")
    }