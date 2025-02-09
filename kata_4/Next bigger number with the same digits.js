// link in code wars: https://www.codewars.com/kata/55983863da40caa2c900004e
// my solve: https://github.com/Yossab55/problem-solving-js/blob/main/kata_4/Next%20bigger%20number%20with%20the%20same%20digits.js
function nextBigger(n) {
  let result = new NextBigNumber(n);
  
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
      this.getSmallNumber();
      this.swapToGetBigNumber();
      this.changeNumberIndex();
      return this.reverseTheNumber();
    } else return -1;
  }
  checkCanSwap() {
    for (let i = 0; i < this.numberParts.length - 1; i++) {
      if (this.numberParts[i] > this.numberParts[i + 1]) {
        this.numberShouldChange = i + 1;
        return i;
      }
    }
    return null;
  }
  getSmallNumber() {
    for (let i = 0; i < this.numberShouldChange; i++) {
      if (
        this.numberParts[i] > this.numberParts[this.numberShouldChange] &&
        this.numberParts[i] < this.numberParts[this.numberShouldChange - 1]
      ) {
        this.indexToGetSmallNumber = i;
        return true;
      }
    }
    if (this.indexToGetSmallNumber == undefined)
      this.indexToGetSmallNumber = this.numberShouldChange - 1;
  }
  swapToGetBigNumber() {
    let temp = this.numberParts[this.numberShouldChange];
    this.numberParts[this.numberShouldChange] =
      this.numberParts[this.indexToGetSmallNumber];
    this.numberParts[this.indexToGetSmallNumber] = temp;
  }
  changeNumberIndex() {
    let arr = this.sortTheNumberAbove(this.getNumberAbove());
    for(let i = 0; i <arr.length; i++) {
      this.numberParts[i] = arr[i];
    }
  }
  sortTheNumberAbove(arr) {
    if(arr.length == 1 || arr.length == 0) return arr;
    let middle = parseInt(arr.length / 2);
    let big = [];
    let small = [];
    for(let i = 0; i < arr.length; i++) {
      if(i == middle) continue;
      if(arr[i] >= arr[middle]) big.push(arr[i]);
      if(arr[i] < arr[middle]) small.push(arr[i]);
    }
    return this.sortTheNumberAbove(big).concat(arr[middle]).concat(this.sortTheNumberAbove(small));
  }
  getNumberAbove() {
    let result = [];
    for(let i = 0; i < this.numberShouldChange; i++) {
      result.push(this.numberParts[i]);
    }
    return result;
  }

  reverseTheNumber() {
    return Number(this.numberParts.reverse().join(""));
  }
}
// console.log(nextBigger(315));
// console.log(nextBigger(12));
console.log(nextBigger(791)); // 917    197    179  719
console.log(nextBigger(24325358108882));
console.log(nextBigger(39090678410)); //39090680147
// console.log(nextBigger(111));
