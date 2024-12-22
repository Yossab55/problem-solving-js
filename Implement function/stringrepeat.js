let NameRepeat = stringRepeat("yossab", 20,"||");
console.log(NameRepeat);

function stringRepeat(str, r=2, s = "," , show = false) {
  let result = "";
  for (let i = 0; i < r; i++) {
    result += str  ;
    if (show || i + 1 !== r) {
      result += s;
    }
  }
  return result;
}
