// 第一種寫法
function sum(ary) {
    return ary.reduce((pre, cur) => pre + cur)
}

// 第二種寫法
function sum2(ary) {
    var res = 0
    ary.forEach((item) => {
        res += item
    })
    return res
}

/* 第三種寫法
把array裡的數字用join轉成字串，要用eval計算
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
*/
function sum3(ary) {
    return eval(ary.join("+"))
}

/* 第一種寫法：高斯等差級數公式
(optional) 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
*/
function sumN(n) {
    return n * (n + 1) / 2
}

// 第二種寫法（recursive）
// 如果n太大可能會有Maximum call stack size exceeded的問題
function sumN1(n) {
    if (n <= 1) {
        return n
    }
    return n + sumN1(n - 1)
}

// 第三種寫法（結何前面sum of array的寫法）
function sumN2(n) {
    let arr = Array.from(Array(n + 1).keys()); // 產出一個[0, 1, 2..,n]的array
    return sum(arr);
}
console.log(sum([1, 5, 3, 2])); // 11
console.log(sum2([1, 5, 3, 2]));
console.log(sum3([1, 5, 3, 2]));
// 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n
console.log(sumN(5)); // 15
console.log(sumN1(5));
console.log(sumN2(5));

// 比較sum1、sum3的效能
console.log("compare sum1 & sum3");
let arr = Array.from(Array(100).keys());
console.time('sum1');
for (let i = 0; i < 100000; i++) {
    sum(arr);
}
console.timeEnd('sum1');
console.time('sum3');
for (let i = 0; i < 100000; i++) {
    sum3(arr)
}
console.timeEnd('sum3');
