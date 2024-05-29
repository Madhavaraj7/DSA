class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(val) {
    const node = new Node(val);
    this.size++;
    if (this.isEmpty()) {
      return (this.root = node);
    }
    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        if (curr.left) {
          curr = curr.left;
        } else {
          return (curr.left = node);
        }
      } else {
        if (curr.right) {
          curr = curr.right;
        } else {
          return (curr.right = node);
        }
      }
    }
  }

  search(val) {
    if (this.root === null) {
      return false;
    }
    let curr = this.root;
    while (true) {
      if (!curr) {
        return false;
      }
      if (curr.val === val) {
        return true;
      }
      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }

  display() {
    return console.log(this.root);
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(30);
bst.insert(40);
bst.insert(6);
bst.display();

// bst.root.left.val = 23
bst.display();

console.log(bst.search(30));

// console.log(bst.isEmpty());
