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
  


  // Find the longest repeating char in "hghyyydddddddd"

  let str = "hghaaaaaahhhhhhhaaaaaayyydddddddd";

  function rep(str) {
    let res = "";
    let temp = str[0];
    let j = 0;
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[j]) {
        j = i;
        temp = str[j];
      } else if (str[j] === str[i]) {
        temp += str[i];
      }
      if (temp.length > res.length) {
        res = temp;
      }
    }
  
    console.log(res); 
  }
  
  rep(str);



//check if a given Binary Tree is a Binary Search Tree or not?


  class TreeNode2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return isBST(root.left, min, root.value) && isBST(root.right, root.value, max);
}

// Example usage:
const tree3 = new TreeNode2(5);
tree3.left = new TreeNode2(3);
tree3.right = new TreeNode2(7);
tree3.left.left = new TreeNode2(2);
tree3.left.right = new TreeNode2(4);
tree3.right.left = new TreeNode2(6);
tree3.right.right = new TreeNode2(6);

console.log(isBST(tree)); // Output: true





//find the height of BT
class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}


function heightOfBT(root) {
  if (!root) {
      return -1; // Height of an empty tree is -1
  } else {
      const leftHeight = heightOfBT(root.left);
      const rightHeight = heightOfBT(root.right);
      return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Example usage:
const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(2);  
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(8);

console.log("Height of the binary tree:", heightOfBT(tree)); // Output: 2



class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}


//find the 3rd heighest element using BST 

function findThirdLargest(root) {
  let count = 0;
  let result = null;

  function reverseInorder(node) {
      if (!node || count >= 3) return;

      // Traverse right subtree
      reverseInorder(node.right);

      // Increment count
      count++;

      // If count is 3, save the value
      if (count === 3) {
          result = node.value;
          return;
      }

      // Traverse left subtree
      reverseInorder(node.left);
  }

  reverseInorder(root);
  return result;
}

// Example usage:
const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(8);

console.log("Third highest element:", findThirdLargest(tree)); // Output: 6
