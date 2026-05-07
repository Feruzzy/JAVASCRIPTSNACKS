const prompt = require("prompt-sync")();

const age = prompt("What is your age? ")

if(age > 0 && age <= 12){
console.log("He or she is a Child and he or she is " + age)
}

else if(age > 12 && age < 18){
    console.log("He or she is an Teenage and he or she is " + age)
}
else if(age >= 18){
    console.log("He or she is an Adult and he or she is " + age)
}
else{
    console.log("Invalid")
}
