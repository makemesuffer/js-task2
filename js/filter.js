const filterPoly = (fn, arr) => {
    if (typeof fn !== 'function') {
        throw new TypeError('this is not a function');
    }
    if (!Array.isArray(arr)) {
        throw new TypeError('this is not an array');
    }
    const newArr = [];
    let i = 0, l = arr.length;
    for (; i < l; i++) {
        if (fn(arr[i])) {
            if (arr[i] !== void 0 || arr[i] !== null) {
                newArr.push(arr[i]);
            }
        }
    }

    return newArr;
};

export default filterPoly;

module.exports = filterPoly;





