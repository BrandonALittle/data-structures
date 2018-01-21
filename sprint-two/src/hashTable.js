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
  let count = 0;
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

  storage.each(function(bucket) {
    if (bucket) {
      count++;
    }
  });

  let threshold = this._limit * .60;
  if (count >= threshold) {
    console.log('threshold', threshold);
    console.log(this._storage);
    let newLimit = this._limit * 2;
    this.resize(newLimit);
  } //else if (count <= (this._limit * .25)) {
  //   this.resize(.5 * this._limit);
  // }
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

HashTable.prototype.resize = function(newLimit) {
  let newHT = new HashTable();
  newHT._limit = newLimit;
  newHT._storage = LimitedArray(newLimit);

  let storage = this._storage;

  // iterate through current hash table
  // recurse through every part of storage array
  storage.each(function(bucket) {
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        let index = getIndexBelowMaxForKey(tuple[0], newHT._limit);
        newHT._storage.set(index, [tuple]);
      }
    }
  });

  this._limit = newHT._limit;
  this._storage = null;
  this._storage = newHT._storage;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */




