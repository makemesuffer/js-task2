console.log('-------------------MAP POLYFILL------------------');

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


//Typical case
const mapArr = [3, 2, 4];
let mapResult = mapPoly(function (elem) {
    return elem * 2;
}, mapArr);
console.log(mapResult);


//A vot map ne ignorit null i undefined
const mapArr2 = [null, undefined, 2, 3];
let mapResult2 = mapPoly(function (elem) {
    return elem * 2;
}, mapArr2);
console.log(mapResult2);


//Array error
const mapArr3 = 'privet';
try {
    let mapResult3 = mapPoly(function (elem) {
        return elem * 2;
    }, mapArr3);
    console.log(mapResult3);
} catch (e) {
    console.log(e.name, 'this is not an array --', mapArr3);
}


//Also array error

const mapArr4 = {a: 2, b: 4};
try {
    let mapResult4 = mapPoly(function (elem) {
        return elem * 2;
    }, mapArr4);
    console.log(mapResult4);
} catch (e) {
    console.log(e.name, 'this is not an array --', mapArr4);
}


// Function error
const mapArr5 = {a: 2, b: 4};
try {
    let mapResult5 = mapPoly('privet', mapArr5);
    console.log(mapResult5);
} catch (e) {
    console.log(e.name, 'this is not a function');
}




