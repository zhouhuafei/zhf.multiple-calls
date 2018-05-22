'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
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
    function multipleCalls() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

        if (isNaN(Number(num)) || num <= 1) {
            num = 1;
        }
        if (Object.prototype.toString.call(fn).slice(8, -1).toLowerCase() !== 'function') {
            fn = function fn() {};
        }
        var result = {
            initNum: num,
            data: {}
        };
        return function (k, v) {
            num--;
            if (k) {
                result.data[k] = v;
            }
            if (num <= 0) {
                fn(result);
            }
        };
    }

    return multipleCalls;
});