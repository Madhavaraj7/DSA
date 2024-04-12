function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    }

    if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

function firstOccurance(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      res = mid;
      right = mid - 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

// console.log(firstOccurance([1, 2, 3, 4, 4, 4, 5, 6, 7, 8], 4));

function lastOccurance(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let res = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      res = mid;
      left = mid + 1;
    } else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

// console.log(lastOccurance([1, 2, 3, 4, 4, 4, 5, 6, 7, 8], 4));

function countOccurence(arr, val) {
  let first = firstOccurance(arr, val);
  let last = lastOccurance(arr, val);

  let count = last - first + 1;
  return count;
}

console.log(countOccurence([1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8], 4));

function recursiveBinarySearch(arr, val, mid = Math.floor(arr.length / 2)) {
  const conditionLast = mid == arr.length - 1 && val != arr[arr.length - 1];
  const conditionFirst = mid === 0 && val != arr[0];

  if (conditionFirst || conditionLast) {
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

// console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 8], 0));

function recursiveBinarySearch(arr, val, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    }

    if (arr[mid] < val) {
      return recursiveBinarySearch(arr, val, mid + 1, right);
    }
    return recursiveBinarySearch(arr, val, left, mid - 1);
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(recursiveBinarySearch(arr,8,0,arr.length-1));
