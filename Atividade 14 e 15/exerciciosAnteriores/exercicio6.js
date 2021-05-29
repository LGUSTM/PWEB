const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<html><body><p>site da fatec sorocaba</p></body></html>')
})

server.listen(3000)