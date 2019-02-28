const {readFile} = require('fs')

const { promisify } = require('util')

//transforma em promise se estiver no padrão de callback
const readFileAsync = promisify(readFile)

//outra forma de obter dados do json é só utilizar o require('./herois.json)

class Database {
    //atributos
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }



    //metodos
    //Passar o async para utilizar o await com promise

    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())

    }
    escreverArquivo(){

    }
    async listar(id){
        const dados = await this.obterDadosArquivo()
        //filter deve receber um boolean
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()