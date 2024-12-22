function gap(gapNumber, startNumber, EndNumber) {
  // gap should be positive
  if (gapNumber % 2) return null;
  let primes = generatePrimes(startNumber, EndNumber);
  let result = getPairOfPrimeNumbers(gapNumber, primes);
  return (result.length !== 0) ? result : null;
}
function generatePrimes(startNumber, EndNumber) {
  let result = [];
  for (let i = startNumber; i <= EndNumber; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result;
}
function isPrime(number) {
  let sqrt = Math.sqrt(number);
  if (sqrt == parseInt(sqrt)) return false;
  for (let i = 2; i < sqrt; i++) {
    if ((number / i) == Math.floor(number / i)) return false;
  }
  return true;
}
function getPairOfPrimeNumbers(gapNumber, primes) {
  let size = primes.length - 1;
  for (let i = 0; i < size; i++) {
    let checkGap = primes[i + 1] - primes[i];
    if (gapNumber == checkGap) return[primes[i], primes[i + 1]];
  }
  return [];
}
console.log(gap(6, 100, 101));
console.log(gap(10, 300, 400));
