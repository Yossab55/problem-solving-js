function chooseBestSum(maxDistance, numberOfTowns, ls) {
  ls = ls.sort((a, b) => a - b)
  let pointers = createPointers(ls, numberOfTowns);
  // console.log(pointers)
  let sum = pointers.sumOfElements();
  let currentPointer = pointers.getLastNode();
  while(sum < maxDistance) {
    // i don't know why if you change last pointer it changes the previous pointer;
    if(currentPointer.index < ls.length) {
      currentPointer.updateIndexAndNumber(ls)
    } else {
      currentPointer = currentPointer.previous;
      currentPointer.updateIndexAndNumber(ls)
    }
    sum = pointers.sumOfElements();
    break;
  }
  return sum;
}
function createPointers(ls, numberOfPointers) {
  let pointers = new LinkedList();
  for(let i = 0; i < numberOfPointers; i++) {
    let node = new Node(ls[i], i)
    pointers.addNode(node)
  }
  return pointers;
}
class Node {
  constructor(number, index) {
    this.previous = null;
    this.number = number;
    this.indexToPoint = index;
    this.next = null;
  }
  incrementIndexByOne() {
    this.indexToPoint++;
  }
  updateNumberValue(ls) {
    this.number = ls[this.indexToPoint];
  }
  updateIndexAndNumber(ls) {
    this.incrementIndexByOne();
    this.updateNumberValue(ls)
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(node) {
    console.log(node)
    if (this.isHeadNull()) {
      this.head = node;
      node.previous = null;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
      node.previous = temp;
    }
    this.incrementSize();
  }
  sumOfElements() {
    let sum = 0;
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      sum += current.number;
      current = current.next;
    }
    return sum;
  }
  getLastNode() {
    if(this.isHeadNull()) {
      return null;
    } else {
      let lastPointer = this.head;
      while(lastPointer.next != null) {
        lastPointer = lastPointer.next;
      }
      return lastPointer;
    }
  }
  isHeadNull() {
    return this.head == null;
  }
  incrementSize() {
    this.size++;
  }
}
var ts = [50, 55, 57, 58, 60];
console.log(chooseBestSum(174, 3, ts)); // [55, 58, 60] 173
