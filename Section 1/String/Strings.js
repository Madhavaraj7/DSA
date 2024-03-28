function reverseString(str) {
    let res = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
    }
    return res;
  }
  
//   console.log(reverseString("hello"));



  function palindrome(str  ) {

    let res="";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
      }
      return res===str;

  }

//   console.log(palindrome("malayalam"));



 function isPalindromeNumber (n) {
    let str=n.toString()
    let i=0
    let j=str.length-1
    while(i<j){
        if(str[i]!==str[j]) 
        return false
        i++
        j--
    }
    return true
};


console.log(isPalindromeNumber(121));



  function countVowelsAndNonVowelsCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowCount = 0;
    let NonvowCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowCount++;
      } else {
        NonvowCount++;
      }
    }
  
    return `vowels count: ${vowCount}; Nonvowels count: ${NonvowCount}`;
  }
  
  console.log(countVowelsAndNonVowelsCount("educations"));



