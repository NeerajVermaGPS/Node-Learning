const https = require("node:https")

const ITERATIONS = 5;
const start = Date.now()
for (let index = 0; index < ITERATIONS; index++) {
    https.request("https://www.google.com/", (res)=>{
        res.on("data", ()=>{})
        res.on("end", ()=>{
            console.log("Time taken: ", Date.now() - start)
        })
    })
    .end()
}