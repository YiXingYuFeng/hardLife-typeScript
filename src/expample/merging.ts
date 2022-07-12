/**
 *  定义接口
 *  接口的非函数成员类型应该是唯一的，非唯一且类型不同会报错
 *  函数类型的，会被当成重载
 */
interface InfoInter {
    name: string
}
interface InfoInter{
    age: number,
}
let infoInter: InfoInter
infoInter ={
    age: 10,
    name: 'jin'
}
/**
 * 命名空间和类的合并，类必须放在命名空间之前
 * 合并后 相当于 在类上增加了一个静态属性
 */
