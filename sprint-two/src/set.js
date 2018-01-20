var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check if unique
  let storage = this._storage;
  if (!storage.includes(item)) {
    storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
  //returns bools
};

setPrototype.remove = function(item) {
  if (this._storage.includes(item)) {
    let index = this._storage.indexOf(item);
    let removed = this._storage.splice(index, 1);
    this._storage.splice(index, 1);
    return removed;
  }
  //return deleted value
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
