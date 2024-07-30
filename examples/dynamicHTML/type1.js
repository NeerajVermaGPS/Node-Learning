const http = require("node:http")
const fs = require("node:fs")

const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200)
    let html = fs.readFileSync(__dirname + "/type1.html", "utf-8")
    html = html.replace("{{name}}", "Madam")
    res.end(html)
})

server.listen(port,()=>{
    console.log(`Server listening at ${port}!`)
})