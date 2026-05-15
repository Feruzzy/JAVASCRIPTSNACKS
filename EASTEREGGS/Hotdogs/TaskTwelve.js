const prompt = require("prompt-sync")();

let takeoffV = parseFloat(prompt("Take-off speed v:"));
let accelA = parseFloat(prompt("Acceleration a:"));
let runwayLength = Math.pow(takeoffV, 2) / (2 * accelA);
console.log(`Min runway length: ${runwayLength.toFixed(3)}`);
