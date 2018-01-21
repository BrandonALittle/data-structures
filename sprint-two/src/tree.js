var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree();
  newNode.value = value;
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  let foundNode = false;
  //var startNode = this;
  if (this.value === target) { // Is the value what we are looking for?
    return true; // if value is found, return the node
  }
  if (this.children.length) {
    for (let i = 0; i < this.children.length; i++) { // Check out the children and look for the value
      //debugger;
      foundNode = this.children[i].contains(target);
      if (foundNode) {
        return foundNode;
      }
    }
  }

  return foundNode;

};

var cypress = Tree(5);
console.log(cypress.contains(6));

/*
 * Complexity: What is the time complexity of the above function
*/

