const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
function getInput(question) {
    let value;
    rl.question(question, name => {
        value = name;
    });
    rl.close();
    return value;
}

module.exports = getInput