function createPromise(num, timeout) {
    let promise = new Promise((resolve, reject) => {
        let value = num;
    
        setTimeout(() => {
            if (value > 10) {
                resolve("Value is greater than 10!")
            } else {
                reject(new Error("Value is not greater than 10!"))
            }
        }, timeout);
    })

    return promise
}

module.exports = createPromise