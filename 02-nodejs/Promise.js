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
 
 var usuarioPromise = obterUsuario()
 // utilizar .then() para pegar resultados 
 // utilizar .catch() para tratar erros  
 
 usuarioPromise.then(function(resultado){
     return obterTelefone(resultado.id)
     .then( function(telefone){
         return {
             usuario:{
                 nome: resultado.nome,
                 id: resultado.id
             },
             Telefone: telefone   
         }
     })
 })
 .then(function (resultado){
     const endereco = obterEnderecoAsync(resultado.usuario.id)
     return endereco.then(function(result){
         return {
             usuario: resultado.usuario,
             telefone: resultado.Telefone,
             endereco: result
         }
     })
 })
 .then(function(resultado){ //resultado == o que vem da promise
     console.log(`
     Nome: ${resultado.usuario.nome}
     Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
     Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
     `)
 })
 .catch(function(error){
     console.error("Deu pau --", error)
 });