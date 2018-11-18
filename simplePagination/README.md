## 简单的分页组件

[预览DEMO](http://shooterblog.site/create-simple-wheels/simplePagination/index.html)

How to use?

方法一： 全局引入 `<script src="../dist/simplePagination.js"></script>`
接着引入下面的方法

方法二：AMD 

```javascript
define([simplePagination], function(simplePagination){
  
  引入下面方法

})
```

```javascript
const pageNode = document.getElementById("page");
const pager = new simplePagination(20, {
  baseNode: pageNode
});
pageNode.addEventListener("pageChange", function(e) {
  console.log(e.detail.page);
});
```

更多配置信息请参考`index.js`和`index.html` 
