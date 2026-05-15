const prompt = require("prompt-sync")();

let side = parseFloat(prompt("Enter side length:"));
let triangleArea = (Math.sqrt(3) / 4) * Math.pow(side, 2);
console.log(`Area: ${triangleArea.toFixed(4)}`);

