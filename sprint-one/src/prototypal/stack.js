var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};
//debugger;
var stackMethods = {};

stackMethods.push = function(value) {
  let index = Object.keys(this.storage).length;
  this.storage[index] = value;
};

stackMethods.pop = function() {
  let index = Object.keys(this.storage).length-1;
  let temp = this.storage[index];
  delete this.storage[index];
  return temp;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};


