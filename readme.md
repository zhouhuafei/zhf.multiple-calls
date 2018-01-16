# sku
```
let isTrigger = false;
const mulCalls = fn(3, function (error, result) {
    if (!error) {
        isTrigger = true;
        console.log('result', result);
    }
});
mulCalls(); // isTrigger is false
mulCalls(); // isTrigger is false
mulCalls(); // isTrigger is true
```
