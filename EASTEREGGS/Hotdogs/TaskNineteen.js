const prompt = require("prompt-sync")();

let investment = parseFloat(prompt("Investment amount:"));
let annualInt = parseFloat(prompt("Annual interest rate (%):")) / 100;
let invYears = parseInt(prompt("Number of years:"));
let futureVal = investment * Math.pow((1 + (annualInt / 12)), (invYears * 12));
console.log(`Future value: $${futureVal.toFixed(2)}`);

