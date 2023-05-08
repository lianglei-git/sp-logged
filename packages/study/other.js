import path from 'path';



const pathDefault = 'a/b/c/l.js';


console.log(path.dirname(pathDefault), path.basename(pathDefault), path.extname(pathDefault),
 path.parse(pathDefault));