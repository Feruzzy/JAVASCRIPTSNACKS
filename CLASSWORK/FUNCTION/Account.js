const account = {
    accountName: "David", 
    balance: 500
};

function checkBalance(account) {
    return account.balance < 1000 ? "Low Balance" : "Sufficient Balance";
}

