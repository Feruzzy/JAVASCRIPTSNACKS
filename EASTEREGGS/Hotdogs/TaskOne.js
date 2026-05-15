const prompt = require("prompt-sync")();

let miles = parseFloat(prompt("Enter miles:"));
console.log(`${miles} miles is ${miles * 1.6} kilometers`);
