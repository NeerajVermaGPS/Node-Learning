const fs = require("node:fs")

// Without chunks
// const fs = require("node:fs/promises")
// const start = Date.now();
// fs.readFile("./examples/greet.txt", "utf-8")
// .then((data) => {
//     fs.writeFile("./examples/new.txt", data)
//     const end = Date.now();
//     console.log(`Execution time: ${end - start} ms`);
// })
// .catch((err) => {
//     console.log(err.message)
// })

// Using chunks
const readableStream = fs.createReadStream("./examples/greet.txt", {
    encoding: "utf-8",
    highWaterMark: 2
})
const writeableStream = fs.createWriteStream("./examples/new.txt")

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

//Using pipes
readableStream.pipe(writeableStream)