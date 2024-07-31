const crypto = require("crypto")

// process.env.UV_THREADPOOL_SIZE = 5
const start = Date.now()
// const key1 = crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// const key2 = crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// console.log(key1.toString("base64"))
// console.log("Time: ", Date.now() - start)

const ITERATIONS = 5;
for (let i = 0; i < ITERATIONS; i++){
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, key) => {
        console.log("Time: ", Date.now() - start)
    });
}
