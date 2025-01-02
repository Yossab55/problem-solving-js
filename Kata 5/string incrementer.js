function incrementString(string) {
  let indexOfFirstDigit = getTheFirstIndexOfNumber(string);
  let wordWithoutNumber;
  let numberString ;
  if (indexOfFirstDigit == string.length - 1) return string + "1";
  if (indexOfFirstDigit == null) {
    wordWithoutNumber = "";
    numberString = string;
  } else {
    wordWithoutNumber = string.slice(0, indexOfFirstDigit + 1);
    numberString = string.slice(indexOfFirstDigit + 1);
  }
  let numberStringAfterAdding = addOne(numberString);
  return wordWithoutNumber + numberStringAfterAdding;
}
function getTheFirstIndexOfNumber(string) {
  for (let i = string.length - 1; i >= 0; i--) {
    if (parseInt(string[i]) != string[i]) return i;
  }
  return null;
}
function addOne(string) {
  let sizeOfString = string.length;
  let stringNumber = String(Number(string) + 1);
  if (stringNumber.length >= sizeOfString) return stringNumber;
  else return addZerosTo(stringNumber, sizeOfString);
}
function addZerosTo(string, maxSize) {
  let howMuchZeros = maxSize - string.length;
  let result = "";
  for (let i = 0; i < howMuchZeros; i++) {
    result += "0";
  }
  return result + string;
}
console.log(incrementString("foo010"));
console.log(incrementString("fo1o10"));
console.log(incrementString("0010"));
console.log(incrementString("f11oo"));
console.log(incrementString("1"));
