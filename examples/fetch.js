const axios = require("axios")

// run http-m.js and then run this file
axios.get("http://localhost:3000/")
.then((resp)=>{
    console.log(resp.data)
})
.catch((err)=>{
    console.log(err)
})