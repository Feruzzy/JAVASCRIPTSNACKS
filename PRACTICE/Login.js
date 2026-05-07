const prompt = require("prompt-sync")();

let age = prompt("What is your age? ");

if(!age){
    console.log("login")
}else{
        console.log("inValid input")
}
