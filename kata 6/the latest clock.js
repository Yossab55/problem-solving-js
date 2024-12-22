function theLastClock(a, b, c, d) {
  let numbers = [a, b, c, d],
  result = "",
  firstDigit,
  secondDigit,
  thirdDigit,
  lengthOfNumbersBiggerThanFive = numbers.filter(function (element) {
    return element > 5 ? true : false;
  }).length;
  //get first digit
  firstDigit = getMaxFirstDigitHours(numbers, lengthOfNumbersBiggerThanFive);
  result += firstDigit.number;
  numbers = deleteNumberFrom(numbers, firstDigit.index);
  //get second digit
  secondDigit = getMaxSecondDigitHours(numbers, parseInt(result));
  result += secondDigit.number;
  
  numbers = deleteNumberFrom(numbers, secondDigit.index);
  result += ":"
  //get third digit
  
  thirdDigit = getMaxFirstDigitMinutes(numbers);
  result += thirdDigit.number;
  numbers = deleteNumberFrom(numbers, thirdDigit.index)
  // get last digit
  console.log(numbers)
  fourthDigit = numbers[0]
  result += fourthDigit;
  return result;
}
function getMaxFirstDigitHours(numbers, lengthOfNumbersBiggerThanFive) {
  if (lengthOfNumbersBiggerThanFive == 2) return searchForOneOrLessIn(numbers);
  return searchForTwoOrLessIn(numbers);
}
function getMaxSecondDigitHours(numbers, firstDigit) {
  if(firstDigit === 1 || firstDigit === 0) return searchForNineOrLessIn(numbers);
  return  searchForThreeOrLessIn(numbers);
}
function getMaxFirstDigitMinutes(numbers) {
  return searchForFiveOrLessIn(numbers);
}
function searchForOneOrLessIn(numbers) {
  let counter = 1;
  return loopOverNumbersUntilGetNumber(numbers, counter);
}
function searchForTwoOrLessIn(numbers) {
  let counter = 2;
  return loopOverNumbersUntilGetNumber(numbers, counter);
}
function searchForNineOrLessIn(numbers) {
  let counter = 9;
  return loopOverNumbersUntilGetNumber(numbers, counter);
}
function searchForThreeOrLessIn(numbers) {
  let counter = 3;
  return loopOverNumbersUntilGetNumber(numbers, counter);
}
function searchForFiveOrLessIn(numbers) {
  let counter = 5;
  return loopOverNumbersUntilGetNumber(numbers, counter);
}
function loopOverNumbersUntilGetNumber(numbers, counter) {
  let result = null;
  for (let i = counter; i >= 0; i--) {
    if (result === null) {
      result = searchForCertainNumber(numbers, i);
    }
  }
  return result;
}
function searchForCertainNumber(numbers, theNumber) {
  let result = null;
  for (let i = 0; i < numbers.length; i++ ) {
    if (numbers[i] === theNumber) {
      return {
        'number': numbers[i],
        'index': i
        };
    }
  }
  return result;
}
function deleteNumberFrom(numbers, indexOfNumber) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((i === indexOfNumber)) continue;
    newNumbers.push(numbers[i]);
  }
  return newNumbers;
}

console.log(theLastClock(1, 2, 8, 9))