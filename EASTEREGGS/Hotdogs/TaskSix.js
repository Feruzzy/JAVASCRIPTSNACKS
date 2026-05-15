const prompt = require("prompt-sync")();

let subtotal = parseFloat(prompt("Enter subtotal:"));
let gratuityRate = parseFloat(prompt("Enter gratuity rate (%):"));
let gratuity = subtotal * (gratuityRate / 100);
console.log(`Gratuity: $${gratuity.toFixed(2)}, Total: $${(subtotal + gratuity).toFixed(2)}`);


