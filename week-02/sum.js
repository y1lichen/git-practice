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
console.log(sum([1, 5, 3, 2])); // 11
console.log(sum2([1, 5, 3, 2]));
console.log(sum3([1, 5, 3, 2]));