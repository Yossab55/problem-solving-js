function chooseBestSum(maxDistance, numberOfTowns, ls) {
  ls = ls.sort((a, b) => a - b);
  console.log(ls)
  let pointers = createPointers(ls, numberOfTowns),
    currentPointer = pointers.getLastNode(),
    lastIndexToSearch = ls.length,
    sum;
  while (currentPointer != null) {
    let tempSum = pointers.sumOfElements();
    if (tempSum > maxDistance) {
      currentPointer.returnStepBack(ls);
      lastIndexToSearch = currentPointer.index;
      currentPointer = currentPointer.previous;
    } else if (currentPointer.index + 1 < lastIndexToSearch) {
      sum = tempSum;
      currentPointer.updateIndexAndNumber(ls);
    } else {
      sum = tempSum;
      lastIndexToSearch--;
      currentPointer = currentPointer.previous;
    }
  }
  console.log(pointers)
  return !isNaN(sum) ? sum : null;
}
function createPointers(ls, numberOfPointers) {
  let pointers = new LinkedList();
  for (let i = 0; i < numberOfPointers; i++) {
    let node = new Node(ls[i], i);
    pointers.addNode(node);
  }
  return pointers;
}
class Node {
  constructor(number, index) {
    this.previous = null;
    this.number = number;
    this.index = index;
    this.next = null;
  }
  updateNumberValue(ls) {
    this.number = ls[this.index];
  }
  updateIndexAndNumber(ls) {
    this.index += 1;
    this.updateNumberValue(ls);
  }
  returnStepBack(ls) {
    this.index -= 1;
    this.updateNumberValue(ls);
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(node) {
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
    if (this.isHeadNull()) {
      return null;
    } else {
      let lastPointer = this.head;
      while (lastPointer.next != null) {
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
let ts = [142, 159, 234, 260, 295, 460, 460, 495, 497];
console.log(chooseBestSum(954, 3, ts)); // = 954
//! what i get = [159, 295, 497] = 951
//! I should get = [460 + 260 + 234] = 954
