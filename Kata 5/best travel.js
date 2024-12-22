function chooseBestSum(maxDistance, numberOfTowns, ls) {
  ls = ls.sort((a, b) => a - b)
  let pointers = createPointers(ls, numberOfTowns);
  console.log(pointers)
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
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNode(node) {
    if(this.isHeadNull()) {
      this.head = node;
      node.previous = null;
    } else {
      let temp = this.head;
      while(temp.next != null) {
        temp = temp.next;
      }
      temp.next = node;
      node.previous = temp;
    }
    this.incrementSize();
  }
  isHeadNull() {
    return (this.head == null);
  }
  incrementSize() {
    this.size++;
  }
}
var ts = [50, 55, 57, 58, 60];
console.log(chooseBestSum(174, 3, ts)); // [55, 58, 60] 173
