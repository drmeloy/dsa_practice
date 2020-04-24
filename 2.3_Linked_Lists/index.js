// 2.3 Delete the Middle Node
// Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node. 

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  add(node){
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
  }

  toString(){
    return JSON.stringify(this);
  }

  deleteMiddleNode(node){
    let current = node;
    while(current.next) {
      current.value = current.next.value;
      if(!current.next.next) current.next = null;
      else current = current.next;
    }
  }
}

const list = new LinkedList();
const node = new Node(3);
list.add(node);
list.add(new Node(5));
const middleNode = new Node(10);
list.add(middleNode);
list.add(new Node(4));
list.add(new Node(6));

console.log(list.toString());
list.deleteMiddleNode(middleNode);
console.log(list.toString());
