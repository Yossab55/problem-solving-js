// code wars challenge = https://www.codewars.com/kata/529adbf7533b761c560004e5
// git hub solve : https://github.com/Yossab55/problem-solving-js/blob/main/Kata%205/Memoized%20Fibonacci.js
function fibonacci(n, memory = {}) {
  console.log(n)
  if(memory[n] != undefined) return memory[n];
  if (n < 2) return n;
  let fib = fibonacci(n - 1, memory) + fibonacci(n - 2, memory);
  memory[n] = fib;
  return fib 
}


console.log(fibonacci(15))