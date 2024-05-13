class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// recursive method

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
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
        return this.search(root.left, val);
      } else {
        return this.search(root.right, val);
      }
    }
  }

  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }

  deleteNode(root, val) {
    if (root === null) {
      return root;
    }
    if (val < root.val) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.val) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      root.val = this.min(root.right);
      root.right = this.deleteNode(root.right, root.val);
    }
    return root;
  }

  min(root) {
    if (!root.left) {
      return root.val;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.val;
    } else {
      return this.max(root.right);
    }
  }


  print(root = this.root, result = []) {
    if (root === null) return result;
    
    this.print(root.left, result);
    result.push(root.val);
    this.print(root.right, result);
    
    return result;
  }
  
  


}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(12);
bst.insert(31);
// console.log(bst.print())
console.log(bst.root);
bst.delete(10);
console.log(bst.print())


// bst.search()

console.log(bst.search(38));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));








