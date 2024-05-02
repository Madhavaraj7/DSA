function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}
let arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log(arr);

//Big-O = O(n^2)
