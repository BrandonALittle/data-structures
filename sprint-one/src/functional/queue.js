var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.oldestIndex = 0;
  someInstance.newestIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add to storage
    someInstance.storage[someInstance.newestIndex] = value;
    someInstance.newestIndex++;
  };

  someInstance.dequeue = function() {
    // store instance in temp variable
    // delete instance
    // return temp variable
    if (someInstance.oldestIndex !== someInstance.newestIndex) {
      var temp = someInstance.storage[someInstance.oldestIndex];
      delete someInstance.storage[someInstance.oldestIndex];
      someInstance.oldestIndex++;
      return temp;
    }
  };

  someInstance.size = function() {
    return someInstance.newestIndex - someInstance.oldestIndex;
  };

  return someInstance;
};

var Stanley = Queue();
//Stanley.dequeue();

// someInstance.enqueue = function(value) {
//   // get array of keys of pairs stored in someInstance.storage
//   let keys = Object.keys(someInstance.storage); // [10, 11, 12]
//   // get the last/most recent key stored in someInstance.storage
//   let lastKey = keys[keys.length - 1];  // [12]

//   // get keys
//   // last key
//   //let targetKey = keys[keys.length + 1]; // [13]

//   // create the next key in the sequence numerically
//   let targetKey = Number(lastKey) + 1;

//   // add new pair with newly created key set equal to value passed in
//   someInstance.storage[targetKey] = value; // someInstance.storage[13] = c
// };

// someInstance.dequeue = function() {
//   // get array of keys of pairs stored in someInstance.storage
//   let keys = Object.keys(someInstance.storage);
//   // get first/oldest key stored in someInstance.storage
//   let firstKey = keys[0];
//   // get the first/oldest pair stored in someInstance.storage
//   let firstObject = someInstance.storage[firstIndex];
//   console.log('State before deletion: ', someInstance.storage);
//   // delete pair
//   delete someInstance.storage[firstIndex];
//   console.log('State after deletion: ', someInstance.storage);
//   // return deleted pair
//   return firstObject;
// };

// someInstance.size = function() {
//   return Object.keys(someInstance.storage).length;
// };

Stanley.enqueue(5);
Stanley.enqueue(3);
Stanley.enqueue(1);
