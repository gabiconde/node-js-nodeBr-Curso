const { obterPessoa } = require('./service')

// const jaja = {
//     nome: 'gabi',
//     idade: 21
// }
//destructing
// const { idade, nome } = jaja
// console.log(nome, idade)

Array.prototype.meuFilter = function(callback){
    const lista = []
    for(item of this){
        const result = callback(item, this)
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main(params) {
    try {
        //traz somente o results de dentro do pessoas
        const { results } = await obterPessoa('a')
        // const familiaLars = results.filter(function(item){
        //     // // por padrão precisa retornar um boolean
        //     // para informar se deve retirar ou manter na lista 
        //     // false> remove true> mantem 
        //     // encontrou = posicaoNoArray
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })
        const familiaLars = results.meuFilter(
            //callback
            (item, lista) => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
    } catch (error) {
        console.error(`Deu ruim ${error}`)
    }
}
main()
