const prompt = require("prompt-sync")();

let digitNum = parseInt(prompt("Enter an integer (0-1000):"));
let sum = (digitNum % 10) + (Math.floor(digitNum / 10) % 10) + (Math.floor(digitNum / 100) % 10) + Math.floor(digitNum / 1000);
console.log(`Sum of digits: ${sum}`);


