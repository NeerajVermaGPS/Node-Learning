let buffer = new Buffer.from("Neeraj")
// buffer = new Buffer.from("Neeraj Verma", "utf-8") // sometimes buffer will skip some of last letters due to lack of memory for buffer

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toString("utf-8"))
console.log(buffer.toString("hex"))
console.log(buffer.toString("base64"))
console.log(buffer.toJSON())