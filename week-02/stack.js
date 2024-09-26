// stack.js
// 以 Module 的方式匯出 (ESM)
export default class Stack {
  // #有特別的意思嗎？請以註解回覆。
  // #表示的是private property，只能在class內部被存取。
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.#items.length === 0) {
      console.log("stack is already empty");
      return;
    }
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.#items.length === 0) {
      console.log("stack is empty");
      return;
    }
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items);
  }
}