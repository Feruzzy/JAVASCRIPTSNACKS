const product = {
    price: "1200",
    inStock:"True",
};

if(product.inStock == "false"){
console.log("out of stock")
}
else if(product.price > 1000){
console.log("Expensive")
}
else{
console.log("Affordable")
}
