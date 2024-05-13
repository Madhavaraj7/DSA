class TreeNode {
    constructor(val ) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function areMirrorTrees(tree1, tree2) {
    // Base cases: if both nodes are null, they are mirrors
    if (!tree1 && !tree2) {
      return true;
    }
    // If one node is null and the other is not, they are not mirrors
    if (!tree1 || !tree2) {
      return false;
    }
    // Check if values are equal and their subtrees are mirrors
    return (
      tree1.val === tree2.val &&
      areMirrorTrees(tree1.left, tree2.right) &&
      areMirrorTrees(tree1.right, tree2.left)
    );
  }
  
  // Example usage:
  // Constructing two binary trees
  const tree1 = new TreeNode(1);
  tree1.left = new TreeNode(2);
  tree1.right = new TreeNode(3);
  tree1.left.left = new TreeNode(4);
  tree1.left.right = new TreeNode(5);
  
  const tree2 = new TreeNode(1);
  tree2.left = new TreeNode(3);
  tree2.right = new TreeNode(2);
  tree2.right.left = new TreeNode(5);
  tree2.right.right = new TreeNode(4);

  
  console.log(areMirrorTrees(tree1, tree2)); // Output: true (forms a mirror image)

 

  class TreeNode1 {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  

  function sum(tree) {
    let sum = 0;
  
    function inorder(tree) {
      if (tree) {
        inorder(tree.left);
        if (tree.val % 2 === 0) {
          sum += tree.val;
        }
        inorder(tree.right);
      }
    }
    inorder(tree);
    return sum;
  }
  
  const tree = new TreeNode1(1);
  tree.left = new TreeNode1(2);
  tree.right = new TreeNode1(3);
  tree.left.left = new TreeNode1(4);
  tree.left.right = new TreeNode1(5);
  tree.right.left = new TreeNode1(6);
  tree.right.right = new TreeNode1(7);
  
  const total = sum(tree);
  console.log("total sum of even :", total);
  









