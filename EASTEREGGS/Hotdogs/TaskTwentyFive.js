const prompt = require("prompt-sync")();

let w1 = parseFloat(prompt("Weight 1:"));
let p1 = parseFloat(prompt("Price 1:"));
let w2 = parseFloat(prompt("Weight 2:"));
let p2 = parseFloat(prompt("Price 2:"));
if ((p1 / w1) < (p2 / w2)) console.log("Package 1 has a better price.");
else console.log("Package 2 has a better price.");


