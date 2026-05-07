const prompt = require("prompt-sync")();

const name = String(prompt("What is your name: "))
const age = Number(prompt("What is your age: "))
const course = String(prompt("What is your course of study: "))



const student = {
    name,
    age,
    course,

};

console.log(student)
