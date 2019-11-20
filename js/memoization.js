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
        //dodelai
    }
};

/*
const sum = (a, b) => {
    return a + b;
};

let example = memoize(sum);

console.log(example(2, 3));
console.log(example(2, 3));
console.log(example(2, 5));
console.log(example(5, 2));
*/

const objFun = (obj) => {
    return obj;
};

let eje = memoize(objFun);
let neEje = memoize(objFun);

console.log(eje({a: 5, b: 6}));
console.log(eje({a: 5, b: 6}));
console.log(neEje({a: 5, b: 6}));


/*
const a = {
    a: {l: 3,},
    b:4,
};
const b ={
    a: {l: 4,},
    b:4,
};

            if (args > 1) {
                for (let m = 0; m < args.length; m++) {
                    if (typeof args[m] === "object") {
                        for (let i = 0; i < cache.length; i++) {
                            if (typeof cache[i] === "object") {
                                let che = cache[i];
                                let kavo = args[m];
                                let counter = 0;
                                for (let k = 0, l = 0; k <= che.length, l <= kavo.length; k++, l++) {
                                    if (kavo[l] === che[k]) {
                                        counter++;
                                    }
                                    if (counter === kavo.length || counter === che.length) {
                                        console.log('blin cached');
                                        return cache[args];
                                    }
                                }
                            }
                        }
                    }
                }
            } else

*/