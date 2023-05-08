

/**
 * Project of info that Console.log
 * @param _ any[]
 * @returns undefined
 */
async function log(..._: any[]) {
    const sleep = (time: number) => new Promise(res => setTimeout(res, time));
    const isPop = typeof arguments[arguments.length - 1] == 'object'
    const options = isPop ? arguments[arguments.length - 1] : {};
    const originOptions = {
        every: false,
        time: 0,
        isStdout: false,
        ...options
    }
    const args: any[] = isPop ? Array.from(arguments).splice(0, arguments.length - 1) : Array.from(arguments)
    if(originOptions.isStdout) {
        await sleep(originOptions.time);
        process.stdout.write(args + '');
        return void 0;
    }
    if (originOptions.every) {
        const couts = args + '';//.join('').split('');
        for(let i = 0; i < couts.length; i++) {
            await sleep(originOptions.time);
            process.stdout.write(couts[i]);
        }
    } else {
       await sleep(originOptions.time);
       console.log(...args);
    }
}


export default log;