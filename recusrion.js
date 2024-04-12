
//1,2,3,4,5,6,7

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
      right = mid -1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7],7));

function recursiveBinary(arr, val, left=0, right=arr.length-1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid]===val) {
        return mid
    }
    if (arr[mid]<val) {
        return recursiveBinary(arr,val,mid+1,right)
    }
    return recursiveBinary(arr,val,left,mid-1)
  }
  return -1
}

let arr=[1, 2, 3, 4, 5, 6, 7];

// console.log(recursiveBinary(arr,7,,arr.length));

function sum(nums) {
    if (nums<0) {
        return nums    
    }
    return nums+sum(nums-1)
}
console.log(sum(5))