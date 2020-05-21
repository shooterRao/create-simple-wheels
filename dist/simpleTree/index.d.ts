import './index.less';
export interface TreeData {
    title?: string;
    expand?: boolean;
    children?: [];
    createNodeContent?: (node: ExtendNode, nodeData: TreeData) => void;
    [key: string]: any;
}
export interface Options {
    baseNode: HTMLElement;
    treeData: TreeData[];
    paddingLeft: number;
    titleKey: string;
    templates: OptTemplate;
    dblclick?: (e: Event, data: TreeData) => {};
    click?: (e: Event, data: TreeData) => {};
    createNodeContent?: (node: ExtendNode, nodeData: TreeData) => void;
}
export interface OptTemplate {
    treeWrapper: string;
    treeBaseNode: string;
    treeNode: string;
    treeGroup: string;
    treeNodeContent: string;
}
export interface SimpleTreeItf {
    opts: Options;
    activeItem: HTMLElement | null;
    destroyed(): void;
    getActiveItem(): HTMLElement | null;
}
export interface ExtendNode extends HTMLElement {
    $$nodeData: TreeData;
    $$transitionendHandle?: any;
}
export default class SimpleTree implements SimpleTreeItf {
    opts: Options;
    activeItem: HTMLElement | null;
    domRefs: any;
    clickHandle: ((e: Event) => void) | null;
    dblclickHandle: ((e: Event) => void) | null;
    static version: string;
    constructor(options: Options);
    /**
     * @method initDom()
     * @param null
     * @return this
     */
    initDom(): SimpleTree;
    /**
     * @method initTree()
     * @description 遍历data,递归生成 ul -> li -> ul
     * @param {Node} group treeGroup(UL)
     * @param {array} data 数据源
     * @param {number} level 层级控制
     * @return null
     */
    initTree(parentNode: HTMLElement, group: HTMLElement, data?: TreeData[], level?: number): void;
    /**
     * @method initState()
     * 初始化状态
     * 处理icon展示和expand属性
     * @return this
     */
    initState(): this;
    /**
     * @method appendBaseNode()
     * 渲染到base节点上
     * @return null
     */
    appendBaseNode(): void;
    /**
     * @method bindEvent()
     * 绑定事件(点击和双击事件)
     * 使用事件委托
     * 包含slide动画效果
     * @return this
     */
    bindEvent(): this;
    /**
     * @method toggleActive()
     * @param  Node treeNodeCon
     * 切换高亮
     */
    toggleActive(treeNodeCon: ExtendNode): void;
    /**
     * @method removeEvent()
     * 清除绑定事件
     * @return null
     */
    removeEvent(): void;
    /**
     * @method getActiveItem()
     * 获取高亮的节点
     * @return Node
     */
    getActiveItem(): HTMLElement | null;
    /**
     * @method destroyed()
     * 销毁Tree节点
     * @return null
     */
    destroyed(): void;
    /**
     * @method toggleExpand()
     * 折叠切换
     * @return null
     */
    static toggleExpand(treeNodeCon: ExtendNode): void;
    /**
     * @method slideAnimate()
     * slide动画
     * @return null
     */
    static slideAnimate(treeNodeCon: HTMLElement): void;
    /**
     * @method transitionendHandle()
     * 过渡事件
     * @return null
     */
    static transitionendHandle(el: ExtendNode): void;
}
