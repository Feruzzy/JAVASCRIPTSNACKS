const prompt = require("prompt-sync")();

let s1 = parseFloat(prompt("Side 1:"));
let s2 = parseFloat(prompt("Side 2:"));
let s3 = parseFloat(prompt("Side 3:"));
if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
    if (s1 === s2 && s2 === s3) console.log("Equilateral");
    else if (s1 === s2 || s1 === s3 || s2 === s3) console.log("Isosceles");
    else console.log("Scalene");
} else console.log("Invalid triangle.");


