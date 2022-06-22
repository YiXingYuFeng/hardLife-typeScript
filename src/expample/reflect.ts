/**
 * Reflect 与 Proxy 一样 针对对象提供新的操作API
 */
let a1:object = {
    name: 'jack',
    age: 10
}
console.info(a1)

// 获取无法定义的属性
console.info(Reflect.defineProperty(a1, 'sex', {value: '10'}))

// 删除属性
Reflect.deleteProperty(a1, 'age')
console.info(a1)

// 获取原型链上的属性
console.info(Reflect.getPrototypeOf(a1))

// 原型方法
// function Greeting(name: string) : void {
    // const self:any = this;
    // this.name = name
// }

//
