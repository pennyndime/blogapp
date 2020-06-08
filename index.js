const http = require('http')
const server = http.createServer((req, res) =>{
    if(req.url === '/about')
        res.end('The About page')
    else if(req.url === '/contact')
        res.end('The Contact page')
    else if(req.url === '/')
        res.end('The Home page')
    else {
        res.writeHead(404)
        res.end('Page not found')
    }
})

server.listen(3000)
