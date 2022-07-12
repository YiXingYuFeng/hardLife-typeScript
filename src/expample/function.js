"use strict";
// 函数类型
// function addNum(arg1:number, arg2:number) :number {
//     return  arg1 + arg2
// }
// const addNumber = (arg1: number, arg2: number) => arg2 + arg1
let addNum;
addNum = (arg1, arg2) => arg2 + arg1;
let arg3 = 3;
addNum = (arg1, arg2) => arg2 + arg1 + arg3;
// 默认参数
const addFunctions = (x, y = 32) => {
    console.info(x + y);
    return x + y;
};
addFunctions(1);
function handelData(x) {
    if (typeof x === 'string')
        return 'string';
    else if (typeof x === 'number')
        return 'number';
    else if (typeof x === 'object')
        return 'object';
    else
        return 'any';
}
console.info(handelData('a'));
