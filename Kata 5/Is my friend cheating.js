// code wars = https://www.codewars.com/kata/5547cc7dcad755e480000004
// solve in git hub = https://github.com/Yossab55/problem-solving-js/blob/main/Kata%205/Is%20my%20friend%20cheating.js
function removeNb(n) {
  return getAllPossibleCombination(n);
}
function getAllPossibleCombination(lastNumber) {
  let result = [];
  let sumOfSequence = getSumOfSequence(lastNumber);

  for (let i = 1; i <= lastNumber; i++) {
    //it's by a mathematical rule
    let secondNumber = (sumOfSequence - i) / (i + 1);
    if (Math.floor(secondNumber) == secondNumber && secondNumber <= lastNumber)
      result.push([i, secondNumber]);
  }
  return result;
}
function getSumOfSequence(lastNumber) {
  let sumOfFirstAndLast = 1 + lastNumber;
  let theMiddle = lastNumber / 2;
  return sumOfFirstAndLast * theMiddle;
}
console.log(removeNb(26));
console.log(removeNb(100))
