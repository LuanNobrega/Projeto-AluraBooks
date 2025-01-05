const express = require("express")
const rotaLivro = require("./rotas/livro")

//Criando a aplicação express
const app = express()

//Para usar textos do tipo JSON
app.use(express.json())

//Criando a rota
const port = 8000

//Ao acessar o endereço /livros, estaremos nos referindo à rotaLivro
app.use('/livros', rotaLivro)

//Escutar as respostas que ela recebe nessa porta
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})