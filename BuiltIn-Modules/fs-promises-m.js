const fs = require("node:fs/promises")

// fs.readFile("./examples/greet.txt", "utf-8")
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err.message)
// })

async function readFile(){
    try {
        const data = await fs.readFile("./examples/greet.txt", "utf-8");
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

readFile()