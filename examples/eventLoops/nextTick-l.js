console.log("Console 1")

process.nextTick(()=>{
    console.log("N1")
})

process.nextTick(()=>{
    console.log("N2 Starts")
    process.nextTick(()=>{
        console.log("N3 in N2")
    })
    console.log("N2 Ends")
})

process.nextTick(()=>{
    console.log("N4")
})

console.log("Console 2")