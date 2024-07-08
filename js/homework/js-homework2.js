//1. reform your invoice function to be able to handle various tax rates;

function invoice(items, taxRate) {
  let total = 0;
  for (let item of items) {
    total += item;
  }
  return (total * taxRate).toFixed(2);
}

let items = [8100, 200, 700, 1000];
let total = invoice(items, 1.13);
console.log(total);

//2. if result >1000, luxury good, collect price list, if <=1000, common goods, collect price list
//return: total, arrLuxury, arrCommon

function invoice2(items, taxRate) {
    let total = 0;
    let arrLuxury = [];
    let arrCommon = [];
    for (let item of items) {
        total += item;
        if (item > 1000) {
        arrLuxury.push(item);
        } else {
        arrCommon.push(item);
        }
    }
    return { total: (total * taxRate).toFixed(2), arrLuxury, arrCommon };
}

let result = invoice2(items, 1.13);
console.log(result);