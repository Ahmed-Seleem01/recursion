// Declare a function to apply fibonacci using iteration
function fib(num) {
  const arr = [];
  // Declare two variables to hold first and second elements
  let a = 0;
  let b = 1;
  for (let i = 0; i < num; i++) {
    if (i === 0) arr.push(0);
    else if (i === 1) arr.push(1);
    else {
      // Sum two last numbers and add them to next element
      let c = a + b;
      // Make the swap
      a = b;
      b = c;
      arr.push(c);
    }
  }
  return arr;
}
console.log(fib(3));

// Declare function to apply fibonacci using iteration
function fibRec(num) {
  // Set base cases
  if (num < 1) return "Please enter positive integer number";
  else if (num === 1) return [0];
  else if (num === 2) return [0, 1];
  // Use recursion
  const arr = fibRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
console.log(fibRec(8));
