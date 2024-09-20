function fib(n) {
  if (n == 0) {
    // fib(0)=0
    return 0
  } else if (n == 1) {
    // fib(1)=1
    return 1
  }
  // n > 1時，fib(n)=fib(n-1)+fib(n-2)
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55