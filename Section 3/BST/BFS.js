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
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      return (this.root = node);
    } else {
      this.insertednode(this.root, node);
    }
  }
  insertednode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertednode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertednode(root.right, node);
      }
    }
  }

  search(root, val) {
    if (root === null) {
      return false;
    } else {
      if (root.val === val) {
        return true;
      } else if (val < root.val) {
        this.search(root.left, val);
      } else {
        this.search(root.right, val);
      }
    }
  }

  bfs() {
    if (!this.root) {
      return null;
    }
    console.log(this.root);
    const queue = [];
    const data = [];

    queue.push(this.root);
    console.log(queue);
    while (queue.length) {
      let curr = queue.shift();
        // console.log(curr.val);
      data.push(curr.val);

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return data;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(30);
bst.insert(7);
console.log(bst.search(30));
console.log(bst.bfs());
