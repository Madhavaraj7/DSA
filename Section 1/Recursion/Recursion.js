function recursionfibonocci(n) {
  if (n < 2) {
    return n;
  }
  return recursionfibonocci(n - 1) + recursionfibonocci(n - 2);
}
// console.log(recursionfibonocci(0)); // 0
console.log(recursionfibonocci(6)); // 8

function recursionfactorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * recursionfactorial(num - 1);
}

console.log(recursionfactorial(3));

function recursionsum(num) {
  if (num <= 0) {
    return 0;
  }
  return num + recursionsum(num - 1);
}

// console.log(recursionsum(3));

//recursiveBinarySearch

function recursiveBinarySearch(arr, val, mid = Math.floor(arr.length / 2)) {
  if (mid == arr.length - 1 && val != arr[arr.length - 1]) {
    return -1;
  }

  if (val === arr[mid]) {
    return mid;
  }

  if (val < arr[mid]) {
    return recursiveBinarySearch(arr, val, mid - 1);
  } else {
    return recursiveBinarySearch(arr, val, mid + 1);
  }
}

// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 8], 8));

function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i!==j) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return arr[i];
    }
  }
  return -1
}

let arr=[1,1,2,2,3,3,444,555,444,]

console.log(unique(arr))
