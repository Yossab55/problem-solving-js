// LINK: https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
function chooseBestSum(maxDistance, numberOfTowns, ls) {
  work = new makeJob(maxDistance, ls, numberOfTowns);
  return work.getResult();
}
class makeJob {
  constructor(maxDistance, ls, numberOfTowns) {
    this.maxDistance = maxDistance;
    this.townsWeHave = ls;
    this.numberOfTownsWeCanGo = numberOfTowns;
    this.listPointToTowns = new DoublyLinkedList().createList(
      ls,
      numberOfTowns
    );
    this.possibilities = [];
  }
  getResult() {
    let result = this.getMaxNumber();
    if (result === -Infinity) return null;
    return result;
  }
  getMaxNumber() {
    this.getPossibilities();
    return Math.max(...this.possibilities);
  }
  getPossibilities(
    lNode = this.listPointToTowns.getLastNode(),
    lIndexToSearch = this.townsWeHave.length
  ) {
    let lastNode = lNode;
    let lastIndexToSearch = lIndexToSearch;
    if (this.numberOfTownsWeCanGo === 1) {
      while (lastNode.index < lastIndexToSearch) {
        this.checkTheSum();
        lastNode.updateNodeByOne(this.townsWeHave);
      }
      return;
    }
    let previousNode = lastNode.previous;
    if (previousNode == null) return;
    let previousNodeIndex = previousNode.index;
    const IndexToReset = previousNode.index;
    while (lastNode.index < lastIndexToSearch) {
      while (this.thereIsSpaceBetween(previousNodeIndex, lastNode.index)) {
        this.checkTheSum();
        previousNode.updateNodeByOne(this.townsWeHave);
        this.getPossibilities(previousNode, lastNode.index);
        previousNodeIndex = previousNode.index;
      }
      this.resetNodeBy(previousNode, IndexToReset);
      lastNode.updateNodeByOne(this.townsWeHave);
    }
  }
  thereIsSpaceBetween(smallIndex, bigIndex) {
    if (bigIndex - smallIndex > 0) return true;
    return false;
  }
  checkTheSum() {
    let sum = this.listPointToTowns.sumOfElements();
    if (sum <= this.maxDistance) this.possibilities.push(sum);
  }
  resetNodeBy(node, index) {
    node.index = index;
    node.number = this.townsWeHave[index];
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  createList(ls, numberOfNodes) {
    let pointers = new DoublyLinkedList();
    for (let i = 0; i < numberOfNodes; i++) {
      let node = new Node(ls[i], i);
      pointers.addNode(node);
    }
    return pointers;
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
class Node {
  constructor(number, index) {
    this.previous = null;
    this.number = number;
    this.index = index;
    this.next = null;
  }
  updateNodeByOne(ls) {
    this.index += 1;
    if (this.index == ls.length) this.number = ls[this.index - 1];
    else this.number = ls[this.index];
  }
}

let ts = [142, 159, 234, 260, 295, 460, 460, 495, 497];
console.log(chooseBestSum(954, 3, ts));
ts = [50];
console.log(chooseBestSum(954, 3, ts));
ts = [91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestSum(331, 1, ts));
