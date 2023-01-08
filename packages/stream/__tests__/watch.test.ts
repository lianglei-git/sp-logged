import Entry from '../index';
import Content from './stdoutContent';
import Watch from '../lib/watch';
import path from 'path';
import createObject from 'shared/createObject';
import { appendFile, createWriteStream } from 'fs-extra';
import utils from 'util'

const stream = new Entry();
function base() {
    setInterval(() => {
        stream.write(Content);
    }, 3000)
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