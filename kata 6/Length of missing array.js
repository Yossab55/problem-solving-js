function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays === null) return 0;
  let arrayLengths = arrayOfArrays
    .map((elem) => (elem === null) ? 0 : elem.length)
    .sort((a, b) => a - b);
  if (arrayLengths.length == 0 || arrayLengths[0] === 0) return 0;
  let theMissingNumber = null;
  for (let i = 1; i < arrayLengths.length; i++) {
    if (arrayLengths[i] - arrayLengths[i - 1] > 1) {
      theMissingNumber = arrayLengths[i] - 1;
      break;
    }
  }
  return theMissingNumber;
}
console.log(getLengthOfMissingArray([[],, [1]]));
