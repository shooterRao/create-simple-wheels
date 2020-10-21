import './index.less';
import { createNode, hasChild, nextFrame } from '../utils/index';

// 构造参数
export interface Options {
  baseNode: HTMLElement;
  treeData: TreeNodeData[];
  paddingLeft: number;
  titleKey: string; // 标题取对象哪个字段
  templates: OptTemplate;
  click?: (data: FlatTreeNode, e?: Event) => {};
  createNodeContent?: (nodeElement: TreeNodeElement, data: FlatTreeNode) => void;
}

// 渲染源数据
export interface TreeNodeData {
  title?: string;
  expand?: boolean;
  selected?: boolean;
  children?: [];
  createNodeContent?: (nodeElement: TreeNodeElement, data: FlatTreeNode) => void;
}

// 扁平化树的节点数据
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

// dom对象新增属性加$$
export interface TreeNodeElement extends HTMLElement {
  $$nodeData: FlatTreeNode;
}

export interface AnimateNodeElement extends HTMLElement {
  $$transitionendHandle?: null | (() => void);
}

const PRECLSNAME = 'simple-tree';
const TRANSITIONEND =
  window.ontransitionend === undefined ? 'webkitTransitionEnd' : 'transitionend';

export default class SimpleTree2 {
  opts: Options;
  activeNodeKey?: number;
  domRefs: {
    treeWrapper: HTMLElement;
  };
  clickHandle: ((e: Event) => void) | null;
  flatTreeData: FlatTreeNode[];
  static version: string;

  constructor(options: Options) {
    const defaultOpts = {
      baseNode: null,
      paddingLeft: 16,
      treeData: [],
      titleKey: 'title', // 标题取对象哪个字段
      createTreeNodeContent: null, // 构造treeNodeContent时的回调函数
      templates: {
        treeWrapper: `<div class="${PRECLSNAME} tree-wrapper"></div>`,
        treeNode: `<div class="tree-node"></div>`,
        animateNode: `<div class="animate-node"></div>`
      }
    };

    this.opts = { ...defaultOpts, ...options };
    this.domRefs = {
      treeWrapper: createNode(this.opts.templates.treeWrapper)
    };

    this.clickHandle = null;
    this.flatTreeData = [];

    this.initData().createTree().bindEvent().mountNode();
  }

  /**
   * @method initData
   * @description 初始化数据
   * @return {this}
   */
  initData(): SimpleTree2 {
    if (!(this.opts.treeData instanceof Array)) {
      throw new TypeError('treeData must be an Array!');
    }

    this.flatTreeData = this.genFlatTreeData(this.opts.treeData);
    return this;
  }

  /**
   * @method initData
   * @description 创建树dom对象
   * @return {this}
   */
  createTree(): SimpleTree2 {
    const wrapperNode = this.domRefs.treeWrapper;
    const renderData = this.flatTreeData;

    // 收集不渲染的节点
    const unableRenderNodes: number[] = [];

    for (let i = 0; i < renderData.length; i++) {
      // 如果目录节点收缩，叶子节点全部不渲染
      const renderNodeData = renderData[i];
      const { nodeData, _isFolder, _key } = renderNodeData;
      const { expand } = nodeData;

      if (_isFolder) {
        // 如果该目录节点不渲染，也需要收集它的叶子节点
        if (!expand || unableRenderNodes.indexOf(_key) !== -1) {
          const { _childNodeKeys } = renderNodeData;
          _childNodeKeys && _childNodeKeys.forEach((key) => unableRenderNodes.push(key));
        }
      }

      if (unableRenderNodes.indexOf(_key) !== -1) {
        continue;
      }

      const treeNode = this.createTreeNode(renderNodeData);
      wrapperNode?.appendChild(treeNode);
    }

    return this;
  }

  /**
   * @method bindEvent
   * @description 绑定事件, 使用事件委托
   * @return {this}
   */
  bindEvent() {
    // 点击事件
    this.clickHandle = (evt: Event) => {
      const target = evt.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      // 需要判断的核心是treeNodeContent这个div节点
      const treeNode = (tagName === 'div' ? target : target.parentNode) as TreeNodeElement;
      // 判断是否为展开节点
      if (treeNode.$$nodeData._isFolder) {
        this.toggleExpand(treeNode);
      } else if (this.opts.click) {
        this.toggleActive(treeNode);
        this.opts.click(treeNode.$$nodeData, evt);
      }
    };

    this.domRefs.treeWrapper?.addEventListener('click', this.clickHandle, false);

    return this;
  }

