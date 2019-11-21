console.log('-----------------MEMOIZATION--------------------');
let memoize = (fn) => {
    let cache = {};
    return function (...args) {
        if (undefined in args || null in args || NaN in args) {
            throw new TypeError('undefined ili null ili NaN uberi!')
        }
        if (args in cache) {
            console.log('cached');
            return cache[args];
        } else {
            console.log('to be cached');
            let res = fn.apply(this, args);
            cache[args] = res;
            return res;
        }
    }
};

const sum = (a, b) => {
    return a + b;
};

let example = memoize(sum);

console.log(example(2, 3));
console.log(example(2, 3));



const objFun = (obj) => {
    return obj;
};

let eje = memoize(objFun);
let neEje = memoize(objFun);

console.log(eje({a: 5, b: 6}));
console.log(eje({a: 5, b: 6}));
console.log(neEje({a: 5, b: 6}));

