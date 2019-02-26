//Reduzir o array em um unico resultado

const { 
    obterPessoa 
} = require('./service')


Array.prototype.meuReduce = function(callback, valorInicial){
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let i = 0; i <= this.length -1; i++){
        valorFinal = callback(valorFinal, this[i])
    }
    return valorFinal
}


async function main(){
try {
    const {results} = await obterPessoa('a')
    const pesos = results.map(item => parseInt(item.height))
    // [15.6, 8.2, 58.6] = 0
    // const total = pesos.reduce((anterior, proximo) => {
    //     return anterior + proximo
    // }, 0)
    const minhaLista = [
        ['gabi','haha'],
        ['Azul','Vermelho']
    ]
    const unicaLista = minhaLista.meuReduce((anterior, proximo) => {
        return anterior.concat(proximo)
    }, [])
    .join(',')

    const total = pesos.meuReduce((anterior, proximo) => {
        return anterior + proximo
    }, 0)



    console.log(unicaLista, total)


} catch (error) {
    console.error('Deu ruim', error)
    
}
}
main()