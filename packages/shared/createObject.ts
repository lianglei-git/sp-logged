// 实验🧪 ···················· ···················· ····················
/**
 * 目的： 
 * const a = [10, '', true, Promise.resolve()];
 * 转换为⬇️
 * type AutoUp = [number, string, boolean, PromiseConstructor] 
 |  
 | 1. 通过typeof输出为 => （string | number | boolean | Promise<void>)[]
 | 2. 通过 readonly 或 as const 转换为成了固定类型...
 */

if(false) { /** 类型测试 */

    // type GetRestType<T> =  T extends
    let a = [10, '', true, Promise.resolve()];

    type b = readonly [... typeof a]
    let c: b = ['', '', false, Promise.resolve()];
    console.log(c);


    function trans<T extends unknown[]>(args: [...T]): [...T] {
        return [...args];
    }

    type UnionToIntersection<U> = (U extends any ? (a: (k: U) => void) => void : never) extends (a: infer I) => void ? I : never;
    type UnionLast<U> = UnionToIntersection<U> extends (a: infer I) => void ? I : never;
    type UnionToTuple<U> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, UnionLast<U>>>, UnionLast<U>];

    type SliceOne<T extends any[]> = T extends [any, ...infer R] ? R : never

    type SliceOneRests<T> = SliceOne<UnionToTuple<T>>

    // 网上找的
    // type F = <T extends unknown[]>(source: [...T], cb: (params: [...T]) => void) => void;

    // const watcher: F = (source, cb) => {};

    // const arr = [1, 'hello', { a: 1 }];

    // watcher(arr, (params) => {
    //     params[2]
    // });

    // function all(): pet is Fish  {

    // }

    ////////////////
    type P = {
        name: 10
    }
    // const obj:P = {}
    // const mm = [obj, 1]
    // type D = typeof mm

    // function kkk(...args: [P, number]) {

    // }
    // type kis = P | number;
    // type l = keyof kis;
    //////////////////

    // const tuple = <T extends unknown[]>(...args: T) => args;

    // const abs = tuple(...a)
    // type lll = typeof abs
    // const mm = [10,'',true]
    // type p =   (typeof mm)[number]
    // type n = UnionToTuple<p>
    // SliceOneRests
    // function createObject<T>(constr: new (...args: SliceOneRests<typeof arguments[0]>) => T, ...args: SliceOneRests<typeof arguments[0]>): T {
    //     return new constr(...args)
    // };



    class Ps {
        constructor(k: [boolean], v: string) {
            console.log(k, v)
        }
        getname() {

        }
    }

    const p = createObject(Ps, [false], '是的');

    type abs = <T extends unknown[] = unknown[]>(k: [...T]) => T;

    // fail
    type bnm = <L, >(k: L extends [any, ...infer R] ? R : never) => any

    // 

    type bgm = <A extends new (...args: any) => any, B>(P: A extends new (...params: any) => any ? A : new (params: B) => any, paramsArr: B) => any

    type bgm2 = <A extends new (...args: any) => any, B>
        (P: A extends new (...params: any) => any ? A : new (params: B) => any,
            ...paramsArr: B[]) => any

    const getjsk: bgm2 = function (Ctr, ...Params) {
        return new Ctr(...Params);
    }

    class Tmp {
        constructor(ks: string, kl: boolean) {

        }
    }

    // getjsk(Tmp, '', false);









    // function id<T, B extends unknown[]>(callback: (...args:B)=>{}, ...rest:B) {
    //     return callback(...rest);
    //   }

    //   id((a,b,c) => {

    //   },true, [], {})





    {


        class Tmp {
            constructor(ks: string, kl: boolean) {

            }
            aaa() {

            }
        }

        type PropsType<T> = T extends new (...args: infer P) => any ? P : never;

        // type bgm = <A extends new(...args: any[]) => any>(k: A, ...rest:PropsType<A>) => A
        type bgm = <A, P extends any[] = PropsType<A>>(k: new (...a: P) => A, ...rest: P) => A


        const getjsk: bgm = function (Ctr, ...Params) {
            return new Ctr(...Params);
        }

        let b = getjsk(Tmp, '00', false);

    }




}

type PropsType<T> = T extends new (...args: infer P) => any ? P : never;

function createObject<C, P extends any[] = PropsType<C>>(constr: new (...ar: P) => C, ...args: P): C {
    return new constr(...args)
};


export default createObject;
