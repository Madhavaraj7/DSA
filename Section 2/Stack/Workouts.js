// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

function reverseString(s) {
  let str = s.split(" ");
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let final = "";
  while (stack.length) {
    let curr = stack.pop();

    if (curr) {
      final += " " + curr;
    }
  }
  return final.trim();
}

console.log(reverseString("HELLO WORLD"));

// reverse string using stack
function reverse(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reverseStr = "";
  while (stack.length > 0) {
    reverseStr += stack.pop();
  }
  return reverseStr;
}

console.log(reverse("hello"));

function removevowles(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let str = s.split("");
  count=0;
  let res=""
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }else{
      res+=str[i]
    }
     
  }
  return count
}

console.log(removevowles("educations"));
