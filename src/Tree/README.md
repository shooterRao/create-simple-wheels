## 树组件 (支持渲染3000+节点)

[预览DEMO](http://shooterblog.site/create-simple-wheels/src/Tree/index.html)

### 功能清单

- 支持默认选中节点，对应节点`selected`字段
- 支持默认展开，对应节点`expand`字段
- 支持自定义渲染节点内容
- 支持单击选中或者双击选中
- 支持空目录

How to use?

`Options`参数

```ts
interface SimpleTreeOptions {
  baseNode: HTMLElement;
  treeData: TreeData[];
  paddingLeft: number;
  titleKey: string; // 标题取对象哪个字段
  dblclick?: (data: TreeData, e?: Event) => {};
  click?: (data: TreeData, e?: Event) => {};
  createNodeContent?: (node: ExtendNode, nodeData: TreeData) => void;
}
```

```javascript
import { simpleTree } from 'simplewheels';

const tree = new simpleTree({
  baseNode: document.getElementById('tree'),
  treeData: treeData,
  titleKey: "title", // 读取节点data哪个字段渲染title
  // 单击和双击，最好只选一种
  click(data, event) {

  },
  dblclick(data, event) {

  },
  createNodeContent(node, nodeData) {
    // node => dom节点
    // nodeData => 构造节点传入的数据
  }
})
```

更多配置信息请参考`index.ts`和`index.html`
