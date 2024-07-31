const fs = require('node:fs');

setImmediate(()=>{
    console.log("SI1")
})

setImmediate(()=>{
    console.log("SI2 Starts")
    setImmediate(()=>{
        console.log("SI3 in SI2")
    })
    console.log("SI2 Ends")
})

setImmediate(()=>{
    console.log("SI4")
})

setTimeout(()=>{
    console.log("ST1")
}, 0)

fs.readFile(__filename, ()=>{
    console.log("RF1")
})

process.nextTick(()=>{{
    console.log("N1")
}})

Promise.resolve().then(()=>{
    console.log("P1")
})