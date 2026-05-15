let edge1 = parseFloat(prompt("Enter first edge length:"));
let edge2 = parseFloat(prompt("Enter second edge length:"));
if (edge1 !== edge2) {
    console.log(`Perimeter: ${2 * (edge1 + edge2)}`);
} else {
    console.log("Input is invalid (edges must be different lengths).");
}


