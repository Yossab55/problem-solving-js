function fibonacci(n, memory = {}) {
  console.log(n)
  if(memory[n] != undefined) return memory[n];
  if (n < 2) return n;
  let fib = fibonacci(n - 1, memory) + fibonacci(n - 2, memory);
  memory[n] = fib;
  return fib 
}


console.log(fibonacci(15))