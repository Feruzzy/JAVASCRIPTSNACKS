let twoDigit = parseInt(prompt("Enter a two-digit integer:"));
let tens = Math.floor(twoDigit / 10);
let units = twoDigit % 10;
if (tens > units) console.log("Tens digit is greater than units digit.");
else if (tens < units) console.log("Tens digit is less than units digit.");
else console.log("Tens digit is equal to units digit.");


