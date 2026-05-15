const prompt = require("prompt-sync")();

let sqMeters = parseFloat(prompt("Enter square meters:"));
console.log(`${sqMeters} square meters is ${sqMeters * 0.3025} ping`);


