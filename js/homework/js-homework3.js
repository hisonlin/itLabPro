//homework1
//1. Declare a variable called person and it is an object
//name:
//age:
//hobbies:[]
//introduction: function: A method that logs a message (Hi, my name is ... and I am ... years old. My hobbies are ...).

const person={
    name: "Hison",
    age: 33,
    hobbies: ["basketball", "coding", "watching movies"],
    introduction: function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. My hobbies are ${this.hobbies.join(", ")}.`);
    }
}

//2. Log the person object
console.log(person);
//3. Call the introduction method
person.introduction();
//4. Add a new key to the person object called favoriteFood with array value
person.favoriteFood=["pizza", "burger"];
//5. Log the person object
console.log(person);

//homework2
//Write a function to calculate inventory value
//Input: products, output: the total value of the inventory
const products=[
    {name:"Laptop", price: 800, quantity: 5},
    {name:"Smartphone", price: 700, quantity: 10},
    {name:"Headphones", price: 50, quantity: 49},

]

let totalValue=0;
for(let product of products){
    totalValue+=product.price*product.quantity;
}
console.log(totalValue);

//homework3
//Write a function findSubjectGrade, a subject as a parameter, the studentGrades object as a parameter
//if the subject exists in the object, return the grade of the subject, otherwise return "The subject is not found"

const studentGrades={
    math:90,
    science:85,
    history:75,
    literature:88
}

function findSubjectGrade(subject, student) {
    if (student.hasOwnProperty(subject)) {
        console.log(student[subject]);
    } else {
        console.log("The subject is not found");
    }
}

findSubjectGrade("math", studentGrades);