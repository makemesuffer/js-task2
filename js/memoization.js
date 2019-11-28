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

module.exports = memoize;

export default memoize;
