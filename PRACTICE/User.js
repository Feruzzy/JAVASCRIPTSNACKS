const person ={
    firstName: "Miracle",
    lastName: "Sharon",
    age: 56,
};


const user ={
    ...person,
    first_name: "Chinedu",
    last_name: "Femi",
    age_: 16,
    isValid_: false,
    ...person
};

//how to print only firstname
console.log(user.firstName)


//how to add gender
user.gender = "SheMale"
console.log(user)

//how to update age
user.age = 13;
console.log(user)

//how to delete
//delete user.age
//console.log(user)


const {age, isValid} = user;

console.log(age)
console.log(isValid)

 
