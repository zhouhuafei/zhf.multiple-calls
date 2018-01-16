const fn = require('./index');
test('至少调用多次才会触发函数', () => {
    let isTrigger = false;
    const mulCalls = fn(3, function (error, result) {
        if (error) {
            console.log('error', error);
            console.log('result', result);
        } else {
            isTrigger = true;
            console.log('result', result);
        }
    });
    mulCalls();
    mulCalls();
    mulCalls();
    expect(isTrigger).toBe(true);
});

