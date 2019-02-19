/**
 * 0- Obter o usuario
 * 1- Obter o numero de telefone de um usuario a partir de seu Id
 * 2- Obter o enedereço do usuario pelo Id
 */

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null,{
            id: 1,
            nome: "Gabi",
            dataNascimento: new Date()
        })
    }, 1000)

}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: "11001234569",
            ddd: 11
        })
    },2000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
}

// Callback

obterUsuario((error, usuario) => {
    // null or "" or 0 == false
    if (error){
        console.error("Deu Ruim no usuario", error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1){
            console.error("Deu ruim no telefone ", error1)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if (error2){
                console.error("Deu Ruim no usuario", error2)
                return;
            }
            console.log(`
            Nome: ${usuario.nome}, 
            Endereço: rua ${endereco.rua} - ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
    
})

// const endereco = obterEndereco()