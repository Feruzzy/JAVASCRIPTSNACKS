const prompt = require("prompt-sync")();

let dist = parseFloat(prompt("Distance to drive:"));
let efficiency = parseFloat(prompt("Miles per gallon:"));
let pricePerGal = parseFloat(prompt("Price per gallon:"));
console.log(`Trip cost: $${((dist / efficiency) * pricePerGal).toFixed(2)}`);
