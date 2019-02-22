const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for (let i = 0; i <= this.length - 1; i++){
        const resultado = callback(this[i], i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
}

async function main(){
    try{
        const results =  await  service.obterPessoa('a')
        // const names = []
        // results.results.forEach(nome => {
        //     names.push(nome.name)
        // });
// -------------------------------------------- map        
        // const names = results.results.map(function (pessoa){
        //     return pessoa.name;
        // })

// --------------------------------------------- map arrow function
        //const names = results.results.map(pessoa => pessoa.name)
        const names = results.results.meuMap(function(pessoa,indice){
            return `${indice} - ${pessoa.name}`
        })

        console.log(names)
    }catch(error){
        console.error(`Deu ruim ${error}`)
    }
}
main()