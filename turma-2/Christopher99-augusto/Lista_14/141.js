const axios = require('axios')
const rs = require('readline-sync')
function listaTodosProdutos() {
  axios.get('http://localhost:3000/produtos')
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
       let produtoEscolhido = rs.questionInt("Qual produto você quer?")
       listaProduto(produtoEscolhido)
    })
}
function listaProduto(produtoEscolhido) {
  const url = 'http://localhost:3000/produtos' + "/" + produtoEscolhido
  console.log("Quero acessar a url " + url)
  axios.get(url)
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
}
function criaNovoProduto(nome, descricao, preco, categoria) {
  axios.post("http://localhost:3000/produtos", {
    "nome": nome,
    "descricao": descricao,
    "preco": preco,
    "categoria_id": categoria,
    "peso": 1000
  })
  .then(respostaDaApi => {
    console.log(respostaDaApi.data)
  })
}
function atualizaTodasInformacoesDoProdutoExistente(id, nome, descricao, preco, categoria) {
  axios.put("http://localhost:3000/produtos/" + id, {
    "nome": nome,
    "descricao": descricao,
    "preco": preco,
    "categoria_id": categoria,
    "peso": 1000
  })
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
}
function atualizaParteDasInformacoesProdutoExistente(id, descricao) {
  axios.patch("http://localhost:3000/produtos/" + id, {
    "descricao": descricao
  })
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
}
function deletarProduto(id) {
  axios.delete("http://localhost:3000/produtos/" + id)
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
      console.log("DELETADO")
    })
}

listaTodosProdutos()
