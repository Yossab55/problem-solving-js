function trimString(str, direction = 0, character = " ") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    // if(str[i] === character) continue;
    // result += str[i]
    if (direction == 0) {
      if (str[i] === character) continue;
      result += str[i];
    }
    if (direction == -1) {
      if (i <= str.length/2) {
        if (str[i] === character) continue;
        result += str[i];
      } else result += str[i];
    }
    if (direction == 1) {
      if (i >= str.length/2) {
        if (str[i] === character) continue;

        result += str[i];
      } else result += str[i];
    }
  }
  return result;
}


console.log(trimString("#####Elzero###", 0, "#"))
console.log(trimString("#####Elzero###", -1, "#"))
console.log(trimString("#####Elzero###", 1, "#"))
