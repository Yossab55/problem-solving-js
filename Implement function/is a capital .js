function isAllCapital(str) {

  for (let i = 0; i < str.length; i++) {
    let isWord = false;
    if (str[i] === " ") {
      isWord = true;
      i++
    }
    let strNum = str[i].charCodeAt();
    if ((strNum < 65 || strNum > 90) && isWord) {
      return false;
    }
  }
  return true;
}

console.log(isAllCapital("Hello World From PHP"));
console.log(isAllCapital("Hello World from PHP"));
