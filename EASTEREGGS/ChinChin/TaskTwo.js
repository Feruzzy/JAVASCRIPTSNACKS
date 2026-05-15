let month = parseInt(prompt("Enter month (1-12):"));
let year = parseInt(prompt("Enter year:"));
let days = new Date(year, month, 0).getDate(); 
console.log(`Month ${month} of year ${year} has ${days} days.`);


