//setTimeout
//setTimeout(callbackFunction, 3000); // 3 seconds

function printName(){
    console.log('Hison');
}
setTimeout(printName, 3000);

//with parameters
function printName1(name){
    console.log(name);
}
setTimeout(printName1, 6000, 'Lin');

//use anonymous function as callback
setTimeout(function(){
    console.log('Hison Lin');
}, 9000);

//setInterval
//setInterval(callbackFunction, 3000); // every 3 seconds

// setInterval(function(){
//     console.log('hihi');
// }, 3000);



//control setInterval
const eleStart = document.createElement('button');
document.body.appendChild(eleStart);
eleStart.innerText = 'Start';
const eleStop = document.createElement('button');
document.body.appendChild(eleStop);
eleStop.innerText = 'Stop';

//steps to create elements
const eleDiv = document.createElement('div');
document.body.appendChild(eleDiv);

function createElement(){
    const eleP = document.createElement('p');
    eleDiv.appendChild(eleP);
    eleP.innerText = 'Hello';

    //classwork: create a button,"Say Hi"
    const eleButton = document.createElement('button');
    eleDiv.appendChild(eleButton);
    eleButton.innerText = 'Say Hi';
}

//anonymous function
//let startInterval;
let startInterval=[];
eleStart.addEventListener('click', function(){
    let startIntervalItem = setInterval(createElement, 3000);
    console.log(startIntervalItem);
    startInterval.push(startIntervalItem);
    // //stop the interval after 15 seconds
    // setTimeout(function(){
    //     clearInterval(startInterval);
    // }, 15000)
});

//stop all the intervals
eleStop.addEventListener('click', function(){
    for(let i=0; i<startInterval.length; i++){
        clearInterval(startInterval[i]);
    }
    startInterval = [];
});

//homework:
//create a running clock using interval;hh:mm:ss

//string methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



let str = 'Hello World';
// String length
console.log(str.length);//11

// String slice()
console.log(str.slice(0, 5));//Hello
console.log(str.slice(6));//World
console.log(str.slice(7,2));//empty string
//it will not change the original string


// String substring()
console.log(str.substring(0, 5));//Hello//start from 0, end is 5
//it returns the same result as slice
console.log(str.substring(7,2))//llo W
//it will not change the original string

// String substr()
console.log(str.substr(0, 5));//Hello//start from 0, length is 5

// String search()
console.log(str.search('World'));//6

// String replace()
console.log(str.replace('World', 'Hison'));//Hello Hison
//it will not change the original string
console.log(str);//Hello World

// String replaceAll()
console.log(str.replaceAll('o', 'a'));//Hella Warld
//it will not change the original string

// String toUpperCase()
console.log(str.toUpperCase());//HELLO WORLD
//it will not change the original string

// String toLowerCase()
console.log(str.toLowerCase());//hello world
//it will not change the original string

// String concat()
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(' ', str2));//Hello World
//it will not change the original string

// String trim()
let str3 = '   Hello World   ';
console.log(str3.trim());//Hello World
//it will not change the original string

// String trimStart()
// String trimEnd()

// String charAt()
console.log(str.charAt(0));//H

// String split()
let str4 = 'Hello,World';
console.log(str4.split(','));//['Hello', 'World']
//it will return an array

// String startsWith()
console.log(str.startsWith('Hello'));//true

// String endsWith()
console.log(str.endsWith('World'));//true

// String indexOf()
console.log(str.indexOf('World'));//6

// String includes()
console.log(str.includes('World'));//true

// String match()
let str5 = 'Hello World';
let pattern = /Hello/;
console.log(str5.match(pattern));//['Hello']
//it will return an array

//search
const paragraph = "I think Ruth's idea is great. Ruth is a great person.";
//Anything not a word character or a whitespace character or apostrophe(')
const regex = /[^\w\s']/g;
console.log(paragraph.search(regex));//index
console.log(paragraph[paragraph.search(regex)]);//character


//regular expression
// https://www.rexegg.com/regex-quickstart.html
// https://cheatography.com/davechild/cheat-sheets/regular-expressions/

