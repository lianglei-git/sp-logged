import createObject from 'shared/createObject'
import Write from '../lib/write'
import { describe, it, vi } from 'vitest';

const examples_ws = (ws: any) => {
    // ws.write(ws);
    ws.write({ name: 'Nikos' }, 32, 'ball');
    ws.write([Promise.resolve('10'), Symbol('92'), Symbol('__'), new Set([{ kiss: false }])], BigInt(10), Array(Array([])));
    ws.write(null)
    ws.write(undefined)
    ws.write(() => [])
}

const created = () => {



    const ws = createObject(Write, {
        path: process.cwd() + '/logs/cout.log',
        maxFileSize: 1000 * 15,
        wsoptions: {
            flags: 'a+'
        }
    });

    return ws;

}



describe.skip('wirte', () => {
    // 如果文件写入过大，则新建文件
    const ws = created();

    it('如果文件过大，则新建文件', () => {
        vi.useFakeTimers();
        Array(10).fill(0).map(() => ws.write(ws))
        console.log('直接执行的')
        vi.runAllTimers();

        setTimeout(() => {
            console.log('2秒之后执行的');
            ws.destory();
        }, 2000)

        vi.advanceTimersToNextTimer()
    })


    it.skip('clear_private_config.stream', () => {
        ws.flush();
        ws.destory();
    })
})



