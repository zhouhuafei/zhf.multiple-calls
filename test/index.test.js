const multipleCalls = require('../dist/index.min');

test(`至少调用多次才会触发函数`, () => {
    // 传入正常参数
    let isTrigger = false;
    const mulCalls = multipleCalls(3, function (result) {
        isTrigger = true;
        console.log('result', result); // result { initNum: 3, data: { a: { a: 1 }, b: { b: 2 }, c: { c: 3 } } }
    });
    mulCalls('a', {a: 1}); // isTrigger is false
    mulCalls('b', {b: 2}); // isTrigger is false
    mulCalls('c', {c: 3}); // isTrigger is true

    // 参入非法参数时，第一参数非法会被纠正成1，第二参数非法会被纠正成空函数
    let isTrigger2 = false;
    const mulCalls2 = multipleCalls('非法参数', function (result) {
        isTrigger2 = true;
        console.log('result', result); // result { initNum: 1, data: { a: { a: 1 } } }
    });
    mulCalls2('a', {a: 1}); // isTrigger2 is true

    // 验证
    expect(isTrigger).toBe(true);
    expect(isTrigger2).toBe(true);
});
