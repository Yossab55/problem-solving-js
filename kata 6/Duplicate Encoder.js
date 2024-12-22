function duplicateEncode(word) {
  let result = "";
  let repeatedWords = word
    .toLowerCase()
    .split("")
    .filter((ele, index) => {
      for (let i = index + 1; i < word.length; i++) {
        if (ele === word[i].toLowerCase()) return true;
      }
      return false;
    });
  for (let i = 0; i < word.length; i++) {
    if (isThereDuplicate(word[i].toLowerCase(), repeatedWords)) result += ")";
    else result += "(";
  }
  return result;
}
function isThereDuplicate(char, chars) {
  for (let i = 0; i < chars.length; i++) {
    if (char === chars[i]) {
      return true;
    }
  }
  return false;
}
console.log(duplicateEncode("cdm7B7DD)777"));
// ! if it is the same index from the biggin and from the end then there is no duplication
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
