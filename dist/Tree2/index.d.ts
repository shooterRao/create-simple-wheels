import './index.less';
export interface Options {
    baseNode: HTMLElement;
    treeData: TreeNodeData[];
    paddingLeft: number;
    titleKey: string;
    templates: OptTemplate;
    click?: (data: FlatTreeNode, e?: Event) => {};
    createNodeContent?: (nodeElement: TreeNodeElement, data: FlatTreeNode) => void;
}
export interface TreeNodeData {
    title?: string;
    expand?: boolean;
    selected?: boolean;
    children?: [];
    createNodeContent?: (nodeElement: TreeNodeElement, data: FlatTreeNode) => void;
}
export interface FlatTreeNode {
    nodeData: TreeNodeData;
    _key: number;
    _parentKey?: number;
    _childNodeKeys?: number[];
    _level: number;
    _isFolder: boolean;
}
export interface OptTemplate {
    treeWrapper: string;
    treeNode: string;
    animateNode: string;
}
export interface TreeNodeElement extends HTMLElement {
    $$nodeData: FlatTreeNode;
}
export interface AnimateNodeElement extends HTMLElement {
    $$transitionendHandle?: null | (() => void);
}
export default class SimpleTree2 {
    opts: Options;
    activeNodeKey?: number;
    domRefs: {
        treeWrapper: HTMLElement;
    };
    clickHandle: ((e: Event) => void) | null;
    flatTreeData: FlatTreeNode[];
    static version: string;
    constructor(options: Options);
    /**
     * @method initData
     * @description 初始化数据
     * @return {this}
     */
    initData(): SimpleTree2;
    /**
     * @method initData
     * @description 创建树dom对象
     * @return {this}
     */
    createTree(): SimpleTree2;
    /**
     * @method bindEvent
     * @description 绑定事件, 使用事件委托
     * @return {this}
     */
    bindEvent(): this;
    /**
     * @method mountNode
     * @description 挂载树节点
     */
    mountNode(): void;
    /**
     * @method createTreeNode
     * @description 创建树节点
     * @param {FlatTreeNode} 树节点data
     * @return {TreeNodeElement} 节点dom对象
     */
    createTreeNode(data: FlatTreeNode): TreeNodeElement;
    /**
     * @method toggleExpand
     * @description 折叠切换
     * @param {TreeNodeData} 点击的节点
     */
    toggleExpand(treeNode: TreeNodeElement): void;
    /**
     * @method toggleActive
     * @description 切换高亮
     * @param  {TreeNodeElement} treeNode
     */
    toggleActive(treeNode: TreeNodeElement): void;
    /**
     * @method toggleExpand
     * @description 折叠切换
     * @param {TreeNodeElement} treeNode 点击的节点
     * @param {'down' | 'up'} pos 方向
     * @return null
     */
    slideAnimate(treeNode: TreeNodeElement, pos: 'down' | 'up'): void;
    /**
     * @method collectTreeNodeChildKeyList
     * @description 收集某个节点所有层级的子节点key
     * @param {number[]} childNodeKeys
     * @return {number[]} child
     */
    collectTreeNodeChildKeyList(childNodeKeys: number[]): number[];
    /**
     * @method genFlatTreeData
     * @description 扁平化成一级树结构
     * @param {TreeNodeData} treeData
     * @return {FlatTreeNode[]}
     */
    genFlatTreeData(treeData: TreeNodeData[]): FlatTreeNode[];
    /**
     * @method transitionendHandle
     * @description 过渡事件
     * @return null
     */
    transitionendHandle(animateNode: AnimateNodeElement, treeNode: TreeNodeElement): void;
    /**
     * @method removeEvent
     * @description 清除绑定事件
     */
    removeEvent(): void;
    /**
     * @method findNodeByKey
     * @description 根据节点key在flatTreeData中找对应节点
     * @param {number} key 节点key
     * @returns {FlatTreeNode} 节点对象
     */
    findNodeByKey(key: number): FlatTreeNode;
    /**
     * @method findNodeDomByKey
     * @description 根据节点key在treeWrapper中找对应节点
     * @param {number} key 节点key
     * @returns {TreeNodeElement | null} 节点dom对象 | null
     */
    findNodeDomByKey(key: number): TreeNodeElement | null;
    /**
     * @method destroyed
     * @description 销毁Tree节点
     */
    destroyed(): void;
}
