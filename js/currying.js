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

module.exports = curry;

export default curry;
