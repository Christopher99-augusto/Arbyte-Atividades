class usuario {
    constructor (nome, email, endereco, pagamento ){
        this.nome = nome
        this.email = email
        this.endereco = endereco
        this.pagamento = pagamento
    }
}
let
nome = "nome: Christopher Augusto"
email = "e-mail: chrisxixo13@gmail.com"
endereco = "endereço: Rua Silva Bueno"
pagamento = "pagamento: Cartão"

let usuario1 = new usuario (nome, email, endereco, pagamento)

console.log (usuario1.nome + '\n' + usuario1.email + '\n' + usuario1.endereco + '\n' + usuario1.pagamento)