  /**
   * @method mountNode
   * @description 挂载树节点
   */
  mountNode() {
    const baseNode = this.opts.baseNode;
    this.domRefs.treeWrapper && baseNode.appendChild(this.domRefs.treeWrapper);
  }

  /**
   * @method createTreeNode
   * @description 创建树节点
   * @param {FlatTreeNode} 树节点data
   * @return {TreeNodeElement} 节点dom对象
   */
  createTreeNode(data: FlatTreeNode): TreeNodeElement {
    // 缓存 titleKey
    const titleKey = this.opts.titleKey;

    const { paddingLeft, createNodeContent } = this.opts;
    const { nodeData, _isFolder, _key } = data;
    const { expand } = nodeData;

    const treeNode: TreeNodeElement = createNode(this.opts.templates.treeNode);

    Object.defineProperty(treeNode, '$$nodeData', {
      value: data
    });

    treeNode.dataset.nodekey = _key.toString();

    if (_isFolder) {
      treeNode.innerHTML = `<span class="tree-node-icon icon-angle ${
        expand && 'down'
      }"></span><span class="tree-node-title">${nodeData[titleKey]}</span>`;
      treeNode.style.paddingLeft = `${data._level * paddingLeft}px`;
    } else {
      treeNode.innerHTML = `<span class="tree-node-title">${nodeData[titleKey]}</span>`;
      treeNode.style.paddingLeft = `${data._level * paddingLeft}px`;
    }

    // 节点对象createNodeContent优先
    if (nodeData.createNodeContent) {
      nodeData.createNodeContent(treeNode, data);
    } else if (createNodeContent) {
      createNodeContent(treeNode, data);
    }

    if (nodeData.selected) {
      treeNode.classList.add('active');
      this.activeNodeKey = data._key;
    }

    return treeNode;
  }

  /**
   * @method toggleExpand
   * @description 折叠切换
   * @param {TreeNodeData} 点击的节点
   */
  toggleExpand(treeNode: TreeNodeElement) {
    const firstChild = treeNode.firstChild as HTMLElement;
    const { $$nodeData } = treeNode;

    if ($$nodeData.nodeData.expand) {
      firstChild.classList.remove('down');
      $$nodeData.nodeData.expand = false;
      this.slideAnimate(treeNode, 'up');
    } else {
      firstChild.classList.add('down');
      $$nodeData.nodeData.expand = true;
      this.slideAnimate(treeNode, 'down');
    }
  }

  /**
   * @method toggleActive
   * @description 切换高亮
   * @param  {TreeNodeElement} treeNode
   */
  toggleActive(treeNode: TreeNodeElement) {
    if (this.activeNodeKey) {
      const oldKey = this.activeNodeKey;
      const oldNode = this.findNodeDomByKey(oldKey) as TreeNodeElement;
      const oldNodeData = this.findNodeByKey(oldKey);
      oldNodeData && (oldNodeData.nodeData.selected = false);
      oldNode && oldNode.classList.remove('active');
    }

    this.activeNodeKey = treeNode.$$nodeData._key;
    const newNode = this.findNodeDomByKey(this.activeNodeKey) as TreeNodeElement;
    const newNodeData = this.findNodeByKey(this.activeNodeKey);
    newNodeData && (newNodeData.nodeData.selected = true);
    newNode && newNode.classList.add('active');
  }

  /**
   * @method toggleExpand
   * @description 折叠切换
   * @param {TreeNodeElement} treeNode 点击的节点
   * @param {'down' | 'up'} pos 方向
   * @return null
   */
  slideAnimate(treeNode: TreeNodeElement, pos: 'down' | 'up') {
    const { _childNodeKeys } = treeNode.$$nodeData;
    const childKeyList = _childNodeKeys && this.collectTreeNodeChildKeyList(_childNodeKeys);
    const animateNode = createNode(this.opts.templates.animateNode) as AnimateNodeElement;

    Object.defineProperty(animateNode, '$$transitionendHandle', {
      value: () => this.transitionendHandle(animateNode, treeNode),
      writable: true,
      configurable: true
    });

    animateNode.$$transitionendHandle &&
      animateNode.addEventListener(TRANSITIONEND, animateNode.$$transitionendHandle, false);

    if (pos === 'up') {
      childKeyList &&
        childKeyList.forEach((key) => {
          const ele = this.findNodeDomByKey(key);
          ele && animateNode.appendChild(ele);
        });

      if (animateNode.children.length === 0) {
        return;
      }

      nextFrame(() => {
        treeNode.insertAdjacentElement('afterend', animateNode);
        const height = animateNode.offsetHeight;
        animateNode.style.cssText = `transition: height 0.3s ease;overflow: hidden;`;
        animateNode.style.height = `${height}px`;
        nextFrame(() => (animateNode.style.height = '0'));
      });
    }

    if (pos === 'down') {
      childKeyList &&
        childKeyList.forEach((key) => {
          const data = this.findNodeByKey(key);
          const ele = this.createTreeNode(data);
          animateNode.appendChild(ele);
        });

      if (animateNode.children.length === 0) {
        return;
      }

      nextFrame(() => {
        treeNode.insertAdjacentElement('afterend', animateNode);
        const height = animateNode.offsetHeight;
        animateNode.style.cssText = `transition: height 0.3s ease;overflow: hidden;`;
        animateNode.style.height = '0';
        nextFrame(() => (animateNode.style.height = `${height}px`));
      });
    }
  }

