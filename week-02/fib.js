// 這個寫法不太好。如：算fib(3)時，fib(4) = fib(3)+fib(2)
// 又fib(3) = fib(2) + fib(1)，fib(2)就要計算兩次。
function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  // n > 1時，fib(n)=fib(n-1)+fib(n-2)
  return fib(n - 1) + fib(n - 2)
}

// 不用遞迴的方法
// 用一個arr暫存之前算過的，避免重複計算
function fib2(n) {
  var arr = Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

// 改良上一個寫法，因為fib(n)只用得到fib(n-1)和fib(n-2)
// 那就只存前兩個就好，以節省空間
function fib3(n) {
  if (n === 0) {
    return 0;
  }
  var arr = Array(2);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    cur = arr[0] + arr[1]
    arr[0] = arr[1];
    arr[1] = cur;
  }
  return arr[1];
}

console.log(fib3(0)); // 0
console.log(fib3(1)); // 1
console.log(fib3(5)); // 5
console.log(fib3(10)); // 55