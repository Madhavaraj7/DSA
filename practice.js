class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
function TotalSum(root) {
  if (!root) {
    return null;
  }
  function min(root) {
    while (root.left) {
      root = root.left;
    }
    return root.val;
  }
  function max(root) {
    while (root.right) {
      root = root.right;
    }
    return root.val;
  }

  let minimum = min(root);
  let maximum = max(root);

  return minimum + maximum;
}

const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(8);


console.log(TotalSum(tree));