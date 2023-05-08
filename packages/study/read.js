import { open, stat} from 'fs'
import {read} from 'fs-extra'
import {resolve} from 'path'
const filePath  =resolve('./ensureFileSync.js');



// stat(filePath, (err, starts) => {
//     console.log(starts, 'star')
// })
open(filePath, 'r', (err, fd) => {
    if(err) {
        return console.log(err);
    }


    // {
    //     length: 20,
    //     buffer: Buffer(20),
    //     // offset: 1, // offset属性和buffer一起使用，是从buffer第几位开始读取，length不能大雨buffer内容长度减去offset值
    //     position: 10,
    // }
    read(fd, Buffer(20),
    2,
    20,
    10, (err, bytes, buffer)=>{
        
        console.log('read', err, bytes, buffer.toString()
        // .split("\n").length
        )
    })
})
