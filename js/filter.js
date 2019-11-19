console.log('-------------------FILTER POLYFILL------------------');

Array.prototype.filter = function (fn) {
    const arr = [];
    let i = 0, l = this.length;
    for (; i < l; i++)
        if (fn(this[i])) arr.push(this[i]);
    return arr;
};

let arr2 = [3,2,4];
let result2 = arr2.filter(function (elem) {
    return elem>2;
});

console.log(result2);