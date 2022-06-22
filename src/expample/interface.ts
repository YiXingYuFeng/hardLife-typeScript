
// 定义接口
interface NameInfo {
    firstName: string,
    lastName: string
}
const getName = ({firstName, lastName}: NameInfo)=> {
    return `${firstName} ${lastName}`
}

getName({firstName: '1', lastName: '10'})

// 可选参数
interface Vegetables {
    color?: string,
    type: string,
    [props: string] :any
}
const getVegetables = ({color, type}: Vegetables) => {
    return color + type
}
getVegetables({ type: '22'})
/**
 * 多余属性检查
 */
/**
 * 1： 通过类型断言
 * getVegetables({ type: '22', size: '2222'} as Vegetables)
 */
/**
 * 2： 在接口设置  [props: string] :any
 *  getVegetables({ type: '22', size: '2222'})
 */
/**
 *  3: 类型兼用性
 *
 */

const VegetablesInfo = {
    type: 'dasd',
    color: 'das',
    size: 'das'
}
getVegetables(VegetablesInfo)

// 设置属性的只读模式

interface ColorType {
    readonly  color: string,
    size: string
}
const testFunction = ({color, size}: ColorType) => {
    return {
        color: color,
        size: size
    }
}

testFunction({color: '1', size: '2'})


// 数组设置为只读模式
interface ArrInter{
    0: number,
    readonly 1: string
}
let arr:ArrInter = [1, 'a']
// arr[1] = 'dsada'

// 接口定义为函数形式 -> 类型别名
interface AddFunc{
    (num1: number, num2: number): number
}

const add:AddFunc = (n1,n2) => n1+ n2


// 索引类型
interface Role{
    [id:string]:string,
}
const role2:Role = {
    a: 'admin',
    1: 'admin'
}

// 接口的继承
interface Common{
    color: string
}
interface Tomato  extends  Common{
    color: string,
    size: number
}
interface Carrot{
    color: string,
    length: number
}
const tomato: Tomato = {
    color: 'e31',
    size: 112321
}
console.info(tomato)
// 函数添加属性
interface Counter{
    ():void,
    count: number
}
const getCounter = (): Counter => {
    const c = () => { c.count ++}
    c.count = 0
    return c
}

console.info(c)

