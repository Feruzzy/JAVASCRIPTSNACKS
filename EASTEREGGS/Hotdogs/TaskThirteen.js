const prompt = require("prompt-sync")();

let monthlySave = parseFloat(prompt("Monthly saving amount:"));
let monthlyRate = 0.003125;
let accountValue = 0;
for(let i = 1; i <= 6; i++) {
    accountValue = (monthlySave + accountValue) * (1 + monthlyRate);
    console.log(`Month ${i}: $${accountValue.toFixed(2)}`);
}

