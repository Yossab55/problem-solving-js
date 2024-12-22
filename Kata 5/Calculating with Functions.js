function zero(strCalc = "0") {
  let theNumber = "0";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function one(strCalc = "1") {
  let theNumber = "1";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function two(strCalc = "2") {
  let theNumber = "2";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function three(strCalc = "3") {
  let theNumber = "3";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function four(strCalc = "4") {
  let theNumber = "4";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function five(strCalc = "5") {
  let theNumber = "5";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function six(strCalc = "6") {
  let theNumber = "6";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function seven(strCalc = "7") {
  let theNumber = "7";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function eight(strCalc = "8") {
  let theNumber = "8";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}
function nine(strCalc = "9") {
  let theNumber = "9";
  if (strCalc.length === 1) return theNumber;
  return getResult(theNumber + strCalc);
}

function plus(strNumber) {
  return "+" + strNumber;
}
function minus(strNumber) {
  return "-" + strNumber;
}
function times(strNumber) {
  return "*" + strNumber;
}
function dividedBy(strNumber) {
  return "/" + strNumber;
}

function getResult(operation) {
  switch (operation[1]) {
    case "+":
      return Number(operation[0]) + Number(operation[2]);
    case "-":
      return Number(operation[0]) - Number(operation[2]);
    case "*":
      return Number(operation[0]) * Number(operation[2]);
    case "/":
      return parseInt(Number(operation[0]) / Number(operation[2]));
  }
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
