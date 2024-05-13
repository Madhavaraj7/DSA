function fibonacci(n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

// console.log(fibonacci(2)); // [0,1]
// console.log(fibonacci(3)); // [0,1,1]
// console.log(fibonacci(9)); //[0,1,1,2,3,5,8,13,21]

//Big-O = O(n)

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(0)); //1
// console.log(factorial(1)); //1
// console.log(factorial(5)); //120

//Big-O = O(n)

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(5)); // true
// console.log(isPrime(1)); // false

//Big-O = O(n)

function palindrome(str) {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res === str;
}

// console.log(palindrome("malayalam"));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let res = [];

for (let i = 0; i < arr.length; i += 2) {
  let a = [];
  for (let j = i; j < i + 2; j++) {
    if (arr[j]) {
      a.push(arr[j]);
    }
  }
  res.push(a);
}
// console.log(res);

// let res1=res.flat(Infinity);

let out = [];

for (let i = 0; i < res.length; i++) {
  for (let j = 0; j < res[i].length; j++) {
    out.push(res[i][j]);
  }
}

// console.log(out)

// console.log(res1)

// write a function to find the extra char that in string2 but not in string1
let str1 = "ddffkkkk";

let str2 = "dMdffllllllkkkkk";

function extra(str1, str2) {
  let obj = {};
  for (let s of str1) {
    if (obj[s]) {
      obj[s]++;
    } else {
      obj[s] = 1;
    }
  }
  let result = "";
  for (let s of str2) {
    if (obj[s] > 0) {
      obj[s]--;
    } else {
      result += s;
    }
  }
  console.log(result);

}

extra(str1, str2);
