export  interface  FuncInterface {
    name:string,
    (arg:number) :string
}
export class ClassA {
    constructor() { console.info('a')}
}
class ClassD {
    constructor() {
        console.info('d')
    }
}
export {ClassD}
export {ClassD as ClassNameD}


export * from './b'

// 到处部分内容
