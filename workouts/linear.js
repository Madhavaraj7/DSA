function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 4, 5, 3, 6, 8, 9], 9));

function globalserach(arr, val) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      res.push(i);
    }
  }
  if (res.length === 0) return -1;

return res;
}

console.log(globalserach([1, 2, 33, 4, 5, 6, 7, 33, 5], 33));
