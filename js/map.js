console.log('-------------------MAP POLYFILL------------------');

Array.prototype.map = function (fn) {
    const arr = [];
    let i = 0, l = this.length;
    for (; i < l; i++)
        arr.push(fn(this[i]));
    return arr;
};
let arr1 = [3,2,4];
let result1 = arr1.map(function (elem) {
   return elem+2;
});

console.log(result1);
