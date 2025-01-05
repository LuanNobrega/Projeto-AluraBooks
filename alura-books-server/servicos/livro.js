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

module.exports = { getTodosLivros, getLivroPorId }