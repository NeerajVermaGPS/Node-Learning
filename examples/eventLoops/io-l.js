const fs = require('node:fs');

setTimeout(()=>{
    console.log("ST1")
}, 0)

fs.readFile(__filename, ()=>{
    console.log("RF1")
})

fs.readFile(__filename, ()=>{
    console.log("RF2 Starts")
    fs.readFile(__filename, ()=>{
        console.log("RF3 in RF2")
    })
    console.log("RF2 Ends")
})

fs.readFile(__filename, ()=>{
    console.log("RF4")
})

process.nextTick(()=>{{
    console.log("N1")
}})

Promise.resolve().then(()=>{
    console.log("P1")
})