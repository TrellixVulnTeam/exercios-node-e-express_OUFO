const http = require('http')
const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':"text/html"})
    res.end('<h1>Acho que não vai dar certo</h1>')
})

const port = 2333
server.listen(port,function () {
    console.log('escutando a porta 2333')
})