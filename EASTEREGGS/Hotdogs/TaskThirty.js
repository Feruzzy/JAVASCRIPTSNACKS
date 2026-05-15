const prompt = require("prompt-sync")();

let secondsInput = parseInt(prompt("Enter seconds:"));
let hrs = Math.floor(secondsInput / 3600);
let mins = Math.floor((secondsInput % 3600) / 60);
let secs = secondsInput % 60;
console.log(`${hrs} hours, ${mins} minutes, ${secs} seconds`);
