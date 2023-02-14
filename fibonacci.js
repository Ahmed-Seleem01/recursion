function fib(num) {
  const arr = [];
  let a = 0;
  let b = 1;
  for (let i = 0; i < num; i++) {
    if (i === 0) arr.push(0);
    else if (i === 1) arr.push(1);
    else {
      let c = a + b;
      a = b;
      b = c;
      arr.push(c);
    }
  }
  return arr;
}
console.log(fib(3));

function fibRec(num) {
  if (num < 1) return "Please enter positive integer number";
  else if (num === 1) return [0];
  else if (num === 2) return [0, 1];

  const arr = fibRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
console.log(fibRec(8));
