function reverse(str) {
  if (str === "") {
    return "";
  }

  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res;
}

console.log(reverse("hunais"));

function reverseArray(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
      return arr;
    } else {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      return reverseArray(arr, start + 1, end - 1);
    }
  }
console.log(reverseArray([1,2,3,4,5]));  


//5


 


