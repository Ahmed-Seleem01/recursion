// Declare function to merge two sorted halves
function mergeHalves(leftHalf, rightHalf) {
  const arr3 = [];
  // When there is two halves merge them
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      arr3.push(leftHalf.shift());
    } else {
      arr3.push(rightHalf.shift());
    }
  }
  // return the merged halves
  return [...arr3, ...leftHalf, ...rightHalf];
}

// Declare function to apply merge sort
function mergeSort(arr) {
  // When there is one element in a half return it
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }
  // Split the unsorted array to two halves
  // Left half
  const leftHalf = arr.slice(0, Math.floor(arr.length / 2));
  // Right half
  const rightHalf = arr.slice(Math.floor(arr.length / 2));
  // Return the merged halves in an array each round
  return mergeHalves(mergeSort(leftHalf), mergeSort(rightHalf));
}
console.log(mergeSort([8, 7, 9, 5, 3, 8, 6, 9, 50, 40, 10]));
