

/** 数组转元组 */
declare function ft1<T extends unknown[]>(t: T): T;
declare function ft2<T extends unknown[]>(t: T): readonly [...T];
declare function ft3<T extends unknown[]>(t: [...T]): T;
declare function ft4<T extends unknown[]>(t: [...T]): readonly [...T];

ft1(['hello', 42]);  // (string | number)[]
ft2(['hello', 42]);  // readonly (string | number)[]
ft3(['hello', 42]);  // [string, number]
ft4(['hello', 42]);  // readonly [string, number]

/**
 * this的特别用法
 * +++++++++++++++++++++++++++++
    function tmpk({callback = () => []}) {
        this.k = 10;
    }
    tmpk({
        callback() {
            this// 实现指向tmpk函数
        }
    })
 *
 * =============================
 * 实现
    class Getsize {
        size = 10
        constructor(public props: Props) {
            // props.callback.bind(this)
            props.callback('')
        }
    }
    type Props = {callback(k: string): any} & ThisType<Getsize>;

    new Getsize({
        callback() {
        //   return this
            // console.log(this)
            this.size
        }
    })
 *
 * 参考
 * Typescript 中的 this](https://zhuanlan.zhihu.com/p/104565681)
 */






    // https://jkchao.github.io/typescript-book-chinese/tips/metadata.html#%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC%E5%92%8C%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5



type F = <T extends unknown[]>(source: [...T], cb: (params: T) => void) => void;

const watcher: F = (source, cb) => {
    // source[0]
   type llll =  typeof source[3];
   const a:llll = '';
    cb(source)

};

const arr = [1, 'hello', { a: 1 }];

watcher(arr, (params) => {
    // params[0]
});