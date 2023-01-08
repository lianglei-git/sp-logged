import { appendFile, createWriteStream } from 'fs-extra';
import path from 'path';
import createObject from 'shared/createObject';
import utils from 'util';
import Entry from '../index';
import Watch from '../lib/watch';
import Content from './stdoutContent';

const stream = new Entry({
    writeConfig: {
        wsoptions: {
            flags: 'a+'
        }
    },
    watchConfig: { 
        watchOptions: { 
            rootDir: path.resolve('../')
        }
    }
});


function base() {
    setInterval(() => {
        stream.write(Content /**Math.random() + '\n' + '2' */);
    }, 300)
}


base();


// console.log(path.join(__dirname,'../logs'))

// const watch = createObject(Watch, {watchOptions: {file: path.join(__dirname,'../logs')}});


// function testAppendfileForWatch() {
//     const p = path.join(__dirname,'../logs/out-1.log')
    
//     function set(){
//         const str = utils.format(Content) + '\n'; 
//         console.time('a');
//         appendFile(p, str, (err) => {
//             console.log(err);
//         console.timeEnd('a');
//         })
//         console.time('b');
//     const ws = createWriteStream(p)
//         ws.end(str,() => {
//             console.log('????')
//         console.timeEnd('b');
//         })
//     }
    
    
//     setInterval(() => {
//         set()
//     }, 3000)
// }


// testAppendfileForWatch();