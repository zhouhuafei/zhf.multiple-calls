const multipleCalls = require('../dist/index.min');

test(
    `
    let isTrigger = false;
    const mulCalls = multipleCalls(3, function (error, result) {
        if (error) {
            console.log('error', error);
            console.log('result', result);
        } else {
            isTrigger = true;
            console.log('result', result); // result { initNum: 3, data: { a: { a: 1 }, b: { b: 2 }, c: { c: 3 } } }
        }
    });
    mulCalls('a', {a: 1}); // isTrigger is false
    mulCalls('b', {b: 2}); // isTrigger is false
    mulCalls('c', {c: 3}); // isTrigger is true
    `,
    () => {
        let isTrigger = false;
        const mulCalls = multipleCalls(3, function (error, result) {
            if (error) {
                console.log('error', error);
                console.log('result', result);
            } else {
                isTrigger = true;
                console.log('result', result); // result { initNum: 3, data: { a: { a: 1 }, b: { b: 2 }, c: { c: 3 } } }
            }
        });
        mulCalls('a', {a: 1}); // isTrigger is false
        mulCalls('b', {b: 2}); // isTrigger is false
        mulCalls('c', {c: 3}); // isTrigger is true
        expect(isTrigger).toBe(true);
    }
);
