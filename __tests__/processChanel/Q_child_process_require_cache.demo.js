


const bs = {
    sex: null,
    init() {
        if(bs.sex) {
            console.log(bs.sex, '共享是u');
            return;
        }
        bs.sex = 'F';
    }
}
module.exports = bs;
