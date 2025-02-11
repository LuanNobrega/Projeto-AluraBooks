const { getTodosLivros } = require("../servicos/livro")
const { getLivroPorId } = require('../servicos/livro') 
const { insereLivro } = require('../servicos/livro') 

function getLivros (req, res) {
    try{
        //lendo o arquivo livros.json
        const livros = getTodosLivros()
        res.send(livros)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }    
}

function getLivro (req, res) {
    try{
        //Identificar o Id que foi passado na URL
        const id = req.params.id
        //lendo o arquivo livros.json
        const livro = getLivroPorId(id)
        res.send(livro)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }    
}

function postLivro (req, res) {
    try{
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    }catch (error){
        res.status(500)
        res.send(error.message)
    }    
}

module.exports = { getLivros, getLivro, postLivro }