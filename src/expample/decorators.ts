/**
 * 装饰器是一种特殊类型的声明
 *  语法： @expression 这种形式 expression求值后必须为一个函数，会在运行时调用，被装饰的声明信息作为参数传入
 *  当多个装饰器应用在一个声明上时
 *      * 由上至下依次对装饰器表达式求值
 *      * 求值结果会被当作函数，由下至上依次调用
 */
function f1() {
    console.info("f1(): evaluated")
    return  (target:any, propertyKey:string, descriptor: PropertyDescriptor) =>{
        console.info("f1(): called")
    }
}
function f2() {
    console.info("f2(): evaluated")
    return  (target:any, propertyKey:string, descriptor: PropertyDescriptor)=>{
        console.info("f2(): called")
    }
}
class C1 {
    @f1()
    @f2()
    method() {}
}

console.dir(C1)

/**
 * 类装饰器在类声明之前被声明 类装饰器应用于类构造函数，可以用来监视修改或替换类定义
 * 类装饰器表达式慧子啊运行时被当作函数调用，类的构造函数作为唯一的参数
 * 若类装饰器返回一个值，它会使用提供的构造函数替换类的声明
 */
// 定义@sealed装饰器
function sealed(constructor:() =>void):void {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

class Greeter {
    greeting: string;
    constructor(message:()=>void) {
        console.info(message)
        this.greeting = 'q'
    }
    greet() {
        return 'hello' + this.greeting
    }
}

/**
 * 方法装饰器声明在一个方法的声明之前
 * 它会被应用到方法的属性描述符上，可以用来监视，修改或替换方法的定义
 * 方法装饰器不能用在声明文件，重载或者任何外部上下文中
 * 方案装饰器表达式会在运行时被当作函数调用，传入3个参数：
 *  * 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  * 成员的名字
 *  * 成员的属性描述符
 * 如果方案装饰器返回一个值，它会被用作方法的属性描述符
 */
interface ObjInterface{
    [key:string]:any
}
let obj12: ObjInterface = {}
Object.defineProperty(obj12, 'name', {
    value: 'jim',
    writable: false, // 可写入
    enumerable: true, // 可枚举
    configurable:true // 可配置
})
console.info(obj12.name)

// 控制是否可枚举
function enumerable(bool:boolean) {
    return (target:any, propertyName:string, descriptor: PropertyDescriptor) => {
        console.info(target, propertyName)
        descriptor.enumerable=  bool
    }
}
class K1 {
   greeting: string;
    constructor(message:string) {
        this.greeting = message
    }
    @enumerable(true)
    greet() {
        return 'hello' + this.greeting
    }
}

let k2 = new K1('jim')
console.info(k2)

// for(let key in k2) {
//     console.info(key)
// }

/**
 * 访问器装饰器 声明在一个访问器的声明之前
 * 访问器装饰器应用于访问器的属性描述符并且可以用来监视，修改或替换一个访问器的定义
 */

function enumerable1(bool:boolean) {
    return (target:any, propertyName:string, descriptor: PropertyDescriptor) => {
        console.info(target, propertyName)
        descriptor.enumerable=  bool
    }
}
class Cls {
    private _name:string
    constructor(name:string) {
        this._name = name
    }
    @enumerable1(false)
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
}

/**
 * 属性装饰器
 * 属性描述符不会作为参数传入属性装饰器，这于ts是如何初始化属性装饰器有关
 * 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法，返回值也会被忽略
 * 属性描述符只能用来监视类中是否声明了某个名字的属性
 */
function printPropertyName(target:any,  propertyName: string) {
    console.info(propertyName)
}

class H1{
    @printPropertyName
    public name:string
    constructor(name:string) {
        this.name = name
    }
}

/**
 * 参数装饰器
 * 参数装饰器表达式会在运行时被当作函数被调用 传入3个参数
 *  * 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
 *  * 成员的名字
 *  * 参数在函数参数列表中的索引
 *  返回值会被忽略
 */
function required(target:any, name:string, index: number) {
    console.log(`%c断点监听器 ${index} _ ${name}`, 'color: #43bb88;font-size: 12px;');
}
class I1 {
    public name:string = 'jim'
    public age:number = 19
    getInfo(prefix:string,@required infoType:string):any {
        return prefix + '' + this[infoType]
    }
}
interface I1 {
    [key:string]: string|number|Function
}
let classI = new I1()
classI.getInfo('hihi', 'name')
