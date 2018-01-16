# sku
* 使用 npm  下载包
```
npm i --save-dev zhf.multiple-calls
```

* 案例
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
