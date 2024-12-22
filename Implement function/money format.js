function moneyFormat(number) {
  let numberString = number.toString();
  let result = "";
  let size = numberString.length
  for (let i = 0; i < size; i++) {
    if (i != 0 && (size - i) % 3 == 0) {
      result += ",";
    }
    result += numberString[i];
  }

  return result;
}

console.log(moneyFormat(100));
console.log(moneyFormat(1000));
console.log(moneyFormat(10000));
console.log(moneyFormat(100000));
console.log(moneyFormat(1000000));
console.log(moneyFormat(10358197340));
