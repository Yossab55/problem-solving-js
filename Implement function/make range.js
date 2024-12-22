function makeRange(first, end) {
  let result = [];

  for(let i =first; i<=end; i++) {
    result[i-first] = i;
  }
  return result;
}
console.log(makeRange(5,7))