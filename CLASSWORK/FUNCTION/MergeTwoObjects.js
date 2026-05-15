const personal = { 
    name: "Kemi", 
    age: "27", 
};

const professional = { 
    role: "Designer", 
    company: "TechCorp",
    ...personal 
};


console.log(professional)
