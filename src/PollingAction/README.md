## 简单的轮询工具类

[预览 DEMO](http://shooterblog.site/create-simple-wheels/src/simplePollingAction/index.html)

> 请打开直接看文件源码

How to use?

```javascript
import { simplePollingAction } from 'simplewheels';

const callback = () => {
  console.log(666);
};

const poll = new simplePollingAction(callback, 1000, true);
poll.start();
setTimeout(() => {
  poll.cancel();
}, 5000);
});
```

更多配置信息请参考`index.ts`和`index.html`
