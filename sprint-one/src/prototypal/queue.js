var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.oldestIndex = 0;
  someInstance.newestIndex = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // add to storage
  this.storage[this.newestIndex] = value;
  this.newestIndex++;
};

queueMethods.dequeue = function() {
  // store instance in temp variable
  // delete instance
  // return temp variable
  if (this.oldestIndex !== this.newestIndex) {
    var temp = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.newestIndex - this.oldestIndex;
};

