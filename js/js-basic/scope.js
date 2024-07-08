//let(const) vs var
for(let i = 0; i < 5; i++) {
  console.log('inside block',i);
}
console.log('outside block',i);

//let vs var
//let is block scoped, var is function scoped
//let is not hoisted, var is hoisted
//let can be reassigned, var can be reassigned
//let can be declared without assignment, var can be declared without assignment
//let is not available in IE, var is available in IE
//let is available in ES6, var is available in ES5

//block scope means that the variable is only available within the block of code where it is declared
//function scope means that the variable is available within the function where it is declared
