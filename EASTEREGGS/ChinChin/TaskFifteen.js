let threeDigitNum = parseInt(prompt("Enter a three-digit number:"));
let sumDigits = 0;
sumDigits += threeDigitNum % 10; // Last digit
sumDigits += Math.floor((threeDigitNum / 10) % 10); // Middle digit
sumDigits += Math.floor(threeDigitNum / 100); // First digit
console.log(`Sum of digits: ${sumDigits}`);


