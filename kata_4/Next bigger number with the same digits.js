// link in code wars: https://www.codewars.com/kata/55983863da40caa2c900004e
function nextBigger(n) {
  let result = new NextBigNumber(n);
  // two errors 
  // 1- you need to check is there another number could swap note: check test 1
  // 2- after you make the swap and get the small number take all numbers and make from them
  // the smallest number
  return result.makeTheResult();
}
class NextBigNumber {
  constructor(n) {
    this.numberParts = String(n)
      .split("")
      .map((e) => Number(e))
      .reverse();
  }
  makeTheResult() {
    if (this.checkCanSwap() != null) {
      this.swapToGetBigNumber();
      if (this.isThereSmallNumber()) {
        this.swapToGetSmall();
        return this.reverseTheNumber();
      }
      return this.reverseTheNumber();
    } else return -1;
  }
  checkCanSwap() {
    for (let i = 0; i < this.numberParts.length - 1; i++) {
      if (this.numberParts[i] > this.numberParts[i + 1]) {
        this.indexToSwap = i;
        return i;
      }
    }
    return null;
  }
  swapToGetBigNumber() {
    let temp = this.numberParts[this.indexToSwap];
    this.numberParts[this.indexToSwap] = this.numberParts[this.indexToSwap + 1];
    this.numberParts[this.indexToSwap + 1] = temp;
  }
  isThereSmallNumber() {
    for (let i = 0; i < this.indexToSwap; i++) {
      if (this.numberParts[i] < this.numberParts[this.indexToSwap + 1]) {
        this.indexToGetSmallNumber = i;
        return true;
      }
    }
    return false;
  }
  swapToGetSmall() {
    let temp = this.numberParts[this.indexToSwap ];
    this.numberParts[this.indexToSwap] =
      this.numberParts[this.indexToGetSmallNumber];
    this.numberParts[this.indexToGetSmallNumber] = temp;
  }
  reverseTheNumber() {
    return Number(this.numberParts.reverse().join(''));
  }
}
// console.log(nextBigger(315)); 
// console.log(nextBigger(12)); 
console.log(nextBigger(791)); // 917    197    179  719
console.log(nextBigger(24325358108882)); 
console.log(nextBigger(39090678410)); //39090680147
// console.log(nextBigger(111)); 
