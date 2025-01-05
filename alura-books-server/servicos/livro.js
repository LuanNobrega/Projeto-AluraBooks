const fs = require("fs")

function getTodosLivros () {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId (id) {
    //Buscar a lista de livros no banco de dados
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    //Filtrar a lista atravez dos parametros que a gente quer
    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro (livroNovo) {
    //Buscar a lista de livros no banco de dados
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    //Adicionar o novo livro na lista
    const novaListaDeLivros = [...livros, livroNovo]
    
    //sobescrevendo a lista antiga de livros com a lista nova
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros)
    )
}

module.exports = { getTodosLivros, getLivroPorId, insereLivro }