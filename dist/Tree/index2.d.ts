import './index2.less';
export interface Options {
    baseNode: HTMLElement;
    treeData: TreeNodeData[];
    paddingLeft: number;
    titleKey: string;
    templates: OptTemplate;
    click?: (data: FlatTreeNode, e?: Event) => {};
    createNodeContent?: (node: TreeNodeElement, nodeData: TreeNodeData) => void;
}
export interface TreeNodeData {
    title?: string;
    expand?: boolean;
    selected?: boolean;
    children?: [];
    createNodeContent?: (node: TreeNodeElement, nodeData: FlatTreeNode) => void;
}
export interface FlatTreeNode {
    nodeData: TreeNodeData;
    _nodeKey: number;
    _parentKey?: number;
    _childNodeKeys?: number[];
    _level: number;
    _isFolder: boolean;
}
export interface OptTemplate {
    treeWrapper: string;
    treeNode: string;
}
export interface TreeNodeElement extends HTMLElement {
    $$nodeData: FlatTreeNode;
    $$transitionendHandle?: any;
}
export default class SimpleTree {
    opts: Options;
    activeItem: HTMLElement | null;
    domRefs: {
        treeWrapper?: HTMLElement;
    };
    clickHandle: ((e: Event) => void) | null;
    flatTreeData: FlatTreeNode[];
    static version: string;
    constructor(options: Options);
    /**
     * @method init()
     * @param null
     * @return {this}
     */
    init(): SimpleTree;
    renderTree(): SimpleTree;
    createTreeNode(data: FlatTreeNode): TreeNodeElement;
    mountNode(): void;
    /**
     * @method bindEvent()
     * 绑定事件(点击和双击事件)
     * 使用事件委托
     * 包含slide动画效果
     * @return this
     */
    bindEvent(): this;
    toggleExpand(treeNode: TreeNodeElement): void;
    toggleActive(treeNode: TreeNodeElement): void;
    /**
     * @method genFlatTreeData()
     * @description 扁平化成一级树结构
     * @param {TreeNodeData} treeData
     * @return {FlatTreeNode[]}
     */
    genFlatTreeData(treeData: TreeNodeData[]): FlatTreeNode[];
}
