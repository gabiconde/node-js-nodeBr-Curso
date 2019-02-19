/**
 * 0- Obter o usuario
 * 1- Obter o numero de telefone de um usuario a partir de seu Id
 * 2- Obter o enedereço do usuario pelo Id
 */

 //importar modulo interno do node.js
 const util = require('util')
 const obterEnderecoAsync =util.promisify(obterEndereco)
 
 function obterUsuario(){
     return new Promise((resolve, reject) => {
         setTimeout(function(){
            // return reject(new Error("Deu ruim"))
             return resolve({
                 id: 1,
                 nome: "Gabi",
                 dataNascimento: new Date()
             })
         }, 1000)
     })
 }
 
 function obterTelefone(idUsuario){
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             return resolve({
                 telefone: "11001234569",
                 ddd: 11
             })
         },2000)
     })
 
 }
 
 function obterEndereco(idUsuario, callback){
         setTimeout(() => {
             return callback(null, {
                 rua: 'dos bobos',
                 numero: 0
             })
         }, 2000)
 }
 
 /**
  * 1º adicionar a palavra async -> automaticamente ela retornara uma Promise
  * As funções chamadas já devem ser promise
  */
 
 main()
 async function main(){
     try{
         console.time("medida-promise")
 
         const usuario = await obterUsuario()
         // const telefone = await obterTelefone(usuario.id)
         // const endereco = await obterEnderecoAsync(usuario.id)
         const resultado = await Promise.all([
             obterTelefone(usuario.id),
             obterEnderecoAsync(usuario.id)
         ])
         const endereco = resultado[1]
         const telefone = resultado[0]
 
         console.log(`
             Nome: ${usuario.nome}
             Endereço: ${endereco.rua}, n° ${endereco.numero}
             Telefone: (${telefone.ddd}) ${telefone.telefone}
         `)
         console.timeEnd("medida-promise")

     } catch(error){
         console.error("Deu ruim ", error)
     }
 
 }
 