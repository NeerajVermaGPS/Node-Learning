const EventEmmiter = require("node:events")

const emmiter = new EventEmmiter();

emmiter.on("first-event", (data) => {
    console.log(`Data fetched:\n${data.name}`)
})

let json = `{
    "name" : "Neeraj"
}`;

function fetchData() {
    emmiter.emit("first-event", JSON.parse(json))
}

fetchData()