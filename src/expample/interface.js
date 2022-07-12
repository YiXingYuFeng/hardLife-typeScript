"use strict";
const getName = ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
};
getName({ firstName: '1', lastName: '10' });
const getVegetables = ({ color, type }) => {
    return color + type;
};
getVegetables({ type: '22' });
/**
 * 多余属性检查
 */
/**
 * 1： 通过类型断言
 * getVegetables({ type: '22', size: '2222'} as Vegetables)
 */
/**
 * 2： 在接口设置  [props: string] :any
 *  getVegetables({ type: '22', size: '2222'})
 */
/**
 *  3: 类型兼用性
 *
 */
const VegetablesInfo = {
    type: 'dasd',
    color: 'das',
    size: 'das'
};
getVegetables(VegetablesInfo);
const testFunction = ({ color, size }) => {
    return {
        color: color,
        size: size
    };
};
testFunction({ color: '1', size: '2' });
let arr = [1, 'a'];
const add = (n1, n2) => n1 + n2;
const role2 = {
    a: 'admin',
    1: 'admin'
};
const tomato = {
    color: 'e31',
    size: 112321
};
console.info(tomato);
const getCounter = () => {
    const c = () => { c.count++; };
    c.count = 0;
    return c;
};
console.info(c);
