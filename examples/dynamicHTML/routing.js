const http = require("node:http")

const port = 3000

const server = http.createServer((req, res)=>{
    if(req.url === "/") {
        res.writeHead("200", {"Context-Type":"text/plain"})
        res.end("Home Page")
    } else if(req.url === "/about") {
        res.writeHead("200", {"Context-Type":"text/plain"})
        res.end("About Page")
    } else if(req.url === "/more") {
        res.writeHead("200", {"Context-Type":"text/plain"})
        res.end("More Page")
    } else {
        res.writeHead("404", {"Context-Type":"text/plain"})
        res.end("Error 404")
    }
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})