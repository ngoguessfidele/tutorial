const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Helloooo World!')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....')
})