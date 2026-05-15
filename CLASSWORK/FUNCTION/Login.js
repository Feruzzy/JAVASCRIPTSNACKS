const prompt = require("prompt-sync")();

function login(){

const username = prompt("Enter username: ")
const password = prompt("Enter password: ")

let validusername = "Feruzzy"
let validpassword = "1234"

if(username == validusername && password == validpassword){
    return "Login Validated";
}

else{
    return "You input wrong Details";
}
}



console.log(login())

