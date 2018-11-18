## 简单的树组件

[预览DEMO](http://shooterblog.site/create-simple-wheels/simpleTree/index.html) 

How to use?

方法一： 全局引入 `<script src="../dist/simpleTree.js"></script>`
接着引入下面的方法

方法二：AMD 

```javascript
define([simpleTree], function(simpleTree){
  
  引入下面方法

})
```

```javascript
var tree = new simpleTree({
  baseNode: document.getElementById('tree'),
  treeData: treeData,
  frontIconClassName: 'icon-wd', // 文字前面的className
  animateSpeed: 'fast', // 折叠动画速度
  click: function(event, data) {

  },
  dblclick: function(event, data) {

  },
  createTreeNodeContent: function(node, nodeData) {
    // node => dom节点
    // nodeData => 构造节点传入的数据
  }
})
```

更多配置信息请参考`index.js`和`index.html`
