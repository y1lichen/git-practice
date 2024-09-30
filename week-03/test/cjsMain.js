const { value, updateValue } = require('./cjsModuleA.js');

console.log('Before update:', value);  // 輸出: 1

updateValue(5);

console.log('After update:', value);  // 輸出: 1