let num12 = parseInt(prompt("Enter an integer:"));

console.log(`(a) Divisible by both 4 and 5: ${num12 % 4 === 0 && num12 % 5 === 0}`);

console.log(`(b) Divisible by 4 or 5: ${num12 % 4 === 0 || num12 % 5 === 0}`);

console.log(`(c) Divisible by 4 or 5 but not both: ${(num12 % 4 === 0) ^ (num12 % 5 === 0) ? true : false}`);


