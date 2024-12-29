function chooseBestSum(maxDistance, numberOfTowns, ls) {
  work = new makeJob(maxDistance, ls, numberOfTowns);
  console.log(work.getPossibilities())
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
    this.possibilities = []
  }
  getPossibilities() {
    let lastNode = this.listPointToTowns.getLastNode();
    //!this should be the work flow for every possibility
    let previousNode = lastNode.previous;
    const IndexToReset = previousNode.index;
    let previousNodeIndex = previousNode.index;
    while(this.thereIsSpaceBetween(previousNodeIndex, lastNode.index)) {
      this.possibilities.push(this.listPointToTowns.sumOfElements());
      console.log(this.possibilities)
      previousNode.updateNodeByOne(this.townsWeHave);
      previousNodeIndex = previousNode.index;
    }
    this.resetNodeBy(previousNode, IndexToReset);
    console.log(previousNode)
  }
  thereIsSpaceBetween(smallIndex, bigIndex) {
    if(bigIndex - smallIndex > 0) return true;
    return false;
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
    this.number = ls[this.index];
  }
}

let ts = [142, 159, 234, 260, 295, 460, 460, 495, 497];
console.log(chooseBestSum(954, 3, ts)); // = 954
//! what i get = [159, 295, 497] = 951
//! I should get = [460 + 260 + 234] = 954
