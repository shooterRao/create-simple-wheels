## 简单的轮询工具类

[预览 DEMO](http://shooterblog.site/create-simple-wheels/src/simplePollingAction/index.html)

> 请打开直接看文件源码

How to use?

方法一： 全局引入 `<script src="../dist/simplePollingAction.js"></script>`
接着引入下面的方法

方法二：AMD

```javascript
define([simplePollingAction], function(simplePollingAction) {
  引入下面方法;
});
```

```javascript
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

更多配置信息请参考`index.js`和`index.html`
