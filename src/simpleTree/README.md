## 树组件 (轻松渲染3000+节点)

[预览DEMO](http://shooterblog.site/create-simple-wheels/src/simpleTree/index.html)

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
const tree = new simpleTree({
  baseNode: document.getElementById('tree'),
  treeData: treeData,
  titleKey: "title", // 读取节点data哪个字段渲染title
  click(event, data) {

  },
  dblclick(event, data) {

  },
  createNodeContent(node, nodeData) {
    // node => dom节点
    // nodeData => 构造节点传入的数据
  }
})
```

更多配置信息请参考`index.js`和`index.html`
