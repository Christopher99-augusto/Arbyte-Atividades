let rs = require('readline-sync')

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2});
}

let usuario = {
    nome: 'Chrsitopher',
    login: 'chris',
    senha: 'funciona'
}

let produtos = {
    carros: ['1 - Ds3 1.6 turbo forjado tudo que da 500cv', '2 - Suzuki Swift 1.4 supercharger forjado tudo que da 470cv', '3 - Evo 6 2.0 turbo forjado tudo que da 600cv ', '4 - Colt 1.6 turbo forjado tudo que da 380cv', '5 - Marrua MWM 2.8 turdo disel forjado tudo que da 690cv'],
    precos: [62000, 58000, 500000, 26000, 169000]
}

let login = rs.question('Login: ')
let senha = rs.question('senha: ')

if(login === usuario.login && senha === usuario.senha){
    console.log('USUÁRIO LOGADO')
}else {
    console.log('LOGIN/SENHA INCORRETOS')
    return
}

let opcao = rs.questionInt('Digite 1 para ver a lista de carros ou 2 para sair: ')
while(opcao > 2 || opcao < 1){
    opcao = rs.question('Opção inválida. Digite 1 para ver a lista de carros ou 2 para sair: ')
}
if(opcao === 1){
    console.log(produtos.carros.join('\n'))
}else{
    return
}
let opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')

while(opcao2 > 5 || opcao2 < 1){
    console.log('Opção inválida. Tente novamente')
    opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')

}

console.log(`Você selecionou ${produtos.carros[opcao2 - 1].slice(3)} no valor de R$${formatarValor(produtos.precos[opcao2 - 1])}.`)

let opcao3 = rs.questionInt('Digite 1 para confirmar a compra, 2 para retornar para a lista de carros ou 3 para sair: ')

while (opcao3 > 3 || opcao3 < 1){
    console.log('Opção inválida. Tente novamente')
    opcao3 = rs.questionInt('Digite 1 para confirmar a compra, 2 para retornar para a lista de carros ou 3 para sair: ')

}

while(opcao3 === 2){
    console.log(produtos.carros.join('\n'))
    
    let opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')
    
    while(opcao2 > 5 || opcao2 < 1){
        console.log('Opção inválida. Tente novamente')
        opcao2 = rs.questionInt('Selecione qual carro deseja conferir o valor: ')
    }
    
    console.log(`Você selecionou ${produtos.carros[opcao2 - 1].slice(3)} no valor de ${formatarValor(produtos.precos[opcao2 - 1])}.`)
    
    let opcao3 = rs.questionInt('Digite 1 para confirmar a compra, 2 para retornar para a lista de carros ou 3 para sair: ')



    if(opcao3 === 1){
        console.log(`Parabéns pela compra ${usuario.nome}!\nVocê acabou de adiquirir um ${produtos.carros[opcao2 - 1].slice(3)}.`)
        return
    }else if (opcao3 === 3){
        return
    }else{
        console.log('Opção inválida. Tente novamente')
    }
}

if(opcao3 === 1){
    console.log(`Parabéns pela compra ${usuario.nome}!\nVocê acabou de adiquirir um ${produtos.carros[opcao2 - 1].slice(3)}.`)
}