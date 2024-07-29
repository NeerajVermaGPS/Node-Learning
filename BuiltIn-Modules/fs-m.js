const fs = require("node:fs")

// const data = fs.readFileSync("./BuiltIn-Modules/event-m.js", "base64")
// console.log(data)

// fs.readFile("./BuiltIn-Modules/event-m.js", "utf-8", (error, data) => {
//     error ? console.log(error.message) : console.log(data)
// })

fs.writeFileSync("./examples/greet.txt", "Hello Madam!")

fs.writeFile("./examples/greet.txt", " Hello Madam 2!", {flag: "a"},(err) => {
    err ? console.log(err) : console.log("File written!")
})