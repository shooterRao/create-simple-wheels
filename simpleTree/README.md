## 简单的树组件

How to use?

```javascript
var tree = new simpleTree({
  baseNode: document.getElementById('tree'),
  treeData: treeData,
  frontIconClassName: 'icon-wd', // 文字前面的className
  animateSpeed: 'fast', // 折叠动画速度
  click: function (event, data) {
    console.log(data);
    }
  })
```

更多配置信息请参考`index.js`和`index.html`

[预览DEMO](http://shooterblog.site/create-simple-wheels/simpleTree/index.html) 