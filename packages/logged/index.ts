/// <reference path="global.d.ts" />
import Stream from '@splogged/stream';
import testContent from '@splogged/stream/__tests__/stdoutContent'
import createObject from '@splogged/shared/createObject'
import path from 'path';
import Gl from './ject-ws'
const private_ws = Gl.instance()


const reStream = createObject(Stream, {
    writeConfig: {
        wsoptions: {
            flags: 'a+'
        },
        
    },
    watchConfig: { 
        watchOptions: { 
            rootDir: path.resolve(__dirname, './logs')
        },
        fileChange(event:string, pathLike: string, conetnt:string) {
            console.log(event, pathLike, conetnt)
            private_ws.emit('log_msg', {
                id: pathLike,
                message: conetnt
            });
        }
    }
})


setInterval(() => {
    reStream.write(testContent)
}, 4000)