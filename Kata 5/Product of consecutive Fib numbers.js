function productFib(numberToFind) {
  let fib = createFib(50, [0,1]);
  for(let i = 1 ; i < fib.length; i ++) {
    if(numberToFind > fib[i - 1] * fib[i]) continue;
    if(numberToFind === fib[i - 1] * fib[i]) return [fib[i - 1] , fib[i] , true];
    if(numberToFind < fib[i - 1] * fib[i]) return [fib[i - 1] , fib[i] , false];
  }
}
function createFib(n, numbers) {
  if (n == 0) return numbers;
  numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);

  return createFib(--n, numbers);
}
console.log(productFib(4895));
