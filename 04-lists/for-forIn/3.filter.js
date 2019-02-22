const { obterPessoa } = require('./service')

// const jaja = {
//     nome: 'gabi',
//     idade: 21
// }
//destructing
// const { idade, nome } = jaja
// console.log(nome, idade)

async function main(params) {
    try {
        const { results } = await obterPessoa('a')
        const familiaLars = results.filter(function(item){
            // // por padrão precisa retornar um boolean
            // para informar se deve retirar ou manter na lista 
            // false> remove true> mantem 
            // encontrou = posicaoNoArray
            const result =item.name.toLowerCase().indexOf('lars') != -1
            return result
        })
    } catch (error) {
        console.error(`Deu ruim ${error}`)
    }
}
main()
