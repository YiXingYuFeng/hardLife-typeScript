class Point{
    x: number
    y: number
    constructor(x:number,y:number) {
        this.x=x;
        this.y=y
    }
    getPosition() {
        return `${this.x}-${this.y}`
    }
}

class Parent{
    name:string
    constructor (name:string) {
       this.name = name
    }
}
class Child extends Parent{
    constructor(name:string) {
        super(name);
    }
}

/**
 * 修饰符
 *  public 公共
 *  private 私有的
 *  protected 受保护 在类的内部和子类可以访问到,在外边访问不到
 */

class Example{
    public age: number
    constructor(age:number) {
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}
let example = new Example(18)
console.info(example.age)
class ExampleChild  extends  Example{
    constructor(age:number) {
        super(age);
        console.info(super.age)
        // console.info(super.getAge())
    }
}
// console.info(ExampleChild.age)

class UserInfo {
    readonly name: string
    constructor(name:string) {
        this.name = name
    }
}

let userInfo = new UserInfo('jack')
console.info(userInfo)
// userInfo.name = 'jim'
class A {
    constructor() {
        return 'a'
    }
}

/**
 * 静态属性
 */
class Jack{
    static sex:string = 'man'
    constructor(sex:number) {
        console.info(this)
        // this.sex= sex
    }
}
let jim = new Jack(12)
// console.info(jim.sex)
/**
 * 可选属性
 */
class Info {
    public name:string
    public age?:number // 可选
    private _infoStr?:string
    constructor(name:string, age?:number,public sex?:string) {
        this.name = name
        this.age = age
    }

    /**
     * 存取器
     */
    get infoStr() {
        return `${this.name}:${this.age}-${this._infoStr}`
    }
    setInfoStr(value:string) {
        console.log(`%c断点监听器`, 'color: #43bb88;font-size: 12px;');
        this._infoStr = value
    }
}
let info3 = new Info('name',10)
console.info(info3)
info3.setInfoStr('323232')

/**
 * 抽象类 无法实例化
 */
abstract class People{
    constructor(public name:string) {
        this.name = name
        console.info('抽象类 无法实例化')
    }
}
class Childs extends People{
    constructor(public name: string) {
        super(name);
    }
}
let pep = new Childs('a')
console.info(pep)

interface Names {
    type:string
}
// 用类实现接口
class FoodClass implements Names{
    public  type:string
    constructor(type:string) {
        this.type = type
    }
}

// 接口继承类 继承成员不继承实现
class O {
    protected name:string
    constructor(name:string) {
        this.name = name
    }
}
interface I extends O{}
class B extends O implements I{
    public name: string
    constructor(name:string) {
        super(name);
        this.name = name
    }
}
