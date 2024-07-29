const EventEmitter = require("node:events")

class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
        this.on("order", (size, toppings) => {
            console.log(`Your ${size} pizza with ${toppings} is ready!`)
        })
        this.on("order", size => {this.serveDrink(size)})
    }

    order(){
        this.emit("order", "large", "mushrooms")
        this.orderNumber++
    }

    serveDrink(size) {
        if(size === "large") {
            console.log("Serving complementry drink!")
        }
    }

    getOrderNumber() {
        console.log(`Your order number is: ${this.orderNumber}`);
    }
}

module.exports = PizzaShop