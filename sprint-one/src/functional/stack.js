var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};


  someInstance.push = function(value) {
    let index = Object.keys(someInstance.storage).length;
    someInstance.storage[index] = value;
  };

  someInstance.pop = function() {
    let index = Object.keys(someInstance.storage).length-1;
    let temp = someInstance.storage[index];
    delete someInstance.storage[index];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(someInstance.storage).length;
  };

  return someInstance;
};
