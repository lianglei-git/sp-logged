import { appendFile, createWriteStream } from 'fs-extra';
import path from 'path';
import createObject from 'shared/createObject';
import utils from 'util';
import Entry from '../index';
import Watch from '../lib/watch';
import Content from './stdoutContent';



//   setTimeout(() => {
//     process.exit()
//   }, 5000)
const stream = new Entry({
    writeConfig: {
        wsoptions: {
            flags: 'a+'
        }
    },
    watchConfig: { 
        watchOptions: { 
            rootDir: path.resolve(__dirname, '../logs')
        },
        fileChange(event, pathLike, conetnt) {
            console.log(event, pathLike, conetnt)
        }
    }
});


function base() {
    setInterval(() => {
        // stream.write(/** Content */ Math.random() + '\n' + '2' );
        stream.write(Content);
    }, 10000)
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