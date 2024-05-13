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

  preorder(root, result = []) {
    if (root) {
      result.push(root.val);
      this.preorder(root.left, result);
      this.preorder(root.right, result);
    }
    return result;
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.val);
      this.inorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.val);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.preorder(bst.root));
// bst.inorder(bst.root);
// bst.postorder(bst.root);
