function toInteger(str) {
  let result = 0;

  for (let i of str) {

    if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
      result = result * 10 + i.charCodeAt() - 48;
    } else {

      break;
    }
  }

  return !result ? NaN : result;
}
console.log(toInteger("123sss"))