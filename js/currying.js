console.log('-------------------CURRYING------------------');
const curry = (fn) => {
    let parameters = fn.length;
    return function func(...args) {
        if (args.length >= parameters) return fn(...args);
        else return function (...argss) {
            let newArgs = args.concat(argss);
            return func(...newArgs);
        }
    }
};

const summa = (a, b) => {
    return a + b;
};

let test = curry(summa);

console.log(test(2, 4));
console.log(test(1));
console.log(test(2)(3));
console.log(test(5, 3, 4));

