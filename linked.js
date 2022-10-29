function linkedList() {
  this.head = null;
  var length = 0;

  const Node = function (data) {
    this.data = data;
    this.next = null;
  };

  this.add = function (data) {
    let node = new Node(data);
    let currentNode = null;
    if (this.head === null) {
      this.head = node;
    } else {
      currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
        console.log(currentNode);
      }
      currentNode.next = node;
      //   console.log(node);

      length++;
    }
  };
  this.remove = function (data) {
    let currentNode = null;
    let prev = null;
    if (this.head === null) {
      return undefined;
    } else if (this.head.data === data) {
      this.head = this.head.next;
    } else {
      currentNode = this.head;
      while (currentNode.data !== data) {
        prev = currentNode;
        currentNode = currentNode.next;
      }
      prev.next = currentNode.next;
    }
    length--;
  };
  this.indexOf = function (data) {
    let currentNode = this.head;
    let index = 1;
    while (currentNode.next) {
      if (currentNode.data === data) {
        break;
      }
      index++;
      currentNode = currentNode.next;
    }
    return index;
  };
}

const l = new linkedList();

// function linkedList() {
//   this.head = null;
//   let length = null;
// }
