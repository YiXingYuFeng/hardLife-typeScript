enum Status {
    Uploading,
    Success,
    Failed
}

console.info(Status.Uploading) // 输出为：0
console.info(Status.Success)

// 反向映射
console.info(Status[0])

// 异构枚举
enum Result {
    Faild
}

const enum Animals {
    dog = 1
}
const enum ResCode {
    SuccessCode = 0,
    ErrorCode = 500
}
let abc = ResCode.SuccessCode
