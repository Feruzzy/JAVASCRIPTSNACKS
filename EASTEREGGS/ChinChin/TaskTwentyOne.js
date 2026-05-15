let aVal = parseFloat(prompt("Enter coefficient a:"));
let bVal = parseFloat(prompt("Enter coefficient b:"));
let cVal = parseFloat(prompt("Enter coefficient c:"));
if (aVal === 0) console.log("The equation has no unique solution.");
else console.log(`Solution x: ${(cVal - bVal) / aVal}`);


