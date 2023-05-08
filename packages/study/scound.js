let b = [
    (log = [10], next) => {
        console.log('开了呢？', log[0])
        setTimeout(() => {
            next(log[0]);
        }, 2000)
    },
    (k, next) => {
        console.log(k[0]);
       
        setTimeout(() => {
            next(k[0] + 10);
        }, 2000)
    },
    (k, next) => {
        console.log(k[0]);
        setTimeout(() => {
            console.log('结束了？？？');
            next(k[0])
        }, 2000)
    }
]

let a = b.map((callback, index) => {
    return function() {
        callback(arguments.length == 0 ? void 0 : arguments, a[index + 1] ?? a[0])
    }
})
console.log(a[0]())


// function p(k = 10) {
//     console.log(k);
// };

// function d() {
//     return p(arguments.length == 0 ?  void 0 : arguments)
// }
// d();