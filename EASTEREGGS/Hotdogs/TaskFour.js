const prompt = require("prompt-sync")();

let meters = parseFloat(prompt("Enter meters:"));
console.log(`${meters} meters is ${meters * 3.2786} feet`);
