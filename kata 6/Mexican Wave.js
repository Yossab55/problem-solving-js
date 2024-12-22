function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") continue;
    let word = "";
    for (let j = 0; j < str.length; j++) {
      if(j == i ) {
        word += str[j].toUpperCase();
        continue;
      }
      word += str[j]
    }
    result.push(word);
  }
  return result;
}

console.log(wave("hello"));
