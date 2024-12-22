function toWeirdCase(string) {
  return string.split(" ").map(ele => {
    let separatedWords = ele.split("");
    let result = "";
    for(let i = 0; i < separatedWords.length; i++) {
      if(i % 2 === 0 ) result += separatedWords[i].toUpperCase();
      else result += separatedWords[i].toLowerCase();
    }
    return result;
  }).join(" ")
}

console.log(toWeirdCase("hell w"))
