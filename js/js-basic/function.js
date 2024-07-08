printName();

function printName() {
  console.log("John Doe");
}

printName();

//invoice function
//input:
let items =[8100,200,700,1000];
//output: total (tax included, 1.13)

function invoice(items) {
  let total = 0;
  for (let item of items) {
    total += item;
  }
  return total * 1.13;
}

let total = invoice(items);
total = total.toFixed(2);
console.log(total);
