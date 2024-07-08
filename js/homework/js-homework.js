//you can set initial value, if isWeekend or hasTime, at the same time, not raining, console.log("It is time to go out");
//otherwise, console.log("Maybe stay at home");

const isWeekend = true;
const hasTime = true;
const isRaining = true;

//(true || true) && false
if ((isWeekend || hasTime) && !isRaining) {
    console.log("It is time to go out");
} else {
    console.log("Maybe stay at home");
}

//even number from 0 to 50, and if the current even number is also divisible by 3 but not divisible by 12, console.log these numbers

for (let i = 0; i <= 50; i += 2) {
    if (i % 3 === 0 && i % 12 !== 0) {
        console.log(i);
    }
}

//use a for loop to create a triangle in js
//*
//**
//***
//****
//*****

for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}

//print scores backwards( use while loop)
const scores = [85,72,60,33]
let i = scores.length - 1;
while (i >= 0) {
    console.log(scores[i]);
    i--;
}

//find the maximum number in an array using JavaScript, then print it
const numbers=[12,45,6,78,34,99,23,54];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);