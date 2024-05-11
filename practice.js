class TreeNode {
  constructor() {
    this.child = {};
    this.endWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TreeNode();
  }

  insert(word) {
    let curr = this.root;
    for (let c of word) {
      if (!curr.child[c]) {
        curr.child[c] = new TreeNode();
      }
      curr = curr.child[c];
    }
    curr.endWord = true;
  }

  print(curr = this.root, word = "", result = []) {
    if (curr.endWord) {
      result.push(word);
    }

    for (let c in curr.child) {
      this.print(curr.child[c], word + c, result);
    }
    return result;
  }

  suggestion(word) {
    let curr = this.root;
    let keyword = "";

    for (let c of word) {
      if (curr.child[c]) {
        keyword += c;
        curr=curr.child[c]
      }else{
        return []
      }
    }
    return this.print(curr,keyword)
  }
}

const t = new Trie();

t.insert("Madhav")
t.insert("Madhavaraj")
t.insert("Hari")
console.log(t.print());
console.log(t.suggestion("Mad"));