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
            console.log('result', result);
        }
    });
    mulCalls(); // isTrigger is false
    mulCalls(); // isTrigger is false
    mulCalls(); // isTrigger is true
    `,
    () => {
        let isTrigger = false;
        const mulCalls = multipleCalls(3, function (error, result) {
            if (error) {
                console.log('error', error);
                console.log('result', result);
            } else {
                isTrigger = true;
                console.log('result', result);
            }
        });
        mulCalls(); // isTrigger is false
        mulCalls(); // isTrigger is false
        mulCalls(); // isTrigger is true
        expect(isTrigger).toBe(true);
    }
);
