const prompt = require("prompt-sync")();

let prismSide = parseFloat(prompt("Enter side length:"));
let prismLength = parseFloat(prompt("Enter prism length:"));
let baseArea = (Math.sqrt(3) / 4) * Math.pow(prismSide, 2);
console.log(`Volume: ${(baseArea * prismLength).toFixed(4)}`);

