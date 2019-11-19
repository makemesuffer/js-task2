let memoize = (fn) => {
    let cache = {};
    return function (...args) {
        if (args in cache) {
            console.log('cached');
            return cache[args];
        }
        else {
            console.log('to be cached');
            let res = fn.apply(this, args);
            cache[args] = res;
            return res;
        }
    }
};

const sum = (a,b) =>{
    return a+b;
};

let example = memoize(sum);

console.log(example(2,3));
console.log(example(2,3));
console.log(example(2,5));
console.log(example(5,2));