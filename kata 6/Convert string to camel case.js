function toCamelCase(str) {
  let notWordREG = /(-|_)/;
  let result = "";
  let isItFirstChar = false;
  for(let i = 0; i <str.length; i++) {
    if (isItFirstChar) {
      result += str[i].toUpperCase();
      isItFirstChar = false;
      continue;
    }
    if(str[i].match(notWordREG)) {
      isItFirstChar = true;
      continue;
    }
    result += str[i];
  }
  return result;
}

console.log(toCamelCase("the_stealth_warrior"));