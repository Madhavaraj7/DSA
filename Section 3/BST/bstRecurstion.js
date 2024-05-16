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

  
  height(node = this.root) {
    if (!node) return -1;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

  isBalanced(node = this.root) {
    if (!node) return true;
    const heightDiff = Math.abs(this.height(node.left) - this.height(node.right));
    if (heightDiff > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
}

}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(38);
bst.insert(12);
bst.insert(12);

// console.log(bst.print())
// console.log(bst.root);
console.log(bst.isBalanced());
// bst.delete(10);
console.log(bst.print());

// bst.search()

// console.log(bst.search(38));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
// console.log(bst.findMax(bst.root));
