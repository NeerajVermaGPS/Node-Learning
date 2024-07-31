const http = require('http');
const cluster = require('cluster');
const os = require('os');

cluster.schedulingPolicy = cluster.SCHED_RR;

if(cluster.isPrimary) {
    console.log(`Master is running on ${process.pid}.`)
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker is running on ${process.pid}.`)
    const server = http.createServer((req, res) => {
        if(req.url === "/") {
            res.writeHead(200, { "Content-Type" : "text/plain"})
            res.end("Home Page")
        } else if(req.url === "/slow-page") {
            for(let i = 0; i < 6000000000; i++) {}
            res.writeHead(200, { "Content-Type" : "text/plain"})
            res.end("Slow Page")
        }
    })
    
    server.listen(8000, ()=>{
        console.log("Server listening on port 8000!")
    })
}