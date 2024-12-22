function expandedForm(num) {
  let stringNumber = String(num);
  return stringNumber
    .split("")
    .map((ele, index) => {
      let result = String(
        Number(ele) * 10 ** (stringNumber.length - index - 1)
      );
      if (result == 0) return null;
      return result;
    })
    .filter((ele) => ele !== null)
    .join(" + ");
}

console.log(expandedForm(1201));
