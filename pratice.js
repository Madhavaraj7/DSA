function rotatedarray(arr,k) {
  let size= arr.length;

  if (k>size) {
    return console.log(false);
    
  }

  const rotated= arr.splice(size-k,size);

  arr.unshift(...rotated);

  return arr;
  
}

console.log(rotatedarray([2,3,4,5,6,7],8));