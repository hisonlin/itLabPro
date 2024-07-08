const numbers = [9,8, 7, 6, 5, 4, 3, 2, 1, 0];

//map
//it returns a new array
//it makes a copy
//it does not change the original array
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//forEach
//it does not return anything
//it does not make a copy
//it does not change the original array
//mostly used to update the external state
numbers.forEach((number) => console.log(number));

//filter
//it returns a new array
//it makes a copy
//it does not change the original array
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

//reduce
//it returns a single value
//it does not make a copy
//it does not change the original array
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum);

//find
//it returns the first element that satisfies the condition
//it does not make a copy
//it does not change the original array
const number = numbers.find((number) => number > 5);
console.log(number);

//findIndex
//it returns the index of the first element that satisfies the condition
//it does not make a copy
//it does not change the original array
const index = numbers.findIndex((number) => number > 5);
console.log(index);

//sort
//it changes the original array
//it does not make a copy
//it returns the sorted array
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

//classwork
const shoppingCart = [
    { name: 'Shirt', price: 25 },
    { name: 'Jeans', price: 50 },
    { name: 'Shoes', price: 80 },
    { name: 'Hat', price: 15 },
];
//forEach
let total=0;
shoppingCart.forEach((item) => total += item.price);
console.log(total);

const myObject = {a:1, b:2, c:3};
console.log(Object.entries(myObject));
Object.entries(myObject).forEach(([key, value]) => console.log(key, value));
console.log(Object.keys(myObject));
Object.keys(myObject).forEach((key) => console.log(key));

//classwork2
const people = [
    { name: "Tom", age: 21 },
    { name: "Kate", age: 37 },
    { name: "Bim", age: 13 },
    { name: "Jack", age: 37 },
];

//sort by age, ascending
people.sort((a, b) => a.age - b.age);
console.log(people);
//sort by age, descending
people.sort((a, b) => b.age - a.age);
console.log(people);

//sort by name
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
//other way
people.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(people);

// push(), pop(), shift(), unshift(), splice(), concat(), slice(), join(), indexOf(), find(), findIndex(), every(), some(),
// forEach(), map(), filter(), sort(),  reduce(),