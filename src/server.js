const express = require('express')
const server = express()
const nunjuncks = require('nunjucks')

const { pageLanding, pageStudy, giveClasses, saveClasses } = require('./pages')

//cinfiguração do nunjucks
nunjuncks.configure('src/views',{
    express: server,
    noCache: true
})
//configuração de arquivos estaticos (css,scripts,imagens)
//rotas da aplicação
server
.use(express.urlencoded({ extended:true }))
.use(express.static("public"))
.get('/', pageLanding)
.get("/study", pageStudy)
.get("/give-classes", giveClasses)
.post("/save-classes", saveClasses)
.listen(5500,console.log('Server rodando na porta 5500'))