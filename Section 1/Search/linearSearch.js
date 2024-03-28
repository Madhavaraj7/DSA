
function linearSearch(arr,t) {
for(let i=0;i<arr.length;i++){
    if (arr[i]===t) {
        return true
        
    }
} 
return false;  
}


console.log(linearSearch([-5,2,10,4,5],7));


// console.log(findPosition(arr,3));

function findAllOccurance(arr, val) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        res.push(i);
      }
    }
    return res;
  }
  
//   console.log(findAllOccurance([1, 4, 2, 3, 5, 0, 2, 8, 6, 4, 4, 7, 8], 4));



function minAndmax(arr) {
    let min=Infinity;
    let max=-Infinity;

    for(let i=0;i<arr.length;i++){  
        if (arr[i]<min) {
            min=arr[i]
        }else{
            max=arr[i]
        }
    }
    return `min:${min} and max:${max}`
    
}

console.log(minAndmax([1,2,3,4,5,6,7,8,]));



