function fill(number, item) {
  let result = [];
  for(let i = 0; i< number ; i++) {
    result[i] = item ;
  }
  return result ;
}


console.log(fill(10, "I"))