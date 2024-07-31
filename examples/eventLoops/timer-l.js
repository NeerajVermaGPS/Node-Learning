setTimeout(()=>{
    console.log("ST1")
}, 0)

setTimeout(()=>{
    console.log("ST2 Start")
    process.nextTick(()=>{
        console.log("N6 in ST2")
    })
    setTimeout(()=>{
        console.log("ST3 in ST2")
    }, 0)
    console.log("ST2 Ends")
}, 0)

setTimeout(()=>{
    console.log("ST4")
}, 0)

process.nextTick(()=>{
    console.log("N1")
})

Promise.resolve().then(()=>{
    console.log("P1")
})