function queueTime(customers, checkoutNumbers) {
  if(customers.length === 0) return 0;
  if(checkoutNumbers >= customers.length) return Math.max(...customers);
  let timeForEveryCasher = [];
  for (let i = 0; i < checkoutNumbers; i++) {
    timeForEveryCasher.push(customers.shift());
  }
  while (customers.length != 0) {
    timeForEveryCasher[
      timeForEveryCasher.indexOf(Math.min(...timeForEveryCasher))
    ] += customers.shift();
  }
  return Math.max(...timeForEveryCasher);
}

console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
console.log(queueTime([1, 2, 3, 4, 5], 100));
