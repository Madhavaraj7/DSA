// // An array is an odered collection of values

// // insert / remove at end of an array is - O(1)

// // insert / remove at beginning of an array is - O(n)

// // Accessing an array is - O(1)

// // Search - O(n)

// // push / pop - O(1)


// // shift/unshift/concat/slice/splice - O(n)

// // forEach / map / filter / reduce - O(n)

// // workouts

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function Search(arr, time) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == time) {
//       return true;
//     } else {
//     }
//   }
//   return false;
// }

// // console.log(Search(array, 4));

// function reverseArray(arr) {
//   let i = 0;
//   let j = arr.length - 1;

//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
//   return arr;
// }

// console.log(reverseArray(array)); // O(n)

// function moveZeros(arr) {
//   let i = 0;
//   let j = 1;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== 0) {
//       i++;
//     } else if (arr[i] === 0 && arr[j] !== 0) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++;
//     }
//   }

//   return arr;
// }

// // console.log(moveZeros([2, 0, 3, 0, 4, 5])); // O(n)

// function findSum(arr, t) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === t) {
//         return [arr[i], arr[j]];
//       } 
//     }
//   }
// }

// // console.log(findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17));

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let res = [];

// for (let i = 0; i < arr.length; i += 2) {
//   let a = [];
//   for (let j = i; j < i + 2; j++) {
//     if (arr[j]) {
//       a.push(arr[j]);
//     }
//   }
//   res.push(a);
// }
// console.log(  res);

// let arr1 = res.flat(Infinity);
// console.log(arr1);
// let out = [];

// for (let i = 0; i < res.length; i++) {
//   for (let j = 0; j < res[i].length; j++) {
//     out.push(res[i][j]);
//   }
// }

// console.log(out);

// function recursiveBinarySearch(arr, val, left, rigth) {
//   while (left <= rigth) {
//     let mid = Math.floor((left + rigth) / 2);
//     if (arr[mid] === val) {
//       return mid;
//     } else if (arr[mid] < val) {
//       return recursiveBinarySearch(arr, val, mid + 1, rigth);
//     } else {
//       return recursiveBinarySearch(arr, val, left, mid - 1);
//     }
//   }
//   return -1;
// }

// let arr=[1,2,3,4,5,6,7,8];
// console.log(recursiveBinarySearch(arr, 3, 0, arr.length - 1));

let arr = [2, 2, 4, 4, 10, 6, 6, 8, 7, 1, 5];

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
      return arr[i]
    }
  }
  return -1
}

console.log(unique(arr))

