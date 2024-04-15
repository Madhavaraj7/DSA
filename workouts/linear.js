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



let array=[1,2,3,5,6,5,7,2,5];
let array1=[]
for(let i=0;i<array.length;i++){
  let isDublicate=false
  for (let j = i+1; j < array.length; j++) {
    if (array[i]===array[j]) {
      isDublicate=true;
      break;
    }

  }
  if (!isDublicate) {
    array1.push(array[i])
    
  }
}
// return array1;

// console.log(array1);


let array3=[1,2,3,5,6,5,7,2,5];

let i=0

while(i<array3.length){

  let j = i+1

  while(j<array3.length){

    if(array3[i] === array3[j]){

      console.log(array3[j])
      let k = j
      while(k<array3.length){

        array3[k] = array3[k+1]

        k++
      }

      i--

    }
    j++
  }
  i++
}

console.log(array3)


