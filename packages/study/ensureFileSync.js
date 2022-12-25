// const fs = require('');
import fs from 'fs-extra'


fs.ensureFileSync('./a/b/c/app.js') // ==》 ok


fs.createWriteStream('./a/c/v/l.js');

function c(params) {
    params.age = 20
}

function b() {
    const obj = Object.freeze({age: 92});
    c({age: 92});
}



b();

