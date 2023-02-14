function mergeHalves(leftHalf, rightHalf) {
  const arr3 = [];
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      arr3.push(leftHalf.shift());
    } else {
      arr3.push(rightHalf.shift());
    }
  }
  return [...arr3, ...leftHalf, ...rightHalf];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  }
  const leftHalf = arr.slice(0, Math.floor(arr.length / 2));
  const rightHalf = arr.slice(Math.floor(arr.length / 2));
  return mergeHalves(mergeSort(leftHalf), mergeSort(rightHalf));
}
console.log(mergeSort([8, 7, 9, 5, 3, 8, 6, 9, 50, 40, 10]));
