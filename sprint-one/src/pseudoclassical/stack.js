var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};
//debugger;


Stack.prototype.push = function(value) {
  let index = Object.keys(this.storage).length;
  this.storage[index] = value;
};

Stack.prototype.pop = function() {
  let index = Object.keys(this.storage).length-1;
  let temp = this.storage[index];
  delete this.storage[index];
  return temp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var Stanley = new Stack();
console.log(Stanley);


