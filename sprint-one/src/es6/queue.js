class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.oldestIndex = 0;
    this.newestIndex = 0;
  }

  enqueue(value) {
  // add to storage
    this.storage[this.newestIndex] = value;
    this.newestIndex++;
  }

  dequeue() {
    // store instance in temp variable
    // delete instance
    // return temp variable
    if (this.oldestIndex !== this.newestIndex) {
      var temp = this.storage[this.oldestIndex];
      delete this.storage[this.oldestIndex];
      this.oldestIndex++;
      return temp;
    }
  }

  size() {
    return this.newestIndex - this.oldestIndex;
  }

}
