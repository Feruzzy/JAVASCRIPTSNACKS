const prompt = require("prompt-sync")();

let waterMass = parseFloat(prompt("Water in kg:"));
let initTemp = parseFloat(prompt("Initial temp:"));
let finalTemp = parseFloat(prompt("Final temp:"));
let energyQ = waterMass * (finalTemp - initTemp) * 4184;
console.log(`Energy needed: ${energyQ} Joules`);


