//

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let insertTuple = [k, v]; // create tuple
  let storage = this._storage;
  let bucketArray = storage.get(index);
  if (bucketArray === undefined) {
    storage.set(index, [insertTuple]);
  } else {
    let isFound = false;
    for (let i = 0; i < bucketArray.length; i++) {
      if (bucketArray[i][0] === k) {
        isFound = true;
        bucketArray[i][1] = v;
      }
    }
    if (isFound === false) {
      bucketArray.push(insertTuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let storage = this._storage;
  let arrayOfTuples = storage.get(index);
  for (let i = 0; i < arrayOfTuples.length; i++) {
    let currentTuple = arrayOfTuples[i];
    if (currentTuple[0] === k) {
      return currentTuple[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let storage = this._storage;
  let arrayOfTuples = storage.get(index);
  for (let i = 0; i < arrayOfTuples.length; i++) {
    let currentTuple = arrayOfTuples[i];
    if (currentTuple[0] === k) {
      arrayOfTuples.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


