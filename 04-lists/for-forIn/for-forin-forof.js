const service = require('./service')



async function main(){
    try{
        
        const response = await service.obterPessoa('a')
        const names = []
        // ------------------------------------------------ for
        console.time('for')
        for(let i=0; i <= response.results.length - 1; i++){
            const pessoa = response.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('for')

        //---------------------------------------------------- For in = o for, i é tipo um contador
        console.time('forIn')
        for(let i in response.results){
            names.push(response.results[i].name)
        }
        console.timeEnd('forIn')

        //------------------------------------------------------ For of
        console.time('forof')
        for(pessoa of response.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof')

        console.log('nomes', names)
        
    } catch(error){
        console.error('Deu ruim', error)
    }
}
main()


