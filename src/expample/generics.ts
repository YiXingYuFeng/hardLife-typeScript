const getArray = <T>(value: T, times: number = 5): T[] =>{
    return new Array(times).fill(value)
}
// console.info(getArray<number>(1, 1))

// 两个泛型变量的使用

const getArrays = <T, U>(params1: T, params2: U, times: number = 5): [T, U][] => {
        return new Array(times).fill([params1, params2])
}
getArrays(1,'2', 3).map(item => {
    // console.info(item[0])
    // console.info(item[1].length)
})

// 泛型在类型定义中使用

// 泛型在函数中的使用
let getArrayÁ:<T>(arg: T, times: number) => T[]
getArrayÁ = (arg:any,times:number)=> {
    return new Array(times).fill(arg)
}
// type GetArray = <T>(args: T, times: number)=> T{}

type GetArray = <T>(args: T, times:number) => T[]

// 泛型变量的继承
interface LengthType {
    length: number
}
let testA = <T extends LengthType>(args: T):T[]=> {
    return  []
}
// 泛型 约束
let testB = <T, K extends keyof T>(args: T, times: K) => {
    return args[times]
}
