function perimeter(n) {
  let startNumbers = [0,1]
  return 4 * fib(n, startNumbers);
}
function fib(n, numbers) {
  if (n === 0) return 1;
  let sum = numbers[0] + numbers[1];
  let newNumbers = [numbers[1], sum];
  return sum + fib(--n, newNumbers);
}

console.log(perimeter(0));
console.log(perimeter(1));
console.log(perimeter(7));
