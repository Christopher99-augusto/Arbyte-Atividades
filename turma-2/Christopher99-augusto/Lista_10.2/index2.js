function random(max) {
    return Math.random() * max;
  }
  setTimeout(() => {
    
    let numeroAleatorio = parseInt(random(10))
     console.log("Número aleatório: " + numeroAleatorio)
    
    if (numeroAleatorio % 2 === 0) {
      resolve("Número deu par, imagem baixada")
    } else { console.log('erro')
      reject("Número deu ímpar, simulando um erro")
    }
  }, random(3000))
  console.log('imagem baixada')

const rs = require('readline-sync');
function random (max){
    Math.random() * max
}
function opcaoProduto (produto){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Você comprou um(a) ${produto}!`);
        }, random(10000))
    })
}
class Usuario {
    constructor (){
        this.nome = rs.question('Digite seu nome: ')
    }
    mercado (){
        console.log(`Bem vindo ao supermercado ${this.nome}!\n`);
        console.log('[1] - Maçã.');
        console.log('[2] - Carne.');
        console.log('[3] - Refrigerante.');
        let opcao = rs.questionInt('\nEscolha o que deseja comprar: ')
            switch(opcao){
                case 1:
                    opcao = 'Maçã'
                    break;
                case 2:
                    opcao = 'Carne'
                    break;
                case 3: 
                    opcao = 'Refrigerante'
                    break;
            }
        console.log('Compra em processamento...');
        opcaoProduto(opcao)
            .then(res => {
                console.log(res);
                console.log(`Compra realizada com sucesso!`);
            })
            .catch(err => {
                console.log(err);
                console.log('Ocorreu uma falha na sua compra!');
            })
    }
}
let user = new Usuario()
user.mercado()

class Produto {
    constructor(nome) {
        this.nome = nome;
    }
}
const produtoEscolhido = new Produto('farinha');
const produtoEscolhido1 = new Produto('arroz');
const produtoEscolhido2 = new Produto('feijão');
const listaDeProdutos = [produtoEscolhido, produtoEscolhido1, produtoEscolhido2];
function random(max) {
    return Math.random() * max;
}
function EscolhaDoProduto() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let numeroAleatorio = parseInt(random(listaDeProdutos.length - 1))
            try {
                let produtoAleatorio = listaDeProdutos[numeroAleatorio]
                resolve(`O produto escolhido é: ${produtoAleatorio.nome}`)
            } catch (error) {
                reject('erro, tente novamente')
            }
        }, random(1000))
    })
}
function Compra() {
    console.log('Início da compra')
    EscolhaDoProduto()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        });
    console.log('Finalização da compra')
}
Compra()