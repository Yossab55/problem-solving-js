function firstNonRepeatingLetter(word) {
  let lowerWord = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      lowerWord.lastIndexOf(lowerWord[i]) ===
      lowerWord.indexOf(lowerWord[i])
    ) {
      return word[i];
    }
  }
  return "";
}

console.log(firstNonRepeatingLetter("sTreS"));
