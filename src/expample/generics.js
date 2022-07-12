"use strict";
const getArray = (value, times = 5) => {
    return new Array(times).fill(value);
};
console.info(getArray(1, 1));
// 两个泛型变量的使用
const getArrays = (params1, params2, times = 5) => {
    return new Array(times).fill([params1, params2]);
};
getArrays(1, '2', 3).map(item => {
    console.info(item[0]);
    console.info(item[1].length);
});
// 泛型在类型定义中使用
// 泛型在函数中的使用
let getArrayÁ;
getArrayÁ = (arg, times) => {
    return new Array(times).fill(arg);
};
let testA = (args) => {
    return [];
};
// 泛型 约束
let testB = (args, times) => {
    return args[times];
};
