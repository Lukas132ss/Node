const moduloA = require('../../moludoA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, resp) => {
    resp.write('Bom dia!')
    resp.end()
}) .listen(8080)