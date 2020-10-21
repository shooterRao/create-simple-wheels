## simpleTree2

simpleTree的改进版，比simpleTree初始化渲染快**50%**

在初始化渲染**3000个**子节点情况下，simpleTree平均需要**140ms**

simpleTree2只需要**70ms**

[预览DEMO](http://shooterblog.site/create-simple-wheels/src/Tree2/index.html)

### 功能清单

- 支持默认选中节点，对应节点`selected`字段
- 支持默认展开，对应节点`expand`字段
- 支持自定义渲染节点内容
- 支持单击选中
- 支持空目录

How to use?

`Options`参数

```ts
interface SimpleTree2Options {
  baseNode: HTMLElement;
  treeData: TreeNodeData[];
  paddingLeft: number;
  titleKey: string; // 标题取对象哪个字段
  click?: (data: FlatTreeNode, e?: Event) => {};
  createNodeContent?: (nodeElement: TreeNodeElement, data: FlatTreeNode) => void;
}
```

```javascript
import { simpleTree2 } from 'simplewheels';

const tree = new simpleTree2({
  baseNode: document.getElementById('tree'),
  treeData: treeData,
  titleKey: "title", // 读取节点data哪个字段渲染title
  click({ nodeData }, event) {

  },
  createNodeContent(node, { nodeData }) {
    // node => dom节点
    // nodeData => 构造节点传入的数据
  }
})
```

### TODO

- 虚拟滚动

更多配置信息请参考`index.ts`和`index.html`
