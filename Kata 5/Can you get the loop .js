class Node {
  constructor() {
    this.next = null;
  }
  setNext(node) {
    this.next = node;
  }
  getNext() {
    return this.next;
  }
}
function loop_size(node) {
  let temp = node;
  let counter = 0;
  let theStartOfLoop;
  let checker = {}
  // you could use weak map map but for objects 
  while (temp != null && checker[temp.element] == undefined) {
    counter++;
    temp.element = counter;
    checker[temp.element] = counter;
    temp = temp.next;
  }
  console.log(counter)
  theStartOfLoop = temp;
  temp = node;
  while (temp != theStartOfLoop) {
    temp = temp.next;
    counter--;
  }
  return counter;
}
const a = new Node();
const b = new Node();
const c = new Node();
const d = new Node();
a.setNext(b);
b.setNext(c);
c.setNext(d);
d.setNext(a)
console.log(loop_size(a));
