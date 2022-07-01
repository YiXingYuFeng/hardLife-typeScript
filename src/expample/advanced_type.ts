// 交叉类型 &
let mergeFunc = <T, U>(arg1: T, arg2:U) : T & U => {
    let res = {} as T & U
    res = Object.assign(arg1,arg2)
    return res
}
console.info(mergeFunc({a: 'a'}, {b: 1}))

// 联合类型
const getLengthFc = (content: string | number):number => {
    if(typeof content === 'string') {
        return  0
    } else {
        return  1
    }
}
// 类型保护
let valueList = [123,'a']
let getRandom = () => {
    const num = Math.random() * 10
    if(num < 5) return valueList[0]
    else return valueList[1]
}

let item = getRandom()
// 类型保护 方式1
function isString(value: number | string) : value is string {
    return typeof value === 'string'
}
// if((item as string).length) console.info('string')
// else console.info('number')

if(isString(item)) console.info('string')
else console.info('number')

/**
 * null undefined 任何类型的子类型
 */

/**
 * 类型别名 需要使用联合类型和元祖类型
 * 接口 用于拓展使用接口
 */
type TypeString = string
let str: TypeString

type Pod<T> = {x: T, y: T}
let pod1:Pod<number> = {
    x: 1,
    y: 1
}
console.info(pod1)
// 类型嵌套用法
type ChildT<T> = {
    current: T,
    child?: ChildT<T>
}
let cc: ChildT<string> = {
    current: 'a',
    child: {
        current: 'a',
    }
}
/**
 * 字面量类型
 *  字符串字面量
 *  数值字面量
 */
type Name = 'jack'
const nameI:Name = 'jack'
// 联合类型 字符串字面量
type Direction = 'a' | 'b' | 'c'

function getString(arg:Direction) {
    return arg.substr(0,1)
}
getString('a')

// 数字字面量类型
type Age = 18
interface InfoType {
    name: string,
    age: Age
}
let _info:InfoType = {
    name: 'jim',
    age: 18
}

// 可辨识联合 要素
// 1： 具有普通的单例类型属性
// 2： 一个类型别名包含哪些类型的联合
interface Square {
    kind: ''
}

/**
 * this 类型的使用
 */
class Counter {
    constructor(public count:number = 0) {
        console.info('a')
    }
    public add(value:number) {
        this.count += value
        return this
    }
    public subtract(value:number) {
        this.count -= value
        return this
    }
}
let counter1 = new Counter(10)
console.info(counter1.add(3).subtract(2))

class PowCounter extends Counter {
    constructor(public count:number = 0) {
        super(count);
    }
    pow(value:number) {
        this.count = this.count ** value
        return this
    }
}
let powCounter = new PowCounter(10)
console.info(powCounter.pow(2).add(100))

/**
 * 类型
 */
interface InterfaceNum {
    name:string,
    age:number
}
let infoProp:keyof InterfaceNum
infoProp = 'name'

// [] 索引访问操作符

type NameTypes = InterfaceNum['name']

function getProperty<T, k extends keyof T>(o: T, name: k): T[k] {
    return o[name]
}
// 结合接口
interface Objs<T> {
    [key:number]: T
}
let keys:keyof Objs<number>

// 映射类型
interface InfoUser {
    name:string;
    age: number;
    sex: string;
}
type UserAttribute <T> = {
    readonly [p in keyof T]?: T[p]
}
/** 内置的映射类型
 * Partial
 * Readonly
 * Pick
 * Record 将属性转换为其他值
 */
// type UserMap = UserAttribute<InfoUser>
type UserMap = Partial<InfoUser>
let info11:UserMap = {
    name: '1',
    age:1
}

// info11.name = '1321321'

/**
 * unknown 任何类型都可以赋值给unknown类型
 * 4：unknown 与任何其他类型组成的交叉类型最后等于其他类型
 * 5：unknown 与任何其他类型组成的联合类型都等于unknown类型 （除 any)
 * 6：never类型是unknown的子类型
 * 7: keyof unknown 等于类型never
 * 8: 只能对unknown等或不等操作，不能进行其他操作
 * 9: unknown类型的值不能访问它的属性，作为函数调用和作为类 创建实例
 * 10：使用映射类型时类型是unknown则不会映射任何属性
 */

/**
 * 条件类型
 */
type Types2<T> = T extends string ? string: boolean
let index:Types2<false>

// 分布式条件类型
type TypeName<T> = T extends any ? T :never
type Type3 = TypeName<string|number>

type TypeName1<T> = T extends string ? string : ''


type Diff<T, U> = T extends U ? never : T

type Test = Diff<string|number|boolean, undefined|number>


/**
 * 条件类型和映射类型结合
 */
type Type7<T> = {
    [k in keyof T]: T[k] extends (()=> void) ? k : never
}[keyof T] // 获取T的属性名
interface Part {
    id:number;
    name:string;
    subParts(newName: string) : void;
    updatePart(newName: string) : void
}

type Test1 = Type7<Part>

/**
 * 条件类型 的 类型推断
 */
type Type8<T> = T extends any[] ? T[number] : T

type Test2 = Type8<string[]>
// let q1:Test2 = 99
type Test3 = Type8<string>

// type Type9<T> = T extends any[]<infer U> ? U : T

// Exclude 从T中剔除可以赋值给U的类型。
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">

/**
 * Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
 * Extract<T, U> -- 提取T中可以赋值给U的类型。
 * NonNullable<T> -- 从T中剔除null和undefined。
 * ReturnType<T> -- 获取函数返回值类型。
 * InstanceType<T> -- 获取构造函数类型的实例类型。
 */
