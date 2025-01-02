function zeros(n) {
  let result = 0;
  let counter = 0;
  while(5 ** counter <= n) {
    counter++;
  }
  for(i = 1; i < counter; i++) {
    result += parseInt(n / (5**i))
  }
  return result
}
// let's try divide & cancer 
function zerosDAndC(n) {
  return n/5 < 1 ? 0 : parseInt(n/5) + zerosDAndC(n/5)
}
console.log(zerosDAndC(5))
console.log(zerosDAndC(15))
console.log(zerosDAndC(25))
console.log(zerosDAndC(100))
console.log(zerosDAndC(125))
console.log(zerosDAndC(625))