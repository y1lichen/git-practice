// main.js
import Stack from './stack.js';

let stack = new Stack();
stack.print(); // []

stack.push(5);
stack.push(8);
stack.print(); // [5, 8]

// 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.peek()); // 8
console.log(stack.pop()); // 8
console.log(stack.isEmpty());
stack.print(); // [5]
stack.clear();
stack.print(); // []
console.log(stack.isEmpty()); // true
// 空了之後繼續pop，看會發生什麼事
stack.pop();