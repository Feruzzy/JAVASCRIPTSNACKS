const prompt = require("prompt-sync")();

let checkYear = parseInt(prompt("Enter year:"));
let isLeap = (checkYear % 4 === 0 && checkYear % 100 !== 0) || (checkYear % 400 === 0);
console.log(`Leap year: ${isLeap}`);


