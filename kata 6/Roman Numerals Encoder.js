function solution(number) {
  let arrayNumberPower = getNumberPower(number);
  const ROMANS_CHARS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let result = "";
  for (let i = 0; i < arrayNumberPower.length; i++) {
    if (ROMANS_CHARS[arrayNumberPower[i]]) {
      result += ROMANS_CHARS[arrayNumberPower[i]];
      continue;
    }
    while (arrayNumberPower[i] != 0) {
      let theNumber = getTheNearestNumber(
        arrayNumberPower[i],
        Object.keys(ROMANS_CHARS)
          .map((ele) => Number(ele))
          .reverse()
      );
      result += ROMANS_CHARS[theNumber];
      arrayNumberPower[i] -= theNumber;
    }
  }
  return result;
}
function getNumberPower(number) {
  return String(number)
    .split("")
    .reverse()
    .map((ele, i) => String(Number(ele) * 10 ** i))
    .reverse()
    .filter((ele) => (ele == "0" ? false : true));
}
function getTheNearestNumber(number, values) {
  console.log(number);
  for (let i = 0; i < values.length; i++) {
    if (number >= values[i]) return values[i];
  }
  return null;
}
console.log(solution(2008));
