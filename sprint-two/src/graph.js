

// Instantiate a new graph
var Graph = function() {

  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
  //node.edges = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node); // check storage for key property of node
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let connections = this.storage[node];
  for (let i = 0; i < connections.length; i++) {
    let thisIndex = connections[i];
    let targetArray = this.storage[thisIndex];
    let indexOfEdge = this.storage[targetArray].indexOf(node);
    this.storage[connections[i]].splice(indexOfEdge, 1);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  let deleteIndexA = this.storage[fromNode].indexOf(toNode);
  let deleteIndexB = this.storage[toNode].indexOf(fromNode);
  this.storage[fromNode].splice(deleteIndexA, 1);
  this.storage[toNode].splice(deleteIndexB, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    key = Number(key);
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



