const prompt = require("prompt-sync")();

let exRate = parseFloat(prompt("USD to RMB rate:"));
let mode = parseInt(prompt("0: USD to RMB, 1: RMB to USD:"));
let amount = parseFloat(prompt("Amount:"));
if (mode === 0) console.log(`${amount} USD is ${amount * exRate} RMB`);
else if (mode === 1) console.log(`${amount} RMB is ${amount / exRate} USD`);
else console.log("Invalid mode.");


