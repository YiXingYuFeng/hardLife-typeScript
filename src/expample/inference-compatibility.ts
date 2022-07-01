// 类型推论
let name1 = 'jack'
// name1 = 134

interface InfoInterface {
    name: string
}
let jack: InfoInterface
let jack1 = {name: 'jack'}
let jack2 = {age: 'jack'}
let jack3 = {name: 'jack',sex: 'woman'}

jack = jack3
console.info(jack)

/**
 * 函数兼容性
 */

// 参数个数
let x = (a:number) => 0
let y=  (a:number, b:number) => 0
y = x
// x =y  后面的参数个数必须小于等于前面的

// 参数类型
let xy = (a:number) => 0
let yx = (a:string) => 0
// xy = yx

// 函数参数双向协变
let funA = (arg:number|string):void => {}
let funB = (arg:number):void => {}
funB = funA

// 枚举类型兼容
enum StatusInterface {
    on,
    off
}
let ss = StatusInterface.on
ss = 0
interface Data<T> {
    data: T
}
let data1: Data<number>
let data2: Data<string>
// data1 = data2
