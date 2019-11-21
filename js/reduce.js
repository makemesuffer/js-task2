console.log('-------------------REDUCE POLYFILL------------------');

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


//Typical case
const reduceArr = [3, 2, 4];
let reduceResult = reducePoly(reduceArr, (function (current, sum) {
    return sum + current;
}), 0);

console.log(reduceResult);


//Behavior with null and undefined
const reduceArr2 = [null, undefined, 2, 3];
let reduceResult2 = reducePoly(reduceArr2, function (current, sum) {
    return sum + current;
}, 0);
console.log(reduceResult2);


//Array error
const reduceArr3 = 'privet';
try {
    let reduceResult3 = reducePoly(reduceArr3, (function (current, sum) {
        return sum + current;
    }), 0);
    console.log(reduceResult3);
} catch (e) {
    console.log(e.name, 'this is not an array --', filterArr3);
}


//Also array error
const reduceArr4 = {a: 2, b: 4};
try {
    let reduceResult4 = reducePoly(reduceArr4, (function (current, sum) {
        return sum + current;
    }), 0);
    console.log(reduceResult4);
} catch (e) {
    console.log(e.name, 'this is not an array -- ', filterArr4)
}


// Function error
const reduceArr5 = [2, 3, 4];
try {
    let reduceResult5 = reducePoly(reduceArr5, 'privet', 0);
    console.log(reduceResult5);
} catch (e) {
    console.log(e.name, 'this is not a function');
}

