let radius = parseFloat(prompt("Enter cylinder radius:"));
let heightCyl = parseFloat(prompt("Enter cylinder height:"));
let area = 2 * Math.PI * radius * (radius + heightCyl);
let volume = Math.PI * Math.pow(radius, 2) * heightCyl;
console.log(`Surface Area: ${area.toFixed(2)}, Volume: ${volume.toFixed(2)}`);


