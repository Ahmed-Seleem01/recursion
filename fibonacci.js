function fib(num){
  const arr = [];
  let a = 0;
  let b = 1;
  for(let i =0; i < num; i++){
    if(i === 0) arr.push(0);
    else if (i === 1) arr.push(1);
    else{
      let c = a + b;
      a = b;
      b = c;
      arr.push(c);
    }   
  }
  return arr;
}

console.log(fib(1));