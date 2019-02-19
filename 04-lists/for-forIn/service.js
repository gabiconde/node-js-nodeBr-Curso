const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function obterPessoa(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports ={
    obterPessoa
}




// obterPessoa('R2').then(function (resultado){
//     console.log('resultado', resultado)
// }).catch((error) => {
//     console.error('Deu Pau', error)
// })

