## 简单的分页组件

[预览DEMO](http://shooterblog.site/create-simple-wheels/src/simplePagination/index.html)

How to use?

```javascript
import { simplePagination } from 'simplewheels';

const pageNode = document.getElementById("page");
const pager = new simplePagination(20, {
  baseNode: pageNode
});
pageNode.addEventListener("pageChange", function(e) {
  console.log(e.detail.page);
});
```

更多配置信息请参考`index.ts`和`index.html`
