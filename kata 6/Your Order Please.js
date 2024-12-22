function order(words) {
  let separatedWords = words.split(" ");
  let indexes = words
    .split("")
    .filter((ele) => (Number.isInteger(parseInt(ele)) ? true : false))
    .map((ele) => parseInt(ele) - 1);
  let result = "";
  for(let i = 0; i < indexes.length; i++) {
    for(let j = 0; j < indexes.length; j++) {
      if(i === indexes[j]) {
        result += separatedWords[j] + " ";
        break;
      }
    }
  }
  return result.trim();
}

console.log(order("is2 Thi1s T4est 3a"));
