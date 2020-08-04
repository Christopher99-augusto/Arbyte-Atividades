ro sala 2 por favor quando puder

Fabio Pegoraro  20h46
const axios = require('axios')
const rs = require('readline-sync')
class Usuario{
        constructor(nome, episodio){
        this.nome = nome
        this.episodio = episodio
        }
}
let usuario = new Usuario('Fabio', rs.question('Digite aqui o numero do Episódio: '))
function buscaEpisodio(episodio){
        console.log(`Buscando informações do episodio: ${episodio}...`  )
        const url = 'https://www.breakingbadapi.com/api/episodes/'
        let urlComEpisodio = 'https://www.breakingbadapi.com/api/episodes/' + episodio
        console.log(urlComEpisodio)
axios.get(urlComEpisodio)
        .then(respostaCerto => {
                console.log("Resposta da API...")
                console.log("Titulo do Episódio " + respostaCerto.data)
      })
        .catch(respostaERRO => {
                console.log(`Numero errado: ${respostaERRO}`)
      })
}
buscaEpisodio(usuario.episodio)