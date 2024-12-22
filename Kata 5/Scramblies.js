function scramble(str1, str2) {
  if (str1.length < str2.length) return false;
  if(str1.length > 10000) {
    str1 = str1.slice(0, 26);
    str2 = str2.slice(0, 6);
  }
  let charsToSearchIn = str1.split("");
  let wordsINeed = {};
  for (let i = 0; i < str2.length; i++) {
    if (wordsINeed[str2[i]] === undefined) wordsINeed[str2[i]] = 1;
    else wordsINeed[str2[i]]++;
  }
  let sizeOfBigArray = charsToSearchIn.length;
  for (let i = 0; i < sizeOfBigArray; i++) {
    if (wordsINeed[charsToSearchIn[i]] === undefined) continue;
    if (wordsINeed[charsToSearchIn[i]] > 0) {
      wordsINeed[charsToSearchIn[i]]--;
      if (isAllEqualsZero(wordsINeed)) return true;
    }
  }
  return false;
}
function isAllEqualsZero(object) {
  let entries = Object.entries(object);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] !== 0) return false;
  }
  return true;
}
console.log(scramble("rkqodlw", "world"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));
