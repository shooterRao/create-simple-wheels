import './index.less';
import { assign, createNode, hasChild, nextFrame } from '../utils/index';

const PRECLSNAME = 'simple-tree';
const TRANSITIONEND =
  window.ontransitionend === undefined ? 'webkitTransitionEnd' : 'transitionend';

// 渲染源数据
export interface TreeData {
  title?: string;
  expand?: boolean;
  selected?: boolean;
  children?: [];
  createNodeContent?: (node: ExtendNode, nodeData: TreeData) => void;
  [key: string]: any;
}

// 构造参数
export interface Options {
  baseNode: HTMLElement;
  treeData: TreeData[];
  paddingLeft: number;
  titleKey: string; // 标题取对象哪个字段
  templates: OptTemplate;
  dblclick?: (data: TreeData, e?: Event) => {};
  click?: (data: TreeData, e?: Event) => {};
  createNodeContent?: (node: ExtendNode, nodeData: TreeData) => void;
}

export interface OptTemplate {
  treeWrapper: string;
  treeBaseNode: string;
  treeNode: string;
  treeGroup: string;
  treeNodeContent: string;
}

// 收集相关节点ref
// interface DomRefs<T> {
//   treeNodeContents: T[];
//   treeWrapper: T;
//   treeBaseNode: T;
// }

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

  constructor(options: Options) {
    const defaultOpts = {
      baseNode: null,
      paddingLeft: 16,
      treeData: [],
      frontIconClassName: null, // title前面的icon的className
      titleKey: "title", // 标题取对象哪个字段
      dblclick: null,
      click: null,
      createTreeNodeContent: null, // 构造treeNodeContent时的回调函数
      templates: {
        treeWrapper: `<div class="${PRECLSNAME} tree-wrapper"></div>`,
        treeBaseNode: '<ul class="tree-base-node"></ul>',
        treeNode: '<li class="tree-node"></li>',
        treeGroup: '<ul class="tree-group"></ul>',
        treeNodeContent: '<div class="tree-node-content"></div>'
      }
    };

    this.opts = assign({}, defaultOpts, options);
    this.domRefs = {};
    this.activeItem = null; // 保存activeItem
    this.domRefs.treeNodeContents = []; // 收集tree-node-content

    this.clickHandle = null;
    this.dblclickHandle = null;

    // 在最终渲染之前，先初始化节点、icon、绑定事件
    this.initDom()
      .initState()
      .bindEvent()
      .appendBaseNode();
  }

  /**
   * @method initDom()
   * @param null
   * @return this
   */
  initDom(): SimpleTree {
    if (!(this.opts.treeData instanceof Array)) {
      throw new TypeError('treeData must be an Array!');
    }
    this.domRefs.treeWrapper = createNode(this.opts.templates.treeWrapper);
    this.domRefs.treeBaseNode = createNode(this.opts.templates.treeBaseNode);
    this.initTree(this.domRefs.treeWrapper, this.domRefs.treeBaseNode, this.opts.treeData);
    return this;
  }

  /**
   * @method initTree()
   * @description 遍历data,递归生成 ul -> li -> ul
   * @param {Node} group treeGroup(UL)
   * @param {array} data 数据源
   * @param {number} level 层级控制
   * @return null
   */
  initTree(parentNode: HTMLElement, group: HTMLElement, data?: TreeData[], level:number = 0) {
    let treeNode;
    let treeNodeContent: ExtendNode; // li -> div

    // 缓存 titleKey
    const titleKey = this.opts.titleKey;

    if (!data) return;

    // data为空情况下，加个空的ul进去
    if (data.length === 0) {
      parentNode.appendChild(group);
    }

    for (let i = 0, len = data.length; i < len; i++) {
      // 先创建li
      treeNode = createNode(this.opts.templates.treeNode);
      treeNodeContent = createNode(this.opts.templates.treeNodeContent);

      // 处理节点内容
      // 非叶子节点
      if (hasChild(data[i])) {
        // 是否展开
        const { expand } = data[i];
        // 增加标识
        treeNodeContent.setAttribute('role', 'folder');
        treeNodeContent.innerHTML = `<span class="tree-node-icon icon-angle ${expand &&
          'down'}"></span><span class="tree-node-title">${data[i][titleKey]}</span>`;

        if (expand) {
          treeNodeContent.setAttribute('expand', 'true');
        } else {
          treeNodeContent.setAttribute('expand', 'false');
        }

        // 处理叶子节点
      } else {
        treeNodeContent.innerHTML = `<span class="tree-node-title">${data[i][titleKey]}</span>`;
      }

      // 设置padding
      treeNodeContent.style.paddingLeft = `${level * this.opts.paddingLeft}px`;

      // 把数据加到div节点上，方便点击时查到
      treeNodeContent.$$nodeData = data[i];

      // 收集treeNodeContent引用
      this.domRefs.treeNodeContents.push(treeNodeContent);

      // 装载节点
      treeNode.appendChild(treeNodeContent);
      group.appendChild(treeNode);
      parentNode.appendChild(group);

      // 递归
      if (hasChild(data[i])) {
        const treeGroup = createNode(this.opts.templates.treeGroup);
        this.initTree(treeNode, treeGroup, data[i].children, level + 1);
      }
    }
  }

  /**
   * @method initState()
   * 初始化状态
   * 处理icon展示和expand属性
   * @return this
   */
  initState() {
    const { treeNodeContents } = this.domRefs;
    const { createNodeContent } = this.opts;

    let selectedItem: null | boolean = null;// 避免出现多个 selected 为 true 的节点

    for (let i = 0, len = treeNodeContents.length; i < len; i++) {
      const node: ExtendNode = treeNodeContents[i];
      const { $$nodeData } = node;
      if (hasChild($$nodeData) && !$$nodeData.expand) {
        const nextEle = node.nextElementSibling as HTMLElement;
        nextEle.style.display = 'none';
      }
      if ($$nodeData.createNodeContent && typeof $$nodeData.createNodeContent === 'function') {
        $$nodeData.createNodeContent(node, $$nodeData);
      } else {
        createNodeContent && createNodeContent(node, $$nodeData);
      }

      if ($$nodeData.selected && !selectedItem) {
        this.toggleActive(node);
        this.opts.click && this.opts.click($$nodeData);
        this.opts.dblclick && this.opts.dblclick($$nodeData);
        selectedItem = true;
      }
    }
    return this;
  }

  /**
   * @method appendBaseNode()
   * 渲染到base节点上
   * @return null
   */
  appendBaseNode() {
    this.opts.baseNode.appendChild(this.domRefs.treeWrapper);
  }

  /**
   * @method bindEvent()
   * 绑定事件(点击和双击事件)
   * 使用事件委托
   * 包含slide动画效果
   * @return this
   */
  bindEvent() {
    // 点击事件
    this.clickHandle = (evt: Event) => {
      const e = evt || window.event;
      const target = (e.target || e.srcElement) as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      // 需要判断的核心是treeNodeContent这个div节点
      const treeNodeCon = (tagName === 'div' ? target : target.parentNode) as ExtendNode;
      // 判断是否为展开节点
      if (treeNodeCon.hasAttribute('role')) {
        SimpleTree.toggleExpand(treeNodeCon);
      } else if (this.opts.click) {
        this.toggleActive(treeNodeCon);
        this.opts.click(treeNodeCon.$$nodeData, e);
      }
    };

    // 双击事件
    this.dblclickHandle = (evt: Event): void => {
      const e = evt || window.event;
      const target = (e.target || e.srcElement) as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const treeNodeCon = (tagName === 'div' ? target : target.parentNode) as ExtendNode;
      if (!treeNodeCon.hasAttribute('role')) {
        // callback
        if (this.opts.dblclick) {
          this.toggleActive(treeNodeCon);
          this.opts.dblclick(treeNodeCon.$$nodeData, e);
        }
      }
    };

    this.domRefs.treeWrapper.addEventListener('click', this.clickHandle, false);
    this.opts.dblclick &&
      this.domRefs.treeWrapper.addEventListener('dblclick', this.dblclickHandle, false);

    return this;
  }

  /**
   * @method toggleActive()
   * @param  Node treeNodeCon
   * 切换高亮
   */
  toggleActive(treeNodeCon: ExtendNode) {
    this.activeItem && this.activeItem.classList && this.activeItem.classList.remove('active');
    treeNodeCon.classList.add('active');
    this.activeItem = treeNodeCon;
  }

  /**
   * @method removeEvent()
   * 清除绑定事件
   * @return null
   */
  removeEvent() {
    this.domRefs.treeWrapper.removeEventListener('click', this.clickHandle, false);
    this.domRefs.treeWrapper.removeEventListener('dblclick', this.dblclickHandle, false);
    this.clickHandle = null;
    this.dblclickHandle = null;
  }

  /**
   * @method getActiveItem()
   * 获取高亮的节点
   * @return Node
   */
  getActiveItem() {
    if (this.activeItem) {
      return this.activeItem;
    }
    return null;
  }

  /**
   * @method destroyed()
   * 销毁Tree节点
   * @return null
   */
  destroyed() {
    let i = this.domRefs.treeNodeContents.length;
    while (i--) {
      this.domRefs.treeNodeContents[i] = null;
    }
    this.removeEvent();
    this.domRefs.treeWrapper = null;
    this.opts.baseNode.removeChild(this.opts.baseNode.children[0]);
  }

  /**
   * @method toggleExpand()
   * 折叠切换
   * @return null
   */
  static toggleExpand(treeNodeCon: ExtendNode) {
    const firstChild = treeNodeCon.firstChild as HTMLElement;
    if (treeNodeCon.getAttribute('expand') === 'true') {
      firstChild.classList.remove('down');
      treeNodeCon.setAttribute('expand', 'false');
    } else {
      firstChild.classList.add('down');
      treeNodeCon.setAttribute('expand', 'true');
    }
    this.slideAnimate(treeNodeCon);
  }

  /**
   * @method slideAnimate()
   * slide动画
   * @return null
   */
  static slideAnimate(treeNodeCon: HTMLElement) {
    const group = treeNodeCon.nextElementSibling as ExtendNode;

    if (group !== null) {
      if (!group.$$transitionendHandle) {
        group.$$transitionendHandle = this.transitionendHandle.bind(this, group);
        group.addEventListener(TRANSITIONEND, group.$$transitionendHandle, false);
      }

      const expand = treeNodeCon.getAttribute('expand') === 'true';

      // 展开
      if (!expand) {
        group.style.height = '';
        const height = group.offsetHeight;
        nextFrame(() => {
          group.style.height = `${height}px`;
          nextFrame(() => (group.style.height = '0'));
        });
      } else {
        // 收缩
        group.style.display = '';
        group.style.height = '';
        const height = group.offsetHeight;
        nextFrame(() => {
          group.style.height = '0';
          nextFrame(() => (group.style.height = `${height}px`));
        });
      }
    }
  }

  /**
   * @method transitionendHandle()
   * 过渡事件
   * @return null
   */
  static transitionendHandle(el: ExtendNode) {
    const isShow = el.style.height !== '0px';
    if (isShow) {
      el.style.height = '';
    } else {
      // 如果有2个transition同时进行，最后一个的过渡效果会被影响
      // 因为一旦设了none，transition过渡会立马取消，有一种闪烁感
      // el.style.display = 'none';
    }
    // 执行完解绑
    el.removeEventListener(TRANSITIONEND, el.$$transitionendHandle);
    el.$$transitionendHandle = null;
    delete el.$$transitionendHandle;
  }
}

SimpleTree.version = '3.0.2';
