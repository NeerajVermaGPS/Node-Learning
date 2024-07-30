const http = require("node:http")
const fs = require("node:fs")

let request;
const server = http.createServer((req, res)=>{
    // const msg = {
    //     name: "Neeraj",
    //     message: "Hello Madam!"
    // }
    // res.writeHead(200, { "Content-Type": "text/plain"});
    // res.end("Hello Madam!")
    // res.writeHead(200, { "Content-Type": "application/json"});
    // res.end(JSON.stringify(msg))
    // res.writeHead(200, { "Content-Type": "text/html"});
    // res.end("<h1>Hello Madam</h1>")
    res.writeHead(200, { "Content-Type": "text/html"});
    fs.createReadStream("../examples/hw.html").pipe(res)
    // const html = fs.readFileSync("./examples/hw.html", "utf-8")
    // res.end(html)
})

server.listen(3000, ()=>{
    console.log(__dirname)
    console.log("Server is listening on port 3000!")
})