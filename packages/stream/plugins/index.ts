// 要实现html与log的相互转换， 写流和读流都要做

/**
 * 插件实现参考 
 * function example(next, logs) {
 *    const __ = logs.replace(/\w\W/, 'ppp').split('__')
 *    process.nextTick(() => next(__));
 * }
 */

// 标准输出的插件
const toStdoutPlugin = (next:any, logs:any) => {
    console.log(logs, 'v_enum_enum_enum')
    next(logs);
}

// 转换成html格式的
const transformHtmlPlugin = (next: any, logs: any) => {
    next(logs)
}

// 控制台输出 要有颜色吧
const toControlPlugin = (next:any, logs: any) => {

}

// 需要有个控件发送邮件吧
const toEmailPlugin = (next:any, logs:any) => {

}

// 数据库写入， 使用sqlite3把
// 使用子进程写入 或者工作线程
const writeSQLPlugin = (next:any, log: any) => {

}


// 暂时没有用处
const transformLinePlugin = () => {

}

// 定义一下 log文件内容格式
// 方便解析的
/**
 * 时间、等级、类型、信息
 * 1. ==> [2022-12-11:9:30] [严重] [Err] 信息体
 * 2.  
 */

export {
    transformLinePlugin,
    toStdoutPlugin,
    transformHtmlPlugin
}