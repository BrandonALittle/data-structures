var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.oldestIndex = 0;
  this.newestIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.newestIndex] = value;
  this.newestIndex++;
};

Queue.prototype.dequeue = function() {
  if (this.oldestIndex !== this.newestIndex) {
    var temp = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.newestIndex - this.oldestIndex;
};


