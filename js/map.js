const mapPoly = (fn, arr) => {
    if (typeof fn !== 'function') {
        throw new TypeError('this is not a function');
    }
    if (!Array.isArray(arr)) {
        throw new TypeError('this is not an array');
    }
    const newArr = [];
    let i = 0, l = arr.length;
    for (; i < l; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
};

export default mapPoly;
module.exports = mapPoly;


