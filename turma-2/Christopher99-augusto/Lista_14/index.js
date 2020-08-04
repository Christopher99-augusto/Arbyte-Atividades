const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://www.breakingbadapi.com/api/episodes/'



 let respostaUser = rs.question('Digite o Número do Ep: ')


api(respostaUser)
function api(respostaUser) {

    const urlComResposta = `https://www.breakingbadapi.com/api/episodes/${respostaUser}`  
    axios.get(urlComResposta)
        .then(res => {

            console.log(res.data[0].season)
            console.log(res.data[0].characters)





        .catch(err => {
        console.log(`Erro ${err}`)
        })

     


}