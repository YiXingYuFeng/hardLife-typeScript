"use strict";
/**
 * Symbol 表示独一无二的值
 */
let s = Symbol('23');
console.info(s);
let p = Symbol('s');
console.info(p);
// 转换为字符串
console.info(p.toString());
// 类型转换
console.info(Boolean(p));
const po = Symbol('name');
let pol = {
    [po]: 'name',
    age: 10
};
console.info(pol);
pol[po] = 'dasdsa';
console.info(pol[po]);
// symbol 作为属性名无法遍历
for (let key in pol) {
    console.info(key);
}
console.info(Object.getOwnPropertyNames(pol));
//
console.info(Object.getOwnPropertySymbols(pol));
// Reflect可以获取到当前对象上所有的属性名
console.info(Reflect.ownKeys(pol));
// es6中内置的symbol值
/**
 * 1: Symbol.hasInstance
 * 对象的Symbol.hasInstance属性指向内部方法， 当其他对象使用
 * instanceof 运算符判断是否为该对象的实例时，会调用这个方法
 */
const a2 = {
    [Symbol.hasInstance](otherObj) {
        console.info(otherObj);
    }
};
console.info({ a: 'a' } instanceof a2);
/**
 * 2: isConcatSpreadable
 */
let arr1 = [1, 2];
// console.info([].concat(arr1, [3,4]))
//
// console.info(arr1[Symbol.isConcatSpreadable])
// arr1[Symbol.isConcatSpreadable] = false
// console.info([].concat(arr1, [3,4]))
/**
 * 创建衍生对象 Symbol.species
 */
class C extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}
// const c= new C(1,2,3)
// console.info(c)
// const cc = c.map(item => {
//     return item+=1
// })
// console.info(cc instanceof C)
// console.info(cc instanceof Array)
/**
 * Symbol.match
 */
// let obj3 = {
//     [Symbol.match](string) {
//         console.info(string.length)
//     }
// }
/**
 * symbol.iterator 指向该对象的默认遍历器的方法
 */
const myIterator = {};
//
// myIterator[Symbol.iterator] = function *() {
//
// }
/**
 * unscopables指向一个对象，该对象制定使用了with关键字时，那些属性会被with环境排除
 */
const obj6 = {
    a: 'a',
    b: 'b'
};
console.info(Array.prototype[Symbol.unscopables]);
