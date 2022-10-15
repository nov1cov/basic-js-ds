const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(/* element */el) {
    this.stack = [];

    this.stack.push(el);    

    throw new NotImplementedError('Not implemented');    
    // remove line with error and write your code here
  }

  pop() {

    while(this.stack.length) {
      this.operation = this.stack.pop();
    }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {

    this.stack[0];
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
