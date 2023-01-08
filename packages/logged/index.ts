/// <reference path="global.d.ts" />
import Stream from 'stream/index';
import createObject from 'shared/createObject'
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
                str: conetnt
            });
        }
    }
})


setInterval(() => {
    reStream.write(Math.random())
}, 4000)