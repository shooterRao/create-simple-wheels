import './index.less';
import { assign, createNode, hasChild } from '../../utils/index';
import animate from '../simpleAnimate/index';

const preClsName = 'simple-tree';

export default class simpleTree {
  constructor(options) {
    const defaultOpts = {
      baseNode: null,
      paddingLeft: 16,
      animateSpeed: 'normal',
      treeData: [],
      frontIconClassName: null, // title前面的icon的className
      dblclick: null,
      click: null,
      createTreeNodeContent: null, // 构造treeNodeContent时的回调函数
      templates: {
        treeWrapper: `<div class="${preClsName} tree-wrapper"></div>`,
        treeBaseNode: '<ul class="tree-base-node"></ul>',
        treeNode: '<li class="tree-node"></li>',
        treeGroup: '<ul class="tree-group"></ul>',
        treeNodeContent: '<div class="tree-node-content"></div>'
      }
    };
    this.opts = assign({}, defaultOpts, options);
    this.domRefs = {};
    this.activeItem = null; // 保存activeItem
    // this.activeTitle = null;
    this.domRefs.treeNodeContents = []; // 收集tree-node-content
    // 在最终渲染之前，先初始化节点、icon、绑定事件
    this.initDom()
      .initState()
      .bindEvent()
      .appendBaseNode();
    return this;
  }

  /**
   * @method initDom()
   * @param null
   * @return this
   */
  initDom() {
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
   * 遍历data,递归生成 ul -> li -> ul
   * @param {Node} group treeGroup(UL)
   * @param {array} data 数据源
   * @param {number} level 层级控制
   * @return null
   */
  initTree(parentNode, group, data, level = 0) {
    let treeNode;
    let treeNodeContent; // li -> div
    // data为空情况下，加个空的ul进去，防止133行报错
    if (data.length === 0) {
      parentNode.appendChild(group);
    }
    for (let i = 0, len = data.length; i < len; i++) {
      // 先创建li
      treeNode = createNode(this.opts.templates.treeNode);
      treeNodeContent = createNode(this.opts.templates.treeNodeContent);
      if (this.opts.frontIconClassName) {
        treeNodeContent.innerHTML = `<span class="tree-node-icon"></span><span class="tree-node-title">${
          data[i].title
        }</span>`;
      } else {
        treeNodeContent.innerHTML = `<span class="tree-node-title">${data[i].title}</span>`;
      }
      // 设置padding
      treeNodeContent.style.paddingLeft = `${level * this.opts.paddingLeft}px`;
      // 把数据加到div节点上，方便点击时查到
      treeNodeContent.nodeData = data[i];
      // 收集treeNodeContent引用
      this.domRefs.treeNodeContents.push(treeNodeContent);
      treeNode.appendChild(treeNodeContent);
      group.appendChild(treeNode);
      parentNode.appendChild(group);
      // let groupLevel = level;
      // if (data[i].folder === true && data[i].children.length >= 0) {
      // console.log(this);
      if (hasChild(data[i])) {
        // groupLevel++;
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
    const { createTreeNodeContent, frontIconClassName } = this.opts;
    for (let i = 0, len = treeNodeContents.length; i < len; i++) {
      const { nodeData } = treeNodeContents[i];
      // 处理icon
      if (hasChild(nodeData)) {
        treeNodeContents[i].setAttribute('role', 'folder');
        treeNodeContents[i].firstChild.classList.add('icon-angle');
        if (nodeData.expand === true) {
          treeNodeContents[i].firstChild.classList.add('down');
          treeNodeContents[i].setAttribute('expand', true);
        } else {
          treeNodeContents[i].nextElementSibling.style.display = 'none';
        }
      } else {
        frontIconClassName.split(' ').forEach(v => {
          treeNodeContents[i].firstChild.classList.add(v);
        });
      }
      createTreeNodeContent && createTreeNodeContent(treeNodeContents[i], nodeData);
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
    this.clickHandle = evt => {
      const e = evt || window.event;
      const target = e.target || e.srcElement;
      const tagName = target.tagName.toLowerCase();
      // 需要判断的核心是treeNodeContent这个div节点
      const treeNodeCon = tagName === 'div' ? target : target.parentNode;
      if (treeNodeCon.hasAttribute('expand')) {
        simpleTree.toggleExpand(treeNodeCon);
      } else if (this.opts.click) {
        this.toggleActive(treeNodeCon);
        this.opts.click(e, treeNodeCon.nodeData);
      }
    };

    // 双击事件
    this.dblclickHandle = evt => {
      const e = evt || window.event;
      const target = e.target || e.srcElement;
      const tagName = target.tagName.toLowerCase();
      const treeNodeCon = tagName === 'div' ? target : target.parentNode;
      if (!treeNodeCon.hasAttribute('role')) {
        // callback
        if (this.opts.dblclick) {
          this.toggleActive(treeNodeCon);
          this.opts.dblclick(e, treeNodeCon.nodeData);
        }
      }
    };

    this.domRefs.treeWrapper.addEventListener('click', this.clickHandle, false);
    this.domRefs.treeWrapper.addEventListener('dblclick', this.dblclickHandle, false);
    return this;
  }

  /**
   * @method toggleActive()
   * @param  Node treeNodeCon
   * 切换高亮
   */
  toggleActive(treeNodeCon) {
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
  static toggleExpand(treeNodeCon) {
    if (treeNodeCon.getAttribute('expand') === 'true') {
      treeNodeCon.firstChild.classList.remove('down');
      treeNodeCon.setAttribute('expand', 'false');
    } else {
      treeNodeCon.firstChild.classList.add('down');
      treeNodeCon.setAttribute('expand', 'true');
    }
    // slide动画
    simpleTree.slideAnimate(treeNodeCon);
  }

  /**
   * @method slideAnimate()
   * slide动画
   * @return null
   */
  static slideAnimate(treeNodeCon) {
    const group = treeNodeCon.nextElementSibling;
    if (treeNodeCon.getAttribute('expand') === 'false') {
      // slideUp
      const { offsetHeight } = group;
      group.style.overflow = 'hidden';
      const opts = {
        to: 0,
        from: offsetHeight,
        during: 200,
        type: 'linear',
        callback(value) {
          group.style.height = `${value}px`;
        }
      };
      animate.play(opts).then(() => {
        group.style.height = '';
        group.style.display = 'none';
        group.style.overflow = '';
      });
    } else {
      // slideDown
      group.style.display = 'block';
      group.style.overflow = 'hidden';
      const { offsetHeight } = group;
      const opts = {
        to: offsetHeight,
        from: 0,
        during: 200,
        type: 'linear',
        callback(value) {
          group.style.height = `${value}px`;
        }
      };
      animate.play(opts).then(() => {
        group.style.height = '';
        group.style.overflow = '';
      });
    }
  }
}

simpleTree.version = '1.1.0';
