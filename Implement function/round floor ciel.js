function round(number) {
  let stringNumber = number.toString();
  let result = parseInt(number);
  if (stringNumber[2] > 4) {
    result++;
  }

  return result;
}
function ceil(number) {
  let stringNumber = number.toString();
  let result = parseInt(number);
  let stringDecimal = "";
  for (let i = 2; i < stringNumber.length; i++) {
    stringDecimal += stringNumber[i];
  }
  if (parseFloat(stringDecimal) > 0) {
    result++;
  }

  return result;
}
function floor(number) {
  return parseInt(number);
}


