class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function ThirdLargest(root) {
  let count = 0;
  let res = 0;
  function Traverse(root) {
    if (!root || count >= 2) {
      return;
    }
    Traverse(root.right);
    count++;
    if (count === 2 ) {
      res = root.val;
    }
    Traverse(root.left)
  }
  Traverse(root);
  return res
}

const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(8);

console.log(ThirdLargest(tree));
