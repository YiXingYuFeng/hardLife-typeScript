// 布尔类型
let a:Boolean = true;
// 数值类型
let b:Number = 1;
// 字符串类型
let c:String = 'a';
// 数组类型
let d:number[]
d = [1,23]
let e:Array<string>
e = ['a']
let f: Array<string|number>
f = ['1', 1]
let g: (string|number)[]
g = ['1', 1]
// 元组类型  固定长度 固定类型
let h:[string, number, boolean]
h = ['1', 1, false]
// 枚举类型
enum Rules{
    AGE,
    SEX,
    NAME = 99
}

console.info(Rules.NAME)
console.info(Rules[99])
// any 类型
let i: any
i = 'sd'
i = 1
let j: any []
j = ['2', 1 , false]

// void类型 函数没有明确返回值 返回的就是void
const consoleText = (text:string): void => {
    console.log(text);
}
consoleText('123')

// null undefined 类型
let k:null
k=null
let l:undefined
l=undefined

// never 类型 任意类型的子类型
const errorFunc = (message:string):never => {
    throw new Error(message)
}
// object 类型
let obj = {
    name: 'jack'
}
function getObject(ob:object) {
    console.info(ob)
}
getObject({})
// 类型断言
let getLength = (target:string|number):number => {
    if((<string>target).length || (target as string).length === 0) {
        return (target as string).length
    } else {
        return  target.toString().length
    }
}
getLength('a')
