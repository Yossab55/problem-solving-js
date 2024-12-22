function narcissistic(number) {
  if (number < 10) return true;
  let stringNumber = number.toString();
  let power = stringNumber.length;
  let sum = 0;
  for (let i = 0; i < power; i++) {
    sum += parseInt(stringNumber[i]) ** power;
  }
  return number === sum ? true : false;
}

console.log(narcissistic(7));
console.log(narcissistic(153));
console.log(narcissistic(122));
