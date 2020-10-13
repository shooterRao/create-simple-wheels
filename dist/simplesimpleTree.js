(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.simplesimpleTree = factory());
}(this, function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".simple-tree.tree-wrapper {\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.simple-tree.tree-wrapper ul {\n  list-style: none;\n}\n.simple-tree.tree-wrapper .tree-base-node:hover {\n  cursor: pointer;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-group {\n  transition: height 0.3s ease;\n  overflow: hidden;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content {\n  transition: color 0.3s, background 0.3s;\n  line-height: 36px;\n  height: 36px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content:hover {\n  background: #ecf5ff;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content .tree-node-title {\n  padding-left: 3px;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content.active {\n  color: #2d8cf0;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content.active {\n  background: #ecf5ff;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content .tree-node-icon.icon-angle {\n  display: inline-block;\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  margin-left: 6px;\n  margin-right: 3px;\n  border: 5px solid transparent;\n  border-right-width: 0;\n  border-left-width: 6px;\n  border-left-color: #000;\n  transform: rotate(0);\n  transition: transform 0.3s ease;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content .tree-node-icon.icon-angle.down {\n  transform: rotate(90deg);\n}\n";
  styleInject(css);

  /**
   * 对象浅拷贝
   * @param {Object} target
   * @returns {Object}
   */
  var assign = Object.assign
      ? Object.assign
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                  }
              }
          }
          return target;
      };
  /**
   * createNode
   * @param {String} htmlStr
   * @returns {DomNode}
   */
  var createNode = function (htmlStr) {
      var div = document.createElement('div');
      div.innerHTML = htmlStr;
      return div.childNodes[0];
  };
  var hasChild = function (nodeData) {
      if (nodeData.children == null) {
          return false;
      }
      // 空目录支持
      if (nodeData.children.length === 0) {
          return true;
      }
      return nodeData.children.length > 0;
  };
  // 下一帧执行
  var nextFrame = function (fn) {
      if (window.requestAnimationFrame) {
          window.requestAnimationFrame(fn);
      }
      else {
          window.setTimeout(fn, 16);
      }
  };

  var PRECLSNAME = 'simple-tree';
  var TRANSITIONEND = window.ontransitionend === undefined ? 'webkitTransitionEnd' : 'transitionend';
  var SimpleTree = /** @class */ (function () {
      function SimpleTree(options) {
          var defaultOpts = {
              baseNode: null,
              paddingLeft: 16,
              treeData: [],
              frontIconClassName: null,
              titleKey: "title",
              dblclick: null,
              click: null,
              createTreeNodeContent: null,
              templates: {
                  treeWrapper: "<div class=\"" + PRECLSNAME + " tree-wrapper\"></div>",
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
      SimpleTree.prototype.initDom = function () {
          if (!(this.opts.treeData instanceof Array)) {
              throw new TypeError('treeData must be an Array!');
          }
          this.domRefs.treeWrapper = createNode(this.opts.templates.treeWrapper);
          this.domRefs.treeBaseNode = createNode(this.opts.templates.treeBaseNode);
          this.initTree(this.domRefs.treeWrapper, this.domRefs.treeBaseNode, this.opts.treeData);
          return this;
      };
      /**
       * @method initTree()
       * @description 遍历data,递归生成 ul -> li -> ul
       * @param {Node} group treeGroup(UL)
       * @param {array} data 数据源
       * @param {number} level 层级控制
       * @return null
       */
      SimpleTree.prototype.initTree = function (parentNode, group, data, level) {
          if (level === void 0) { level = 0; }
          var treeNode;
          var treeNodeContent; // li -> div
          // 缓存 titleKey
          var titleKey = this.opts.titleKey;
          if (!data)
              return;
          // data为空情况下，加个空的ul进去
          if (data.length === 0) {
              parentNode.appendChild(group);
          }
          for (var i = 0, len = data.length; i < len; i++) {
              // 先创建li
              treeNode = createNode(this.opts.templates.treeNode);
              treeNodeContent = createNode(this.opts.templates.treeNodeContent);
              // 处理节点内容
              // 非叶子节点
              if (hasChild(data[i])) {
                  // 是否展开
                  var expand = data[i].expand;
                  // 增加标识
                  treeNodeContent.setAttribute('role', 'folder');
                  treeNodeContent.innerHTML = "<span class=\"tree-node-icon icon-angle " + (expand &&
                      'down') + "\"></span><span class=\"tree-node-title\">" + data[i][titleKey] + "</span>";
                  if (expand) {
                      treeNodeContent.setAttribute('expand', 'true');
                  }
                  else {
                      treeNodeContent.setAttribute('expand', 'false');
                  }
                  // 处理叶子节点
              }
              else {
                  treeNodeContent.innerHTML = "<span class=\"tree-node-title\">" + data[i][titleKey] + "</span>";
              }
              // 设置padding
              treeNodeContent.style.paddingLeft = level * this.opts.paddingLeft + "px";
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
                  var treeGroup = createNode(this.opts.templates.treeGroup);
                  this.initTree(treeNode, treeGroup, data[i].children, level + 1);
              }
          }
      };
      /**
       * @method initState()
       * 初始化状态
       * 处理icon展示和expand属性
       * @return this
       */
      SimpleTree.prototype.initState = function () {
          var treeNodeContents = this.domRefs.treeNodeContents;
          var createNodeContent = this.opts.createNodeContent;
          var selectedItem = null; // 避免出现多个 selected 为 true 的节点
          for (var i = 0, len = treeNodeContents.length; i < len; i++) {
              var node = treeNodeContents[i];
              var $$nodeData = node.$$nodeData;
              if (hasChild($$nodeData) && !$$nodeData.expand) {
                  var nextEle = node.nextElementSibling;
                  nextEle.style.display = 'none';
              }
              if ($$nodeData.createNodeContent && typeof $$nodeData.createNodeContent === 'function') {
                  $$nodeData.createNodeContent(node, $$nodeData);
              }
              else {
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
      };
      /**
       * @method appendBaseNode()
       * 渲染到base节点上
       * @return null
       */
      SimpleTree.prototype.appendBaseNode = function () {
          this.opts.baseNode.appendChild(this.domRefs.treeWrapper);
      };
      /**
       * @method bindEvent()
       * 绑定事件(点击和双击事件)
       * 使用事件委托
       * 包含slide动画效果
       * @return this
       */
      SimpleTree.prototype.bindEvent = function () {
          var _this = this;
          // 点击事件
          this.clickHandle = function (evt) {
              var e = evt || window.event;
              var target = (e.target || e.srcElement);
              var tagName = target.tagName.toLowerCase();
              // 需要判断的核心是treeNodeContent这个div节点
              var treeNodeCon = (tagName === 'div' ? target : target.parentNode);
              // 判断是否为展开节点
              if (treeNodeCon.hasAttribute('role')) {
                  SimpleTree.toggleExpand(treeNodeCon);
              }
              else if (_this.opts.click) {
                  _this.toggleActive(treeNodeCon);
                  _this.opts.click(treeNodeCon.$$nodeData, e);
              }
          };
          // 双击事件
          this.dblclickHandle = function (evt) {
              var e = evt || window.event;
              var target = (e.target || e.srcElement);
              var tagName = target.tagName.toLowerCase();
              var treeNodeCon = (tagName === 'div' ? target : target.parentNode);
              if (!treeNodeCon.hasAttribute('role')) {
                  // callback
                  if (_this.opts.dblclick) {
                      _this.toggleActive(treeNodeCon);
                      _this.opts.dblclick(treeNodeCon.$$nodeData, e);
                  }
              }
          };
          this.domRefs.treeWrapper.addEventListener('click', this.clickHandle, false);
          this.opts.dblclick &&
              this.domRefs.treeWrapper.addEventListener('dblclick', this.dblclickHandle, false);
          return this;
      };
      /**
       * @method toggleActive()
       * @param  Node treeNodeCon
       * 切换高亮
       */
      SimpleTree.prototype.toggleActive = function (treeNodeCon) {
          this.activeItem && this.activeItem.classList && this.activeItem.classList.remove('active');
          treeNodeCon.classList.add('active');
          this.activeItem = treeNodeCon;
      };
      /**
       * @method removeEvent()
       * 清除绑定事件
       * @return null
       */
      SimpleTree.prototype.removeEvent = function () {
          this.domRefs.treeWrapper.removeEventListener('click', this.clickHandle, false);
          this.domRefs.treeWrapper.removeEventListener('dblclick', this.dblclickHandle, false);
          this.clickHandle = null;
          this.dblclickHandle = null;
      };
      /**
       * @method getActiveItem()
       * 获取高亮的节点
       * @return Node
       */
      SimpleTree.prototype.getActiveItem = function () {
          if (this.activeItem) {
              return this.activeItem;
          }
          return null;
      };
      /**
       * @method destroyed()
       * 销毁Tree节点
       * @return null
       */
      SimpleTree.prototype.destroyed = function () {
          var i = this.domRefs.treeNodeContents.length;
          while (i--) {
              this.domRefs.treeNodeContents[i] = null;
          }
          this.removeEvent();
          this.domRefs.treeWrapper = null;
          this.opts.baseNode.removeChild(this.opts.baseNode.children[0]);
      };
      /**
       * @method toggleExpand()
       * 折叠切换
       * @return null
       */
      SimpleTree.toggleExpand = function (treeNodeCon) {
          var firstChild = treeNodeCon.firstChild;
          if (treeNodeCon.getAttribute('expand') === 'true') {
              firstChild.classList.remove('down');
              treeNodeCon.setAttribute('expand', 'false');
          }
          else {
              firstChild.classList.add('down');
              treeNodeCon.setAttribute('expand', 'true');
          }
          this.slideAnimate(treeNodeCon);
      };
      /**
       * @method slideAnimate()
       * slide动画
       * @return null
       */
      SimpleTree.slideAnimate = function (treeNodeCon) {
          var group = treeNodeCon.nextElementSibling;
          if (group !== null) {
              if (!group.$$transitionendHandle) {
                  group.$$transitionendHandle = this.transitionendHandle.bind(this, group);
                  group.addEventListener(TRANSITIONEND, group.$$transitionendHandle, false);
              }
              var expand = treeNodeCon.getAttribute('expand') === 'true';
              // 展开
              if (!expand) {
                  group.style.height = '';
                  var height_1 = group.offsetHeight;
                  nextFrame(function () {
                      group.style.height = height_1 + "px";
                      nextFrame(function () { return (group.style.height = '0'); });
                  });
              }
              else {
                  // 收缩
                  group.style.display = '';
                  group.style.height = '';
                  var height_2 = group.offsetHeight;
                  nextFrame(function () {
                      group.style.height = '0';
                      nextFrame(function () { return (group.style.height = height_2 + "px"); });
                  });
              }
          }
      };
      /**
       * @method transitionendHandle()
       * 过渡事件
       * @return null
       */
      SimpleTree.transitionendHandle = function (el) {
          var isShow = el.style.height !== '0px';
          if (isShow) {
              el.style.height = '';
          }
          // 执行完解绑
          el.removeEventListener(TRANSITIONEND, el.$$transitionendHandle);
          el.$$transitionendHandle = null;
          delete el.$$transitionendHandle;
      };
      return SimpleTree;
  }());
  SimpleTree.version = '3.0.2';

  return SimpleTree;

}));
//# sourceMappingURL=simplesimpleTree.js.map
