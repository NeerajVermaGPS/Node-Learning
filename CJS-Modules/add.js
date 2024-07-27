// Different patterns and methods of import/export

// Method 1
// const add = (a, b) => a+b
// module.exports = add

// Method 2
// module.exports = (a, b) => a+b

// Method 3
// const add = (a, b) => a + b
// const sub = (a, b) => a - b
// module.exports = {
//     add,
//     subtract: sub //(Method 3.1)
//     // sub //(Method 3.2)
// }

// Method 4
module.exports.add = (a, b) => a + b
module.exports.sub = (a, b) => a - b

// Method 5(*Not Recommended)
// exports.add = (a, b) => a + b
// exports.sub = (a, b) => a - b