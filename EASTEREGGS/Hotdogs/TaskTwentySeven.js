const prompt = require("prompt-sync")();

let dNum = parseInt(prompt("Enter integer:"));
[2, 3, 5, 7].forEach(d => console.log(`${dNum} is divisible by ${d}: ${dNum % d === 0}`));


