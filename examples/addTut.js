// Imports for method 1 and 2
// const add = require("../CJS-Modules/add")
// console.log(add(1, 3))

// Imports for method 3
// const math = require("../CJS-Modules/add")
// console.log(math.add(1, 2))
// console.log(math.subtract(3, 2))

// Or another method to import for method 3 and 3.1
// const { add, subtract } = require("../CJS-Modules/add")
// console.log(add(1, 2))
// console.log(subtract(3, 2))

// Import for method 3.2, 4 and 5
const { add, sub } = require("../CJS-Modules/add")
console.log(add(1, 2))
console.log(sub(3, 2))