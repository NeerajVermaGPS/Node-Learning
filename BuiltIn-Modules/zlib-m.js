const fs = require("node:fs")
const zlib = require("node:zlib")

const gzip = zlib.createGzip()
const readableStream = fs.createReadStream("./examples/greet.txt", {encoding: "utf-8"})

readableStream.pipe(gzip).pipe(fs.WriteStream("./examples/new.txt.gz"))