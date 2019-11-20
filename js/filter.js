console.log('-------------------FILTER POLYFILL------------------');

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

//Typical case
const filterArr = [3, 2, 4];
let filterResult = filterPoly(function (elem) {
    return elem > 2;
}, filterArr);
console.log(filterResult);


//Ignoring null and undefined
const filterArr2 = [null, undefined, 2, 3];
let filterResult2 = filterPoly(function (elem) {
    return elem > 2;
}, filterArr2);
console.log(filterResult2);


//Array error
const filterArr3 = 'privet';
try {
    let filterResult3 = filterPoly(function (elem) {
        return elem;
    }, filterArr3);
    console.log(filterResult3);
} catch (e) {
    console.log(e.name, 'this is not an array --', filterArr3);
}


//Also array error
const filterArr4 = {a: 2, b: 4};
try {
    let filterResult4 = filterPoly(function (elem) {
        return elem > 2;
    }, filterArr4);
    console.log(filterResult4);
} catch (e) {
    console.log(e.name, 'this is not an array -- ', filterArr4)
}


// Function error
const filterArr5 = [2, 3, 4];
try {
    let filterResult5 = filterPoly('privet', filterArr5);
    console.log(filterResult5);
} catch (e) {
    console.log(e.name, 'this is not a function');
}








