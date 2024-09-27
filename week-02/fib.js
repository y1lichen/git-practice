// 這個寫法不太好。如：算fib(3)時，fib(4) = fib(3)+fib(2)
// 又fib(3) = fib(2) + fib(1)，fib(2)就要計算兩次。
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

// 不用遞迴的方法
function fib2(n) {
  var arr = Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10)); // 55