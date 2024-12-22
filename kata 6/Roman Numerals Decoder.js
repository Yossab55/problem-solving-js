function solution(roman) {
  let result = 0;
  const ROMANS_CHARS = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  for (let i = 0; i < roman.length; i++) {
    if (ROMANS_CHARS[roman[i] + roman[i + 1]]) {
      result += ROMANS_CHARS[roman[i] + roman[i + 1]];
      i++;
      continue;
    }
    result += ROMANS_CHARS[roman[i]];
  }
  return result;
}
console.log(solution("IV"));
