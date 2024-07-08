//1. string interpolation: `${}` backticks
let name = 'John';
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

//2.spread operator - array,object
//2.1 assign in array, object, does not make a copy
let names = ['John', 'Jane', 'Jack'];
let newNames = names;
console.log(newNames);
names[0] = 'Jim';
console.log(newNames);
//2.2 spread operator(...) - make an shallow copy
let names1 = ['John', 'Jane', 'Jack'];
let newNames1 = [...names1];
console.log(newNames1);
names1[0] = 'Jim';
console.log(newNames1);
//2.3 add new elements
let names2 = ['John', 'Jane', 'Jack'];
let newNames2 = [...names2, 'Jim'];
console.log(newNames2);

//spread operator in object
let person = {
    name: 'John',
    age: 25
};
let newPerson = {
    ...person,
    gender: "male"
};
console.log(newPerson);
person.city = 'New York';
//newPerson does not change
console.log(newPerson);
//update exiting property
let newPerson1 = {
    ...person,
    age: 30
};
console.log(newPerson1);
//remove property
let {city, ...newPerson2} = person;
console.log(newPerson2);
//delete person.city;

//remove element in array, splice or filter
let array = [1, 2, 3, 4, 5];
//splice
array.splice(2, 1);
console.log(array);//[1, 2, 4, 5]
//filter
let newArray = array.filter((item) => item !== 4);
console.log(newArray);//[1, 2, 5]

//add element in array, splice
array.splice(2, 0, 3);
console.log(array);//[1, 2, 3, 4, 5]

//unshift: add element at the beginning of the array
array.unshift(0);
console.log(array);//[0, 1, 2, 3, 4, 5]

//shift: remove element at the beginning of the array
array.shift();
console.log(array);//[1, 2, 3, 4, 5]

//if any of the properties are objects or arrays, they are copied by reference, not a new copy
let person1 = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'traveling']
};
let newPerson3 = {
    ...person1
};
person1.hobbies.push('swimming');
//newPerson3.hobbies also change
console.log(newPerson3);

// Use Stringify and Parse to make a deep copy
let person2 = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'traveling']
};
//Stringify converts an object to a string
//Parse converts a string to an object
let newPerson4 = JSON.parse(JSON.stringify(person2));
person2.hobbies.push('swimming');
//newPerson4.hobbies does not change
console.log(newPerson4);
//npm install lodash
//const _ = require('lodash');
//const deepCopy = _.cloneDeep(person2);

//arrow function: concise syntax, implicit return, better performance(map, filter, reduce)
//normal function, hoisting, you can call it before it is defined
function sum(a, b) {
    return a + b;
}

//function expression, not hoisting, you can not call it before it is defined
const sum1 = function (a, b) {
    return a + b;
};

//arrow function, not hoisting, you can not call it before it is defined
const sum2 = (a, b) => a + b;
//can omit the () if there is only one parameter
//can omit the {} and return if there is only one statement

//destruction:array, object
let phone = ['iPhone', 'Samsung', 'Nokia'];
let [firstPhone,...restOfPhone] = phone;
console.log(firstPhone);
console.log(restOfPhone);

let country = {
    name: 'USA',
    population: 300000000,
    capital: 'Washington D.C.'
};
let {capital,...restOfProperties}=country;
console.log(capital);
console.log(restOfProperties);

//Object property value shorthand
let name1 = 'John';
let age1 = 25;
let hobbies = ['reading', 'traveling'];
let person3 = {
    name1,
    age1,
    hobbies
};
console.log(person3);

