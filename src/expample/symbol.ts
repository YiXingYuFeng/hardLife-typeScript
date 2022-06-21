/**
 * Symbol 表示独一无二的值
 */
let s = Symbol('23')
console.info(s)
let p = Symbol('s')
console.info(p)
// 转换为字符串
console.info(p.toString())
// 类型转换
console.info(Boolean(p))

const po = Symbol('name')
let pol = {
    [po]: 'name',
    age: 10
}
console.info(pol)
pol[po] = 'dasdsa'
console.info(pol[po])
// symbol 作为属性名无法遍历
for(let key in pol) {
    console.info(key)
}
console.info(Object.getOwnPropertyNames(pol))
//
console.info(Object.getOwnPropertySymbols(pol))
// Reflect可以获取到当前对象上所有的属性名
console.info(Reflect.ownKeys(pol))
