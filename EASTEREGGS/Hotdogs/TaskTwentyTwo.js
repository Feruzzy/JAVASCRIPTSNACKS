const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Num 1:"));
let n2 = parseInt(prompt("Num 2:"));
let n3 = parseInt(prompt("Num 3:"));
let sorted = [n1, n2, n3].sort((a, b) => a - b);
console.log(`Sorted: ${sorted.join(", ")}`);


