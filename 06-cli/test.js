const {
    deepEqual,
    ok
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de herois', () => {
    //it comeca com o objetivo
    it('Deve pesquisar herois usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR

        //colocar o resultado entre colchetes traz a primeira posição do array
        //[posicao1, posicao2] = await .... / se nao tiver o 2 vem null ----> destructor
        const [resultado] = await database.listar(expected.id)

        //deepEqual compara tudo, espera que sejam identicos
        deepEqual(resultado, expected)

        // o ok valida apenas se é true ou não
        //ok(resultado, expected)
    })

    // it('deve cadastrar um heroi usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR

    //     ok(null, expected)
    // })
})