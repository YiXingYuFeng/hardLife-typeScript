/**
 * 交叉类型
 * 将多个类型合并为一个类型
 * 若多个类型重复，取最后一个为准
 */
let advance1 = <T, U> (arg1:T,arg2:U): T & U => {
    let res = {} as T & U
    res = Object.assign(arg1, arg2)
    console.info(res)
    return res
}
advance1({a: 'a'}, {a: 'b'})

/**
 * 联合类型 表示一个值可以是几种类型之一 通常使用 ｜ 分隔
 */

let advance2 = (arg1: string | number | boolean):number => {
    if(typeof arg1 === 'string') return 0
    else  return  1
}

advance2(3)

/**
 * 类型保护
 */
interface Bird{
    fly():void;
    layEggs():void;
}
interface Fish {
    swim():void;
    layEggs():void;
}
// function getSmallPet(): Fish | Bird{}
//
// let pet = getSmallPet()
//
// pet.layEggs();
// (<Fish>pet).swim();

/**
 * 类型保护
 * 1: 类型谓词 parameterName is Type
 * parameterName 必须来自于当前函数签名中的一个参数名
 */
// function isFish(pet: Fish | Bird) : pet is Fish {
//     return (<Fish> pet).swim !== undefined
// }
// if(isFish(pet)) {
//     pet.swim()
// } else {
//     pet.fly()
// }
/**
 * 类型保护
 * 2: typeof 类型保护只有两种形式能被识别：
 *  typeof v === 'typename' || typeof v !== 'typename'
 *  支持类型：number string boolean symbol
 */
function padLeft(val:string, pad: string | number) {
    if(typeof pad === 'number') return 'number'
    else return 'string'
    throw  new Error('Expected string or number, got '+ pad)
}

/**
 * 类型保护
 * 3: instanceof 类型保护是通过构造函数来细化类型的一种方式
 */
interface Padder{
    getPaddingString():string
}
class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
        return  Array(this.numSpaces + 1).join(" ");
    }
}
class StringPadder implements Padder{
    constructor(private value:string) {
    }
    getPaddingString() {
        return this.value
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder('a')
}
let padder:Padder = getRandomPadder()
console.info(padder instanceof  SpaceRepeatingPadder)
console.info(padder instanceof  StringPadder)

/**
 * 类型别名
 *  会给一个类型起一个新名字
 *  可作用于原始值、联合类型、元祖以及其他任何需手写的类型
 */
type Address = string
type AddressResolver = () => string
type AddressOrResolver = Address | AddressResolver
function getAddress(n:AddressOrResolver) {
    if(typeof n === "string")  return 'string'
    else return n()
}


type Container<T> = {value: T}
type Tree<T> = {
    value: T,
    left: Tree<T>
}
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}
// todo 声明后异常报错
let jm: LinkedList<Person>;
// let s1 = jm.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;
// console.info(s1)
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

/**
 * 字面量类型
 * 允许制定字符串必须的固定值
 */
type Easing = 'easy-in' | 'easy-out' | 'easy in out'

function getStringFunc(arg: Easing) {
    return arg
}
getStringFunc('easy-in')

// 用于函数重载
// function createElement(tagName: 'img'): HtmlImageElement;
// function createElement(tagName: 'input'):HtmlInputElement;
function createElement(tagName:string):string{
    return '<div></div>'
}
createElement('img')
/**
 * 数字字面量类型
 */
type MaxSize = 28
interface ManJ {
    sex: MaxSize
}
let testJ : ManJ = {
    sex: 28
}

/**
 * 可辨识联合
 * * 具有普通单例类型属性
 * * 一个类型别面包含那些类型的联合
 */
interface Square{
    // @ts-ignore
    kind: "squares",
    size: number
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'circle',
    size: number,
    radius: number
}
// kind 可辨识的特征/标签
type Shape = Square | Rectangle | Circle

// function area(s:Shape) {
//     switch (s.kind){
//         case "circle":
//             return 'circle';
//             break;
//         case "rectangle":
//             return 'rectangle';
//             break;
//         case "squares":
//             return 'square';
//             break;
//     }
// }

/**
 * 完整性检查
 * * 开启 strictNullChecks 配置 但其对旧代码支持不好
 * * 使用never
 */
function assertNever(x:never):never{
    throw new Error('Unexpected object:' + x)
}

// function area1(s:Shape) {
//     switch (s.kind){
//         case "circle":
//             return 'circle';
//             break;
//         case "rectangle":
//             return 'rectangle';
//             break;
//         default: return assertNever(s)
//     }
// }

/**
 * 多态 this 类型
 * 表示的是某个包含类或接口的子类型
 */
class BasicCalculator{
    public constructor(protected val:number = 0) {}
    public currentValue():number{
        return this.val
    }
    public add(operand:number):this {
        this.val += operand
        return this
    }
    public multiply(operand:number) :this {
        this.val *= operand
        return this
    }
}
let v = new BasicCalculator(2)
console.info(v.add(8))
console.info(v.multiply(8))
console.info(v.currentValue())

// 由于之前的 BasicCalculator 使用了this类型，新的类可以直接使用之前的方法
class ScientificCalculator extends BasicCalculator {
    public constructor(val:number = 0) {
        super(val);
    }
    public sin() {
        this.val = Math.sin(this.val)
        return this
    }
}
let lol = new ScientificCalculator(10)
console.info(lol.currentValue())
console.info(lol.multiply(2))
/**
 * 索引类型
 * * 索引类型查询操作符 keyof T
 */
function pluck<T, K extends keyof T>(o: T, name:K []): T[K][] {
    return name.map(n => o[n])
}
interface Person {
    name:string,
    age: number
}
let ptp:Person ={
    name:'ptp',
    age: 40
}
let string1:string[] = pluck(ptp, ['name'])
console.info(string1)
/**
 * 映射类型
 */

