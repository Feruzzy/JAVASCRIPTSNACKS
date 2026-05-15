const prompt = require("prompt-sync")();

let u = parseFloat(prompt("Initial velocity (u):"));
let t = parseFloat(prompt("Time span (t):"));
let a = parseFloat(prompt("Acceleration (a):"));
let distanceS = (u * t) + (0.5 * a * Math.pow(t, 2));
console.log(`Distance covered: ${distanceS}`);


