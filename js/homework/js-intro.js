let b=6;
let a= b > b++? ++b : b--;
//what is a ? what is b? show every steps
//b is 6 at the beginning
//for the condition b > b++, we compare b > b before the ++ operator
//so 6 > 6 is false, then ++ operator is executed, then b is 7
//since the condition is false, so b-- is executed, then b is 6
//but the value assigned to a is the value before the -- operator, so a is b before the -- operator, a is 7
//answer: a = 7, b = 6

let c= a > b-- ? a-- : b++;
//what is a, b, c? show every steps
//a is 7, b is 6
//for the condition a > b--, we compare a > b before the -- operator
//so 7 > 6 is true, then b-- is executed, then b is 5
//since the condition is true, so a-- is executed, then a is 6
//but the value assigned to c is the value before the -- operator, so c is a before the -- operator, c is 7
//answer: a = 6, b = 5, c = 7

b = 6
a = b <= b++ ? ++b : b--;
//what is a, b? show every steps
//b is reassigned to 6
//for the condition b <= b++, we compare b <= b before the ++ operator
//so 6 <= 6 is true, then b++ is executed, then b is 7
//since the condition is true, so ++b is executed, then b is 8
//the value assigned to a is the value after the ++ operator, so a is 8.
//answer: a = 8, b = 8