(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('multipleCalls', function () {
    /**
     * @description 至少调用num次才会触发函数的执行
     * @param {Number} num - 数字
     * @param {Function} fn - 函数
     * */
    function multipleCalls(num, fn) {
        const result = {
            initNum: num,
            data: {},
        };
        let error = null;
        if (isNaN(Number(num)) || Object.prototype.toString.call(fn).slice(8, -1).toLowerCase() !== 'function') {
            num = 0;
            error = {
                message: '参数错误',
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

    return multipleCalls;
});
