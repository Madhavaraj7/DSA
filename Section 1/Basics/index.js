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



