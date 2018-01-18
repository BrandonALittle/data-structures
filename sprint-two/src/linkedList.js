var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var oldHead = list.head.value;
      list.head = list.head.next;
      return oldHead;
    }
  };

  list.contains = function(target) {
    let bool = false;
    var startNode = list.head;

    var searchNodes = function (node, target) {
      if (node.value === target) {
        return true;
      } else {
        if (node.next !== null) {
          let nextNode = node.next;
          return searchNodes(nextNode, target);
        } else {
          return false;
        }
      }
    };

    bool = searchNodes(startNode, target);
    return bool;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var Stanley = LinkedList();
Stanley.addToTail(5);

// head (prop), --> next node
// {val: something, next: {}}
// {val: something, next: val2}, {val2: something, next: val3}, {val: something, next: val4}

/*
 * Complexity: What is the time complexity of the above functions?
 */

// 1. Should designate a new tail when new nodes are added
// identify the tail
// the tail should be a node with next() === null
// two conditions - !== null || still looking
// the old tail will point to new node
// set tail.next() = new node


// 2. Should remove the head from the list when removeHead is called
// get head.next() and store in variable
// store head in a variable
// set list.head to head.next() to head
// delete head
// return deleted head

// 3. Should return the value of the former head when removeHead is called

// 4. Should contain a value that was added
// start at the head, is head.value === target
// !== target && head.next() !== null, then call contains on head.next()
// else return false

// 5. Should not contain a value that was removed

// ADD TESTS:

// 6. Should not contain a value that was NOT added ??
// --> yes, i'm trying to think of a case when that could happen...maybe side effect of something else
// want me to type since no audio on my end okay cool
// in the spec file

// 7.