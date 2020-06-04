const {obterPessoas} = require('./service')

Array.prototype.meuFilte = function (callback) {
    const lista = []

    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if (!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main() {
    try {
        const { results } = await obterPessoas(`a`)

        const familiaLars = results.filter((item, index, lista) => {
          // por padrão precisa retornar um boolean
          // para informar se deve manter ou remover da lista
          // false -> remove da lista
          // true -> mantem na lista
          // não encontrou = -1
          // encontrou = posicaoNoArray
          console.log(`index: ${index}`, lista.length)
          return item.name.toLowerCase().indexOf(`lars`) !== -1
        })
        
        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error('DEU RUIM', error)
    }    
}
main()