const EventEmitter = require('events')

class MeuEmissor extends EventEmitter{

}
const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

//vai ficar observando, quando receber o evento [nomeEvento] vai pegar a ação [(click)] e fazer alguma ação
meuEmissor.on(nomeEvento, function (click){
    console.log('um usuario clicou', click)

})


//----------------------------------------------------------------------- Emit
//criando um evento
// meuEmissor.emit(nomeEvento, 'na barra de rolagem')

// let count = 0
// setInterval(function (){
//     meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)


//----------------------------------------------------------------------- Stdin
const stdin = process.openStdin()
//irá aguardar evento -- [data] é interno do node
// fica esperando um evento especifico para tomar uma ação
stdin.addListener('data', (value) => {
    console.log(`Você digitou: ${value.toString().trim()}`)
})



/**
 *  -------------------------------------------- EXEMPLO DE MAL USO COM PROMISE
 * 
 * 
    function main(){
        return new Promise(function (resolve, reject){
            stdin.addListener('data', (value) => {
                return resolve(value)
            })
        })
    
    }
    main().then(function (resultado){
        console.log('Resultado - ',resultado.toString())
    })
 */