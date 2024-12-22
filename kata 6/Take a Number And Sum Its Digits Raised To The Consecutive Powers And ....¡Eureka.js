function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    let numberAfterPower = String(i)
      .split("")
      .map((ele, i) => {
        return Number(ele) ** (i + 1);
      })
      .reduce((a, b) => a + b);
    if (numberAfterPower == i) result.push(i);
  }
  return result;
}

console.log(sumDigPow(1, 372));
