let d1 = parseFloat(prompt("Enter first double:"));
let d2 = parseFloat(prompt("Enter second double:"));
console.log(`Larger: ${Math.max(d1, d2)}, Smaller: ${Math.min(d1, d2)}`);
console.log(`Sum: ${d1 + d2}, Difference: ${d1 - d2}, Product: ${d1 * d2}`);
if (d2 !== 0) console.log(`Quotient: ${d1 / d2}`);
else console.log("Quotient: Division by zero error.");           
