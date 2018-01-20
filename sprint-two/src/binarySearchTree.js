var BinarySearchTree = function(value) {

  let binaryTree = Object.create(binarySearchTreeMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

let binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) { // Input: value | Output: None

  if (value < this.value) {
    if (!this.left) {
      let newNode = BinarySearchTree();
      newNode.value = value;
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      let newNode = BinarySearchTree();
      newNode.value = value;
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) { // Input: value | Output: Boolean
  //debugger;
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }

};

binarySearchTreeMethods.depthFirstLog = function(cb) { // Input: callback | Output: None
  if (this.value === undefined) {
    return;
  } else {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *///