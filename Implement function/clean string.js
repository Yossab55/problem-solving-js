function cleanString(str, wantNumbers = true) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (/*str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 122)*/
      str[i] >= "A" && str[i] <= "z") ||
      (/[\d]/.test(str[i]) && wantNumbers) ||
      str[i] == "_"
    ) {
      result += str[i];
    }
  }
  return result;
}

console.log(cleanString("yossab 00//@@@#__samouel3452UIN--"));