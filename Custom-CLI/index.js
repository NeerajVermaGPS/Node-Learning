#!/usr/bin/env node

const { default: axios } = require("axios")
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule()

// requirements for command line argument processing
// const yargs = require('yargs');
// const { argv } = yargs(process.argv)   // console.log(process.argv)

function getJokes(category, n) {
    console.log(`\nHere are the ${n} joke from category ${category}:`)
    let arr = []
    for(let i = 0; i < n; i++) {
        const promise = axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        arr.push(promise)
    }
    Promise.all(arr)
        .then((res)=>{
            res.map((joke)=>{
                const jokes = joke.data.value
                console.log(jokes)
            })
        })
        .catch((err)=>{
            console.error(err.message)
        })
}

// calling functions to get --category from Command Line
// getJokes(argv.category)   // getJokes(process.argv[2])

prompt([{
    type: "input",
    name: "category",
    message: "Enter the joke category: "
},
{
    type: "input",
    name: "number",
    message: "Enter number of jokes you want: "
}]).then((ans) => {
    const category = ans.category
    const number = ans.number
    getJokes(category, number)
})