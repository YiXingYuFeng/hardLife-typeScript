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
 *
 */
