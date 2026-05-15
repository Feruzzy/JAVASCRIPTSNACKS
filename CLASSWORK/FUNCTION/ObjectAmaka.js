const user = {
    name: "Amaka", 
    age: 25, 
    country: "Nigeria"
};

function extractUserMeta({ name, age }) {
    return "Name: ${name}, Age: ${age}";
}

