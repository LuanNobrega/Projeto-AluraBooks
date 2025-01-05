const { Router } = require("express")
const { getLivros } = require("../controladores/livro")
const { getLivro } = require("../controladores/livro")
const { postLivro } = require("../controladores/livro")
//Criando as rotas
const router = Router()

router.get('/', getLivros)

//Rota para pesquisar por um Id diferente. 
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})

module.exports = router