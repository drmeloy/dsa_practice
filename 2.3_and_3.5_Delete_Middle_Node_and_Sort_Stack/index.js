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
    if (node === null || node.next === null) throw new Error('Please provide a node. Node cannot be last in the Linked List');
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

const list = new LinkedList();
const middleNode = new Node(10);
list.add(new Node(3));
list.add(new Node(5));
list.add(middleNode);
list.add(new Node(4));
list.add(new Node(6));
const lastNode = new Node(100);
list.add(lastNode);

console.log(list.toString());
list.deleteMiddleNode(middleNode);
console.log(list.toString());
list.deleteMiddleNode(lastNode);

// 3.5 Sort Stack
// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

class Stack {
  constructor() {
    this.top = null;
  }

  push(node){
    node.next = this.top;
    this.top = node;
  }

  pop(){
    const popped = this.top;
    this.top = popped.next;
    return popped;
  }
  
  peek() {
    return this.top.value;
  }

  isEmpty(){
    return !this.top;
  }
}

const countStack = stack => {
  let current = stack.top;
  let count = 1;
  while(current.next) {
    count++;
    current = current.next;
  }
  return count;
}

const sortStack = stack => {
  let count = countStack(stack);
  const stack2 = new Stack();
  while(count > 0){
    let poppedNode = stack.pop();
    for (let i = 0; i < count - 1; i++){
      if (stack.peek() > poppedNode.value) {
        stack2.push(poppedNode);
        poppedNode = stack.pop()
      }
      else {
        stack2.push(stack.pop());
      }
    }
    stack.push(poppedNode);
    while(!stack2.isEmpty()){
      stack.push(stack2.pop());
    }
    count--;
  }
}

const stack = new Stack();
stack.push(new Node(7));
stack.push(new Node(3));
stack.push(new Node(6));
stack.push(new Node(5));
stack.push(new Node(2));
stack.push(new Node(10));
stack.push(new Node(9));
// sortStack(stack);

const gayleSort = stack => {
  const stack2 = new Stack();
  while(!stack.isEmpty()){
    const temp = stack.pop()
    while(!stack2.isEmpty() && stack2.peek() > temp.value){
      stack.push(stack2.pop());
    }
    stack2.push(temp);
  }
  while(!stack2.isEmpty()) stack.push(stack2.pop());
}

gayleSort(stack);
console.log(JSON.stringify(stack))
