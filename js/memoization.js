console.log('-----------------MEMOIZATION--------------------');
let memoize = (fn) => {
    let cache = {};
    return function (...args) {
        const fix = JSON.stringify(args);
        if (cache[fix]) {
            console.log('cached');
            return cache[fix];
        } else {
            console.log('to be cached');
            let res = fn.apply(this, args);
            cache[fix] = res;
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

