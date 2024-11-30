function makeTransaction(guantity, pricePerDroid) {
  const totalPrice = guantity * pricePerDroid;

  return `You ordered ${guantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
