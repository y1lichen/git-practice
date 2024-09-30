import { data, updateData } from './moduleA.js';

console.log('Before update:', data.value);  // 輸出: 1

updateData(5);

console.log('After update:', data.value);  // 輸出: 5