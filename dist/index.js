'use strict';

/**
 * @description 至少调用num次才会触发函数的执行
 * @param {Number} num - 数字
 * @param {Function} fn - 函数
 * */
function multipleCalls(num, fn) {
    var result = {
        initNum: num,
        data: {}
    };
    var error = null;
    if (isNaN(Number(num)) || Object.prototype.toString.call(fn).slice(8, -1).toLowerCase() !== 'function') {
        num = 0;
        error = {
            message: '参数错误'
        };
    }
    if (num <= 0) {
        fn(error, result);
    }
    return function (k, v) {
        num--;
        if (k) {
            result.data[k] = v;
        }
        if (num <= 0) {
            fn(error, result);
        }
    };
}

module.exports = multipleCalls;