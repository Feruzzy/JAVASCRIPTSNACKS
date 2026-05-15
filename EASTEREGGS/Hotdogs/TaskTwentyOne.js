const prompt = require("prompt-sync")();

let qa = parseFloat(prompt("Enter a:"));
let qb = parseFloat(prompt("Enter b:"));
let qc = parseFloat(prompt("Enter c:"));
let discriminant = Math.pow(qb, 2) - (4 * qa * qc);
if (discriminant > 0) {
    let r1 = (-qb + Math.sqrt(discriminant)) / (2 * qa);
    let r2 = (-qb - Math.sqrt(discriminant)) / (2 * qa);
    console.log(`Two roots: ${r1.toFixed(4)}, ${r2.toFixed(4)}`);
} else if (discriminant === 0) {
    console.log(`One root: ${(-qb / (2 * qa)).toFixed(4)}`);
} else {
    console.log("No real roots.");
}


