let weight = parseFloat(prompt("Enter package weight:"));
let cost;
if (weight <= 0) console.log("Invalid weight.");
else if (weight <= 2) cost = 2.5;
else if (weight <= 4) cost = 4.5;
else if (weight <= 10) cost = 7.5;
else if (weight <= 20) cost = 10.5;
else console.log("The package cannot be shipped.");
if (cost) console.log(`Shipping cost: $${cost}`);


