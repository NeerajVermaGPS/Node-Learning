console.log("Console message")

process.nextTick(()=>{
    console.log("nextTick message")
})

Promise.resolve().then(()=>{
    console.log("P1")
})

Promise.resolve().then(()=>{
    console.log("P2 Starts")
    process.nextTick(()=>{
        console.log("N5 in P2")
    })
    console.log("P2 Ends")
})

Promise.resolve().then(()=>{
    console.log("P4")
})