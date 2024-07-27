const superhero = require("../CJS-Modules/mCaching")

console.log(superhero.getName())
superhero.setName("Batman")
console.log(superhero.getName())

const superhero2 = require("../Modules/mCaching")
console.log(superhero2.getName()) // Prints Batman instead of Madam because of module caching(as we are calling the same instance again which have same reference as that of earlier one)

// const batman = new superhero("Batman")
// console.log(batman.getName())

// const spiderman = new superhero("Spiderman")
// console.log(spiderman.getName()) // Prints Superman because here we are calling the new instance which have same class but different reference as that of earlier one