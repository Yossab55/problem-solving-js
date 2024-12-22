function count(string) {
  let charCount = {};
  for(let i = 0; i < string.length; i++) {
    if(charCount[string[i]] === undefined) charCount[string[i]] = 1;
    else charCount[string[i]]++;
  }
  return charCount;
}
