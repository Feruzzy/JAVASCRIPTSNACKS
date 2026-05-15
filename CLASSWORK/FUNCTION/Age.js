const prompt = require("prompt-sync")();


function person(){
 

if(age > 18 && age < 100){
    return "Adult";
}

else if(age > 10 && age <= 18){
    return "Teen";
}

else{
    return "Child";
}
}
const age = prompt("Enter your age: ")
console.log(person(27))
