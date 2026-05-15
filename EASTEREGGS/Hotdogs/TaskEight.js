const prompt = require("prompt-sync")();

let totalMinutes = parseInt(prompt("Enter minutes:"));
let totalDays = Math.floor(totalMinutes / (60 * 24));
let years = Math.floor(totalDays / 365);
let remainingDays = totalDays % 365;
console.log(`${totalMinutes} minutes is approx ${years} years and ${remainingDays} days`);


