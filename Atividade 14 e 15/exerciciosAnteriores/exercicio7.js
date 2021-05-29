const http = require('http')

const server = http.createServer((req, res) => {
    const opcao = req.url
    if (opcao === 'historia')
        res.end('<html><body>história da fatec sorocaba</body></html>')
    else if (opcao === 'cursos')
        res.end('<html><body>cursos da fatec sorocaba</body></html>')

})

server.listen(3000)