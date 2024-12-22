function digPow(number, startPower) {
  let stringNumber = String(number);
  let sum = 0;
  for(let i = 0; i < stringNumber.length; i++) {
    sum += Number(stringNumber[i]) ** startPower;
    startPower++;
  }
  let k = sum / number;
  return (Number.isInteger(k)) ? k : -1
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
