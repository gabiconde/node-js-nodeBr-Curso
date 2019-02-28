const {readFile, writeFile} = require('fs')

const { promisify } = require('util')

//transforma em promise se estiver no padrão de callback
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
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

    async escreverArquivo(dados){
        await  writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true

    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        //concatenar jsons
        const heroiComId = {
            id,
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroiComId
        ]

        const resultado = await this.escreverArquivo(dadosFinal);
        return resultado;
    }

    async listar(id){
        const dados = await this.obterDadosArquivo()
        //filter deve receber um boolean
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }

    async remover(id){
        if(!id){
            return await this.escreverArquivo([])
        }
        const dados = await this.obterDadosArquivo()
        //passar uma função pro findIndex
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('O usuario informado não existe')
        }
        dados.splice(indice, 1)
        return await this.escreverArquivo(dados)

    }
}

module.exports = new Database()