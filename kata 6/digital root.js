function digitalRoot(number) {
  let stringNumber = number.toString();


  let result;
  while (stringNumber.length > 1) {
    let sum = sumOfTheDigitsOf(stringNumber);
    stringNumber = sum.toString();
  }
  result = parseInt(stringNumber);
  return result;
}
function sumOfTheDigitsOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }
  
  return sum;
}
// there is a simple solution
function digitalRootTwo(number) {
  if(number < 10) return number;

  let sum = String(number)
  .split("")
  .map(n => Number(n))
  .reduce((num, nextNum) => num + nextNum) ;
  return digitalRootTwo(sum);
}
console.log(digitalRootTwo(10));
console.log(digitalRootTwo(11));
console.log(digitalRootTwo(29));
console.log(digitalRootTwo(2991));
