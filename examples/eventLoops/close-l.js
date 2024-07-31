const fs = require('fs');

const readableStream = fs.createReadStream(__filename)
readableStream.close()

readableStream.on("close", ()=>{
    console.log("RS1 Closed")
})

setTimeout(()=>{
    console.log("ST")
}, 0)

setImmediate(()=>{
    console.log("SI")
})

process.nextTick(()=>{
    console.log("N")
})

Promise.resolve().then(()=>{
    console.log("P")
})