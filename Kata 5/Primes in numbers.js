function primeFactors(n) {
  let countNumbers = {};
  countNumbers = DivideMethod(n, countNumbers);
  return makeTheStringFrom(countNumbers);
}
function DivideMethod(n, countNumbers) {
  if (n === 1) return countNumbers;
  let prime = getTheFactOfThe(n);
  n /= prime;
  if (countNumbers[prime] === undefined) countNumbers[prime] = 1;
  else countNumbers[prime]++;
  return DivideMethod(n, countNumbers);
}
function getTheFactOfThe(number) {
  let factor = 2;
  let isItTimeForMinus = true;
  let counter = 1;
  while (number % factor !== 0) {
    if (factor == 2) factor = 3;
    else {
      if (isItTimeForMinus) {
        isItTimeForMinus = false;
        factor = 6 * counter - 1;
      } else {
        isItTimeForMinus = true;
        factor = 6 * counter + 1;
        counter++;
      }
    }
  }
  return factor;
}
function makeTheStringFrom(numbers) {
  let keys = Object.keys(numbers);
  let result = "";
  for (let i = 0; i < keys.length; i++) {
    result += "(" + keys[i];
    result +=
      numbers[keys[i]] === 1 ? ")" : "**" + numbers[keys[i]] + ")";
  }
  return result;
}
console.log(primeFactors(86240));
console.log(primeFactors(7775460));
