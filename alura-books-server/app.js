const express = require("express")

//Criando a aplicação express
const app = express()

//Criando a rota
const port = 8000

//Criando as rotas
app.get('/', (req, res) => {
    res.send("Olá mundo")
})

//Escutar as respostas que ela recebe nessa porta
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})