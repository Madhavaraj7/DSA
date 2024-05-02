// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

function reverseString(str) {
  const arr = str.split(" ");

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  let reverse = "";
  while (stack.length) {
    let curr = stack.pop();
    if (curr) {
      reverse += " " + curr;
    }
  }
  return reverse.trim();
}

console.log(reverseString("HELLO WORLD"));

// reverse string using stack
function reverse(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversed = "";
  while (stack.length > 0) {
    reversed += stack.pop();
  }
  return reversed
}

console.log(reverse("malayalams"));

function removevowles(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let str = s.split("");
  count = 0;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    } else {
      res += str[i];
    }
  }
  return count;
}

console.log(removevowles("educations"));

class stack {
  constructor(size) {
    this.item = [];
    this.size = size;
  }

  isEmpty() {
    return this.item.length === 0;
  }

  push(element) {
    if (this.item.length < this.size) {
      this.item.push(element);
    } else {
      console.log("it can't push");
    }
  }

  pop() {
    if (this.item > 0) {
      this.item.pop();
    } else {
      console.log("error");
    }
  }

  peek() {
    if (this.item.length === 0) {
      console.log("stack is empty");
    }
    return this.item[this.item.length - 1];
  }

  size() {
    return this.item.length;
  }

  display() {
    console.log(this.item);
  }
}

const Mystack = new stack(4);
Mystack.push(1);
Mystack.push(2);
Mystack.push(3);
Mystack.push(14);
Mystack.pop();
Mystack.display();
