let rs = require('readline-sync')
class Usuario {
  constructor() {
    this.nome = 'Chris'
    this.categoria = 'passageiro'
    this.email = 'c@computom.com'
    this.celular = '387142424'
    this.enderecoPrimario = 'Rua la da casa do crl'
    this.pagamento = 'VT'
  }
  solicitarNovaViagem(local, horario) {
    console.log(`Você vai de ${this.enderecoPrimario} para ${local} às ${horario}.`)
    this.editarEnderecoPrimario(local)
  }
  editarEnderecoPrimario(enderecoNovo) {
    console.log(`Seu local: ${this.enderecoPrimario} foi alterado por: ${enderecoNovo}`)
    this.enderecoPrimario = enderecoNovo
  }
  adicionarFormaDePagamento(pagamento) {
  }
}
let usuarioDeApp = new Usuario()
console.log("Bem vindo, " + usuarioDeApp.nome + "!")
console.log("O que você deseja fazer?")
console.log("[1] - Desejo solicitar nova viagem")
console.log("[2] - Desejo alterar meu endereço")
console.log("[3] - Desejo adicionar forma de pagamento")
let opcao = rs.questionInt(console.log("Escolha uma opção: "))
if (opcao === 1) {
  let local = rs.question("Qual o seu destino? ")
  let horario = rs.questionInt("Que horas? ")
  usuarioDeApp.solicitarNovaViagem(local, horario)
}
else {
  if (opcao === 2) {
    let enderecoNovo = rs.question('Qual o novo endereço?')
    usuarioDeApp.editarEnderecoPrimario(enderecoNovo)
  }
  else {

  }
}