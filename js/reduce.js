const reducePoly = (arr, cb, init) => {
    if (typeof cb !== 'function') {
        throw new TypeError('this is not a function');
    }
    if (!Array.isArray(arr)) {
        throw new TypeError('this is not an array');
    }
    let newArr = init;
    for (let i = 0; i < arr.length; i++) {
        newArr = cb(newArr, arr[i]);
    }
    return newArr;
};


export default reducePoly;
module.exports = reducePoly;
