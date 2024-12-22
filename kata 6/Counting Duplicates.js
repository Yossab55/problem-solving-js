function duplicateCount(text) {
  let charDuplicatedTrueOrFalse = {};
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (charDuplicatedTrueOrFalse[text[i]] === undefined)
      charDuplicatedTrueOrFalse[text[i]] = false;
    else charDuplicatedTrueOrFalse[text[i]] = true;
  }
  let numberOfDuplicated = Object.entries(charDuplicatedTrueOrFalse).filter(ele => ele[1]).length
  return numberOfDuplicated;
}

console.log(duplicateCount("abcd"));
console.log(duplicateCount("aabBcd11"));
