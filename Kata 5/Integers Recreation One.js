function listSquared(m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    let sumSquared = getTheSumOfSquared(getDivisorsOf(i));
    if (Math.sqrt(sumSquared) === parseInt(Math.sqrt(sumSquared))) {
      result.push([i, sumSquared]);
    }
  }
  return result;
}
function getDivisorsOf(number) {
  let divisors = number > 1 ? [number] : [];
  let theSquareRoot = Math.sqrt(number);
  for (let i = 2; i < theSquareRoot; i++) {
    if (number % i == 0) {
      divisors.push(number / i, i);
    }
  }
  divisors.push(1);
  return divisors;
}
function getTheSumOfSquared(numbers) {
  return getTheSquareOf(numbers).reduce((a, b) => a + b);
}
function getTheSquareOf(numbers) {
  return numbers.map((ele) => ele ** 2);
}
console.log(listSquared(1, 250));
