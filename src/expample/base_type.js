"use strict";
// 布尔类型
let a = true;
// 数值类型
let b = 1;
// 字符串类型
let c = 'a';
// 数组类型
let d;
d = [1, 23];
let e;
e = ['a'];
let f;
f = ['1', 1];
let g;
g = ['1', 1];
// 元组类型  固定长度 固定类型
let h;
h = ['1', 1, false];
// 枚举类型
var Rules;
(function (Rules) {
    Rules[Rules["AGE"] = 0] = "AGE";
    Rules[Rules["SEX"] = 1] = "SEX";
    Rules[Rules["NAME"] = 99] = "NAME";
})(Rules || (Rules = {}));
console.info(Rules.NAME);
console.info(Rules[99]);
// any 类型
let i;
i = 'sd';
i = 1;
let j;
j = ['2', 1, false];
// void类型 函数没有明确返回值 返回的就是void
const consoleText = (text) => {
    console.log(text);
};
consoleText('123');
// null undefined 类型
let k;
k = null;
let l;
l = undefined;
// never 类型 任意类型的子类型
const errorFunc = (message) => {
    throw new Error(message);
};
// object 类型
let obj = {
    name: 'jack'
};
function getObject(ob) {
    console.info(ob);
}
getObject({});
// 类型断言
let getLength = (target) => {
    if (target.length || target.length === 0) {
        return target.length;
    }
    else {
        return target.toString().length;
    }
};
getLength('a');
/**
 * 类型断言
 * <string> target
 * (target as number|string)
 */