  /**
   * @method collectTreeNodeChildKeyList
   * @description 收集某个节点所有层级的子节点key
   * @param {number[]} childNodeKeys
   * @return {number[]} child
   */
  collectTreeNodeChildKeyList(childNodeKeys: number[]) {
    const flatTreeData = this.flatTreeData;
    const list: number[] = [];
    function _collect(nodeKeys) {
      nodeKeys.forEach((nodeKey) => {
        const node = flatTreeData[nodeKey];
        if (node._childNodeKeys) {
          list.push(nodeKey);
          if (node.nodeData.expand === true) {
            _collect(node._childNodeKeys);
          }
        } else {
          list.push(nodeKey);
        }
      });
    }
    _collect(childNodeKeys);
    return list;
  }

  /**
   * @method genFlatTreeData
   * @description 扁平化成一级树结构
   * @param {TreeNodeData} treeData
   * @return {FlatTreeNode[]}
   */
  genFlatTreeData(treeData: TreeNodeData[]): FlatTreeNode[] {
    const flatTree: FlatTreeNode[] = [];
    let keyCount = 0;

    function _flat(node: TreeNodeData, parent?: FlatTreeNode, level = 0) {
      const key = keyCount++;
      flatTree[key] = {
        nodeData: node,
        _key: key,
        _level: level,
        _isFolder: false
      };
      if (parent && parent._key >= 0) {
        flatTree[key]._parentKey = parent._key;
        flatTree[parent._key]._childNodeKeys?.push(key);
      }

      if (hasChild(node)) {
        flatTree[key]._isFolder = true;
        flatTree[key]._childNodeKeys = [];
        node.children?.forEach((child) => _flat(child, flatTree[key], level + 1));
      }
    }

    treeData.forEach((rootNode) => {
      _flat(rootNode);
    });

    return flatTree;
  }

  /**
   * @method transitionendHandle
   * @description 过渡事件
   * @return null
   */
  transitionendHandle(animateNode: AnimateNodeElement, treeNode: TreeNodeElement) {
    const isShow = animateNode.style.height !== '0px';

    if (isShow) {
      for (let i = animateNode.children.length - 1; i >= 0; i--) {
        treeNode.insertAdjacentElement('afterend', animateNode.children[i]);
      }
      this.domRefs.treeWrapper.removeChild(animateNode);
    } else {
      this.domRefs.treeWrapper.removeChild(animateNode);
    }

    // 执行完解绑
    animateNode.$$transitionendHandle &&
      animateNode.removeEventListener(TRANSITIONEND, animateNode.$$transitionendHandle);
    animateNode.$$transitionendHandle = null;
    delete animateNode.$$transitionendHandle;
  }

  /**
   * @method removeEvent
   * @description 清除绑定事件
   */
  removeEvent() {
    this.clickHandle && this.domRefs.treeWrapper.removeEventListener('click', this.clickHandle, false);
    this.clickHandle = null;
  }

  /**
   * @method findNodeByKey
   * @description 根据节点key在flatTreeData中找对应节点
   * @param {number} key 节点key
   * @returns {FlatTreeNode} 节点对象
   */
  findNodeByKey(key: number): FlatTreeNode {
    return this.flatTreeData[key];
  }

  /**
   * @method findNodeDomByKey
   * @description 根据节点key在treeWrapper中找对应节点
   * @param {number} key 节点key
   * @returns {TreeNodeElement | null} 节点dom对象 | null
   */
  findNodeDomByKey(key: number): TreeNodeElement | null {
    return this.domRefs.treeWrapper.querySelector(`div[data-nodekey='${key}']`);
  }

  /**
   * @method destroyed
   * @description 销毁Tree节点
   */
  destroyed() {
    this.flatTreeData = [];
    this.removeEvent();
    this.opts.baseNode.removeChild(this.domRefs.treeWrapper);
  }
}

SimpleTree2.version = '1.0';
