const account = {
    balance: "500",
    isBlocked: "false",
};

if(account.isBlocked == false){
console.log("Account is not blocked")
}

else if(account.balance < 100){
console.log("Low balance")
}

else{
console.log("Ok")
}
