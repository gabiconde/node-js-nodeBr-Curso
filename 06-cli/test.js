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
    before( async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })
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

    it('deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        // alterar o conteudo do jason 
        // const expected = {
        //     ...DEFAULT_ITEM_CADASTRAR,
        //     id: 2,
        //     nome: 'batman'
        // }
        console.log(expected)
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(actual, expected)
    })
    it('deve remover o heroi do arquivo', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(resultado, expected)
    })
})