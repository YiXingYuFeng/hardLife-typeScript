// 进阶版本
/**
 *  es5 关于构造函数的继承
 */
function Food() {
    this.size = 'small'
}
Food.prototype.getSize = function () {
    return this.size
}
function Potato(name) {
    this.name = name
}
Potato.prototype = new Food()
let cabbage = new Potato('nima')
console.info(cabbage.getSize())
/**
 * 类的继承 extends
 */
class Parent{
    constructor(name) {
        this._name = name
    }
    getName() {
        return this._name
    }
    static getColor() {
        return 'red'
    }
}
class Child extends Parent{
    constructor(name, age) {
        super(name);
        this._age = age
    }
}
let child1 = new Child('jack', 12)
console.info(child1)
console.info(child1.getName())
console.info(child1 instanceof Child)
console.info(child1 instanceof Parent)
console.info(Child.getColor())

/**
 * super 函数
 */
// 代表函数使用 代表父类的构造函数 子类构造函数必须执行一次super函数
//super 作为对象时，在普通方法中，指向父类的原型对象，在静态方法中指向父类

class ParentT{
    constructor() {
        this.type = 'parent'
    }
    getName() {
        return this.type
    }
}
class ChildT extends  ParentT{
    constructor() {
        super()
        console.info(super.getName())
    }
    // static getChild() {
    //     console.info('ChildT', super)
    // }
}

let ll = new ChildT()
console.info(ll)
// console.info(ChildT.getChild())

/**
 * 子类的_proto_指向父类本身
 * 子类prototype属性的_proto_指向父类的prototype属性
 * 实例的_proto_属性的_proto_指向父类实例的_proto_
 */

class CustomArray extends Array{
    constructor(...args) {
        super(...args);
    }
}
const customarray = new CustomArray(3,4,5,6,7,8)
console.info(customarray)
console.info(customarray.fill('+'))
console.info(customarray.join('0'))

/**
 * es5 和 es6实现继承的机制差异
 * es5 先创建子构造函数的this,然后在将父类的方法添加到this上
 * es6 先从父类取到对象this,然后在调用super函数之后在将子类的属性和方法加到this上
 */
