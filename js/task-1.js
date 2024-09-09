'use strict'

function makeTransaction(quantity, pricePerDroid) {
const totalPrice = quantity * pricePerDroid;
return `You ordered ${quantity} droids worth ${totalPrice}` 
}

console.log(makeTransaction(5, 3000)); // "You order 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You order 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You order 10 droids worth 5000 credits!"



