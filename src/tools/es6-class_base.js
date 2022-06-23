// es-class
class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y
    }
    getPosition() {
        return `${this.x}-${this.y}`
    }
}
const P = new Point(1,2)
console.info(P)

class Info {
    constructor(age) {
        this._age = age
    }
    set age (newVal) {
        this._age = newVal
    }
    get age() {
        return this._age
    }
}
let a =new Info(12)
console.info(a)
a.age = 14
console.info(a)

const b = class {
    constructor(a) {
        this._a = a
    }
}
let k = new b(12)
console.info(k)

class Large {
    constructor(x,y) {
        this._x = x;
        this._y = y;
    }
    getPosition() {
        return `${this._x}-${this._y}`
    }
    static getClassName() {
        return Large.name
    }
}
let m = new Large(1,2)
console.info(m.getPosition())
console.info(Large.getClassName())

// class Topic{
//     z = 0
// }
// let n = new Topic()
// console.info(n)

// ES6 明确规定 class内部只有静态方法，没有静态属性

//  私有方法
class Attribute{
    // 内部定义的私有方法
    _func() {}
}
// 将私有方法移除模块
const _fun2 = () => {}
class Attributes{
    _func() {
        _fun2.call(this)
    }
}
// 利用Symbol的唯一性 实现私有方法
const _age = Symbol('age')
class Compiled{
    [_age](arg) {
        return arg
    }
}

let I = new Compiled()
console.info(I)

/**
 * 私有属性 当前提案是 # age =12  暂时编译工具可能暂不支持
 */

/**
 * Es6 中 引入 new.target属性 此属性可以用来确认当前构造函数是怎么调用的
 *
 *  class 内部调用返回当前的class
 *  ⚠️ 子类继承父类时 返回的是子类的class
 */
class Man{
    constructor() {
        console.info(new.target)
    }
}
let p1 = new Man()
console.info(p1)

class Parent {
    constructor(props) {
        console.info(new.target)
        if(new.target === Parent) {
            throw new Error('不能实力话')
        }
    }
}
class Child extends Parent{
    constructor(props) {
        super(props);
        console.info(new.target)
    }

}
let childA = new Child()
console.info(childA)
