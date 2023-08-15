function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      stack.forEach(value => console.log(value));
    },
  }
}

let myStack = newStack();
myStack.push(5);
myStack.push(10);
myStack.push(15);

myStack.pop();

myStack.printStack();
