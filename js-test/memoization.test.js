const memoize = require('../js/memoization');

describe('testing memoize function',()=>{
    it('should test cache of memoize', () => {
        const objReturn = obj => obj;
        const t = memoize(objReturn);
        const obj1 = {a:1,b:2};
        t(obj1);
        const obj2 = {a:1,b:2};
        expect(obj2).toStrictEqual(obj1); //potomu cho parsit
    });
    //Еще один тест придумай желательно
});
