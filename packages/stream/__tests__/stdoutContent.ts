const _Symbol = Symbol('20%');

const _String = '10'

const _Array: any[] = [10, _String, _Symbol, [], Array, Object, Promise];

const _Promise = Promise.resolve(_Array);

const _Object = {_Promise, BigInt, n: BigInt(1e0000)};

const _enum = {
    _Symbol,
    _String,
    arr: _Array,
    _Promise,
    _Object
} 

export default _enum;