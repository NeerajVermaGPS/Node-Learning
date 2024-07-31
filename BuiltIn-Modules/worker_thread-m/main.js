const http = require('http');
const { Worker } = require("node:worker_threads")

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, { "Content-Type" : "text/plain"})
        res.end("Home Page")
    } else if(req.url === "/slow-page") {
        const worker = new Worker("./worker.js")
        worker.on("message", (j)=>{
            res.writeHead(200, { "Content-Type" : "text/plain"})
            res.end("Slow Page" + j)
        })
    }
})

server.listen(8000, ()=>{
    console.log("Server listening on port 8000!")
})