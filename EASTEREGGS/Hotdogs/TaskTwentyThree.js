const prompt = require("prompt-sync")();

let palNum = prompt("Enter 3-digit integer:");
let isPal = palNum === palNum.split('').reverse().join('');
console.log(`Is palindrome: ${isPal}`);


