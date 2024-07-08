const array = [1, 2, 3, 4, 5];

//modify array
//add element to the end of the array
array.push(6);
console.log(array); //[1, 2, 3, 4, 5, 6]

//remove element from the end of the array
console.log(array.pop()); //6
console.log(array); //[1, 2, 3, 4, 5]

//remove element from the beginning of the array
console.log(array.shift()); //1
console.log(array); //[2, 3, 4, 5]

//add element to the beginning of the array
array.unshift(1);
console.log(array); //[1, 2, 3, 4, 5]

//remove element from the middle of the array
console.log(array.splice(2, 1)); //[3]
console.log(array); //[1, 2, 4, 5]

//add element to the middle of the array
array.splice(2, 0, 3);
console.log(array); //[1, 2, 3, 4, 5]

//slice array
console.log(array.slice(1, 3)); //[2, 3]
console.log(array); //[1, 2, 3, 4, 5]

//differences between slice and splice
//slice does not change the original array
//splice changes the original array

//concatenate arrays
const array2 = [6, 7, 8, 9, 10];
console.log(array.concat(array2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//spread operator
const array3 = [...array,11]
console.log(array3); //[1, 2, 3, 4, 5, 11]

//copy array
const array4 = array.slice();
console.log(array4); //[1, 2, 3, 4, 5]

//for of loop
for (const element of array) {
    console.log(element);
}

//forEach, +1 to each element, it does not return a new array
array.forEach((element, index, array) => {
    console.log(element +1);
});
console.log(array); //[1, 2, 3, 4, 5]

//map, +1 to each element, it returns a new array
const array5= array.map(element => element + 1);
console.log(array); //[1, 2, 3, 4, 5]
console.log(array5); //[2, 3, 4, 5, 6]

//filter, filter out elements that are greater than 3, it returns a new array
const array6 = array.filter(element => element >= 3);

console.log(array6); //[1, 2, 3, 4, 5]

//find, find the first element that is greater than 3
const element = array.find(element => element > 3);
console.log(element); //4

//findIndex, find the index of the first element that is greater than 3
const index = array.findIndex(element => element > 3);
console.log(index); //3

//reduce, sum of all elements
const sum = array.reduce((accumulator, element) => accumulator + element, 0);
console.log(sum); //15

//includes
console.log(array.includes(3)); //true


