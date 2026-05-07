const prompt = require("prompt-sync")();



    const id = Number(prompt("What is your id? "))
    const available = Boolean(prompt("Is Available? "))
    const count = Number(prompt("How many books? "))
    const name = String(prompt("What is your name? ")) 
    const author = prompt("What is author name? ")


const ans = {

    id,
    available: available == "true",
    count,
    name,
    author,
    
    
}

console.log(ans)

