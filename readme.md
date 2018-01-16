# 至少调用多次才会触发函数
```
const multipleCalls = require('zhf.multiple-calls');
let isTrigger = false;
const mulCalls = multipleCalls(3, function (error, result) {
    if (!error) {
        isTrigger = true;
        console.log('result', result);
    }
});
mulCalls(); // isTrigger is false
mulCalls(); // isTrigger is false
mulCalls(); // isTrigger is true
```
