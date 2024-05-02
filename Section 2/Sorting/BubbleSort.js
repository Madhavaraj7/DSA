function bubblesort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
// let arr = [11, 3, 4, 22, -23, 66];
let arr = [-6, 20, 8, -2, 4];

bubblesort(arr);
console.log(arr);

//Big-O = O(n^2)
