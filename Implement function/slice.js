function sliceMe(str, start , end , step = 1, reverse = false) {
  if(str.length == end - start) return str ;
  if (end > str.length) end = str.length;
  let result = "";

  for (let i = start; i < end; i += step) {
    if(reverse) {
      result = str[i] + result;
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(sliceMe("hello, yossab", 0, 5));
console.log(sliceMe("hello, yossab", 4, 8));
console.log(sliceMe("hello, yossab", 4, 20, 1,true));