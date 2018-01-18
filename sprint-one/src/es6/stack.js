class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    let index = Object.keys(this.storage).length;
    this.storage[index] = value;
  }

  pop() {
    let index = Object.keys(this.storage).length-1;
    let temp = this.storage[index];
    delete this.storage[index];
    return temp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}