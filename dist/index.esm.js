var simpleAnimate = {
  // 暂时只有这几个动画函数算法
  // 需要增加参考 https://github.com/zhangxinxu/Tween/blob/master/tween.js
  // t: current time, b: begInnIng value, c: change In value, d: duration
  animateType: {
    // 匀速
    linear: function linear(t, b, c, d) {
      return c * t / d + b;
    },

    // 先慢后快
    easeInQuad: function easeInQuad(t, b, c, d) {
      return c * (t /= d) * t + b;
    },

    // 先快后慢
    easeOutQuad: function easeOutQuad(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    }
  },
  defaultOpts: {
    from: 0,
    to: 1000,
    during: 300,
    type: 'easeInQuad',
    callback: function callback() {}
  },
  // 增加动画算法
  extend: function extend(type) {
    this.animateType = Object.assign({}, this.animateType, type);
  },

  /*
    * options 配置
      {
        from: 开始值,
        to: 目标值,
        during: 持续时间,
        type: 动画函数
        callback: 回调
      }
      return <Promise>
  */
  play: function play(options) {
    var _this = this;

    return new Promise(function (resolve) {
      var opts = Object.assign({}, _this.defaultOpts, options);
      var to = opts.to,
          from = opts.from,
          type = opts.type,
          during = opts.during,
          callback = opts.callback;
      // 计算总共的帧数
      // 1秒 = 60帧
      // 1帧 = 16.7ms
      // 根据毫秒数得出总共的帧数

      var durFps = Math.ceil(during / 16.7);
      // requestAnimationFrame的兼容处理
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
          setTimeout(fn, 16.7);
        };
      }
      // 动画运动实际上就是 0 ~ 动画总帧数 的过程
      var start = 0;
      // 运动
      var step = function step() {
        // 当前的运动位置
        var value = _this.animateType[type](start, from, to - from, durFps);
        callback(value);
        // 时间递增
        start++;
        // 如果还没有运动到位，继续
        if (start <= durFps) {
          window.requestAnimationFrame(step);
        } else {
          // 动画结束，在promise.then中执行相关操作
          resolve();
        }
      };
      // 开始执行动画
      step();
    });
  }
};

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

var css = ".page-container {\n  width: 100%;\n  list-style: none;\n  font-size: 0;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.page-container .page-li {\n  display: inline-block;\n  font-size: 15px;\n  box-sizing: inherit;\n  border: 1px solid #eaeaea;\n  min-width: 32px;\n  height: 32px;\n  line-height: 32px;\n  margin-left: 5px;\n  cursor: pointer;\n  text-align: center;\n}\n.page-container .page-li.page-li-active {\n  background: #2d8cf0;\n  border-color: #2d8cf0;\n  color: #ffffff;\n}\n.page-container .page-prev,\n.page-container .page-next {\n  padding: 0 5px;\n  margin-left: 0;\n}\n.page-container .page-prev.disable,\n.page-container .page-next.disable {\n  color: #c6c6c6;\n}\n.page-container .page-next {\n  margin-left: 5px;\n}\n.page-container .page-ellipsis {\n  border: none;\n  cursor: default;\n}\n";
styleInject(css);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/*eslint-disable*/

/**
 * 对象浅拷贝
 * @param {Object} target
 * @returns {Object}
 */
var assign = Object.assign ? Object.assign : function (target) {
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
var createNode = function createNode(htmlStr) {
  var div = document.createElement('div');
  div.innerHTML = htmlStr;
  return div.childNodes[0];
};

/**
 * 判断是否为dom节点
 * @param {DomNode} item
 * @returns
 */
var isDOM = function isDOM(item) {
  return typeof HTMLElement === 'function' ? item instanceof HTMLElement : item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item.nodeType === 1 && typeof item.nodeName === 'string';
};

// 判断是否有子节点
var hasChild = function hasChild(nodeData) {
  return nodeData.children && nodeData.children.length !== 0;
};

var simplePagination = function () {
  function simplePagination(totalPage, opts) {
    classCallCheck(this, simplePagination);

    // CN为className简写
    var defaultOpts = {
      baseNode: null, // 必须要传，分页组件挂载的节点
      pageControl: 2, // 当前页面显示前后多少页
      containerCN: 'page-container',
      listCN: 'page-li',
      activeListCN: 'page-li-active',
      prevBtnCN: 'page-prev',
      nextBtnCN: 'page-next',
      disableBtnCN: 'disable',
      pageNumCN: 'page-number',
      preText: '上一页',
      nextText: '下一页'
    };
    this.totalPage = totalPage;
    this.currentPage = 1;
    this.opts = assign({}, defaultOpts, opts);
    this.domRefs = {};
    this.clickHandle = null;
    this.checkBaseNode().render().bindEvent();
  }

  /**
   * @method checkBaseNode
   * 检查BaseNode
   */


  createClass(simplePagination, [{
    key: 'checkBaseNode',
    value: function checkBaseNode() {
      if (!this.opts.baseNode) {
        throw new Error('BaseNode is required');
      }
      if (!isDOM(this.opts.baseNode)) {
        throw new Error('BaseNode must a HTMLElement');
      }
      return this;
    }

    /**
     * @method render
     * 首次渲染
     */

  }, {
    key: 'render',
    value: function render() {
      var _opts = this.opts,
          baseNode = _opts.baseNode,
          containerCN = _opts.containerCN;
      var totalPage = this.totalPage,
          currentPage = this.currentPage;

      this.domRefs.containerNode = document.createElement('ul');
      this.domRefs.containerNode.className = containerCN;
      var pageContent = this.showPages(currentPage, totalPage);
      this.domRefs.containerNode.innerHTML = pageContent;
      baseNode.appendChild(this.domRefs.containerNode);
      return this;
    }

    /**
     * @method bindEvent
     * 绑定事件
     */

  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this = this;

      var _opts2 = this.opts,
          prevBtnCN = _opts2.prevBtnCN,
          nextBtnCN = _opts2.nextBtnCN;

      this.clickHandle = function (evt) {
        var e = evt || window.event;
        var target = e.target || e.srcElement;
        if (target.dataset.page) {
          var page = target.dataset.page;

          _this.goToPage(page);
        } else if (target.classList) {
          // 上一页btn
          if (target.classList.contains(prevBtnCN)) {
            _this.goToPage(_this.currentPage - 1);
          }
          // 下一页btn
          if (target.classList.contains(nextBtnCN)) {
            _this.goToPage(_this.currentPage + 1);
          }
        }
      };
      var containerNode = this.domRefs.containerNode;

      containerNode.addEventListener('click', this.clickHandle, false);
      return this;
    }

    /**
     * @method goToPage
     * 页面跳转
     * @param {Strng|Number} page
     */

  }, {
    key: 'goToPage',
    value: function goToPage(n) {
      var page = +n; // 传入的page如果为String，转为Number
      var totalPage = this.totalPage;
      // 边缘判断

      if (page === this.currentPage || page > totalPage || page < 1) {
        return;
      }
      this.currentPage = page;
      // 派发自定义事件
      this.opts.baseNode.dispatchEvent(
      // 把page传到事件回调参数里面
      new CustomEvent('pageChange', { detail: { page: page } }));
      var containerNode = this.domRefs.containerNode;

      var pageContent = this.showPages(this.currentPage, totalPage);
      containerNode.innerHTML = '';
      containerNode.innerHTML = pageContent;
    }

    /**
     * @method showPages
     * 核心算法，显示页数函数
     * @param {Number} 当前页数、总页数
     */

  }, {
    key: 'showPages',
    value: function showPages(page, total) {
      var _opts3 = this.opts,
          listCN = _opts3.listCN,
          activeListCN = _opts3.activeListCN,
          prevBtnCN = _opts3.prevBtnCN,
          nextBtnCN = _opts3.nextBtnCN,
          disableBtnCN = _opts3.disableBtnCN,
          pageNumCN = _opts3.pageNumCN,
          preText = _opts3.preText,
          nextText = _opts3.nextText,
          pageControl = _opts3.pageControl;

      var str = '<li class=\'' + listCN + ' ' + pageNumCN + ' ' + activeListCN + '\' data-page=\'' + page + '\'>' + page + '</li>';
      // 处理前后顺序关系
      for (var i = 1; i <= pageControl; i++) {
        // 处理前面
        if (page - i > 1) {
          str = '<li class=\'' + listCN + ' ' + pageNumCN + '\' data-page=\'' + (page - i) + '\'>' + (page - i) + '</li>' + str;
        }
        // 处理后面
        if (page + i < total) {
          str = str + '<li class=\'' + listCN + ' ' + pageNumCN + '\' data-page=\'' + (page + i) + '\'>' + (page + i) + '</li>';
        }
      }
      // 前面的省略符
      if (page - (pageControl + 1) > 1) {
        str = '<li class="' + listCN + ' page-ellipsis">...</li>' + str;
      }

      if (page > 1) {
        str = '<li class=\'' + listCN + ' ' + prevBtnCN + '\'>' + preText + '</li>\n        <li class=\'' + listCN + ' ' + pageNumCN + '\' data-page=\'1\'>1</li>\n        ' + str + '\n        ';
      } else {
        str = '<li class=\'' + listCN + ' ' + prevBtnCN + ' ' + disableBtnCN + '\'>' + preText + '</li>' + str + '\n      ';
      }

      // 后面的省略符
      if (page + (pageControl + 1) < total) {
        str += '<li class="' + listCN + ' page-ellipsis">...</li>';
      }

      if (page < total) {
        str += '<li class=\'' + listCN + ' ' + pageNumCN + '\' data-page=\'' + total + '\'>' + total + '</li>\n        <li class=\'' + listCN + ' ' + nextBtnCN + '\'>' + nextText + '</li>\n        ';
      } else {
        str += '<li class=\'' + listCN + ' ' + nextBtnCN + ' ' + disableBtnCN + '\'>' + nextText + '</li>';
      }

      return str;
    }

    /**
     * @method destroyed
     * 销毁节点
     */

  }, {
    key: 'destroyed',
    value: function destroyed() {
      this.domRefs.containerNode.removeEventListener('click', this.clickHandle, false);
      this.opts.baseNode.removeChild(this.domRefs.containerNode);
      this.clickHandle = null;
    }
  }]);
  return simplePagination;
}();


simplePagination.version = '1.0';

/**
 * @class SimplePollingAction
 * @param {Function}  callback[回调函数]
 * @param {Number}  time[轮询时间]
 * @param {immediate}  immediate[是否立即执行回调函数]
 * @description  通过给定的TIME进行轮询操作
 */
var SimplePollingAction = function () {
  function SimplePollingAction(callback) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    classCallCheck(this, SimplePollingAction);

    // 执行状态
    this.running = false;
    // 轮询间隔
    this.time = time;
    // 是否立即执行
    this.immediate = immediate;
    // callback判断
    if (callback) {
      if (typeof callback === 'function') {
        this.callback = callback;
      } else {
        throw new Error('参数1 必须是个函数');
      }
    } else {
      this.callback = null;
    }
    // timer控制
    this.timer = null;
  }

  // 执行轮询


  createClass(SimplePollingAction, [{
    key: 'start',
    value: function start() {
      var _this = this;

      // 是否立即执行
      this.immediate && this.callback();
      this.running = true;
      var onAction = function onAction() {
        _this.timer = setTimeout(function () {
          if (_this.running) {
            _this.callback();
            return onAction();
          }
          return null;
        }, _this.time);
      };
      onAction();
      return this;
    }

    // 取消轮询

  }, {
    key: 'cancel',
    value: function cancel() {
      this.running = false;
      this.timer && clearTimeout(this.timer);
      this.timer = null;
    }
  }]);
  return SimplePollingAction;
}();

var css$1 = ".simple-tree.tree-wrapper {\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.simple-tree.tree-wrapper ul {\n  list-style: none;\n}\n.simple-tree.tree-wrapper .tree-base-node:hover {\n  cursor: pointer;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-group {\n  transition: height 0.3s ease;\n  overflow: hidden;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content {\n  transition: color 0.3s, background 0.3s;\n  line-height: 36px;\n  height: 36px;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content:hover {\n  background: #ecf5ff;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content .tree-node-title {\n  padding-left: 3px;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content.active {\n  color: #2d8cf0;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content.active {\n  background: #ecf5ff;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content .tree-node-icon.icon-angle {\n  display: inline-block;\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  margin-left: 6px;\n  margin-right: 3px;\n  border: 5px solid transparent;\n  border-right-width: 0;\n  border-left-width: 6px;\n  border-left-color: #000;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.simple-tree.tree-wrapper .tree-base-node .tree-node-content .tree-node-icon.icon-angle.down {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n";
styleInject(css$1);

var preClsName = 'simple-tree';
var TRANSITIONEND = window.ontransitionend === undefined ? 'webkitTransitionEnd' : 'transitionend';

var simpleTree = function () {
  function simpleTree(options) {
    classCallCheck(this, simpleTree);

    var defaultOpts = {
      baseNode: null,
      paddingLeft: 16,
      animateSpeed: 'normal',
      treeData: [],
      frontIconClassName: null, // title前面的icon的className
      dblclick: null,
      click: null,
      createTreeNodeContent: null, // 构造treeNodeContent时的回调函数
      templates: {
        treeWrapper: '<div class="' + preClsName + ' tree-wrapper"></div>',
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
    // 在最终渲染之前，先初始化节点、icon、绑定事件
    this.initDom().initState().bindEvent().appendBaseNode();
  }

  /**
   * @method initDom()
   * @param null
   * @return this
   */


  createClass(simpleTree, [{
    key: 'initDom',
    value: function initDom() {
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

  }, {
    key: 'initTree',
    value: function initTree(parentNode, group, data) {
      var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var treeNode = void 0;
      var treeNodeContent = void 0; // li -> div

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
          treeNodeContent.innerHTML = '<span class="tree-node-icon icon-angle ' + (expand && 'down') + '"></span><span class="tree-node-title">' + data[i].title + '</span>';

          if (expand) {
            treeNodeContent.setAttribute('expand', true);
          } else {
            treeNodeContent.setAttribute('expand', false);
          }

          // 处理叶子节点
        } else if (this.opts.frontIconClassName) {
          var clas = this.opts.frontIconClassName;
          treeNodeContent.innerHTML = '<span class="tree-node-icon ' + clas + '"></span><span class="tree-node-title">' + data[i].title + '</span>';
        } else {
          treeNodeContent.innerHTML = '<span class="tree-node-title">' + data[i].title + '</span>';
        }

        // 设置padding
        treeNodeContent.style.paddingLeft = level * this.opts.paddingLeft + 'px';

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
    }

    /**
     * @method initState()
     * 初始化状态
     * 处理icon展示和expand属性
     * @return this
     */

  }, {
    key: 'initState',
    value: function initState() {
      var treeNodeContents = this.domRefs.treeNodeContents;
      var createNodeContent = this.opts.createNodeContent;

      treeNodeContents.forEach(function (node) {
        var $$nodeData = node.$$nodeData;

        if (hasChild($$nodeData) && !$$nodeData.expand) {
          node.nextElementSibling.style.display = 'none';
        }
        if ($$nodeData.createNodeContent && typeof $$nodeData.createNodeContent === 'function') {
          $$nodeData.createNodeContent(node, $$nodeData);
        } else {
          createNodeContent && createNodeContent(node, $$nodeData);
        }
      });
      return this;
    }

    /**
     * @method appendBaseNode()
     * 渲染到base节点上
     * @return null
     */

  }, {
    key: 'appendBaseNode',
    value: function appendBaseNode() {
      this.opts.baseNode.appendChild(this.domRefs.treeWrapper);
    }

    /**
     * @method bindEvent()
     * 绑定事件(点击和双击事件)
     * 使用事件委托
     * 包含slide动画效果
     * @return this
     */

  }, {
    key: 'bindEvent',
    value: function bindEvent() {
      var _this = this;

      // 点击事件
      this.clickHandle = function (evt) {
        var e = evt || window.event;
        var target = e.target || e.srcElement;
        var tagName = target.tagName.toLowerCase();
        // 需要判断的核心是treeNodeContent这个div节点
        var treeNodeCon = tagName === 'div' ? target : target.parentNode;
        // 判断是否为展开节点
        if (treeNodeCon.hasAttribute('role')) {
          simpleTree.toggleExpand(treeNodeCon);
        } else if (_this.opts.click) {
          _this.toggleActive(treeNodeCon);
          _this.opts.click(e, treeNodeCon.$$nodeData);
        }
      };

      // 双击事件
      this.dblclickHandle = function (evt) {
        var e = evt || window.event;
        var target = e.target || e.srcElement;
        var tagName = target.tagName.toLowerCase();
        var treeNodeCon = tagName === 'div' ? target : target.parentNode;
        if (!treeNodeCon.hasAttribute('role')) {
          // callback
          if (_this.opts.dblclick) {
            _this.toggleActive(treeNodeCon);
            _this.opts.dblclick(e, treeNodeCon.$$nodeData);
          }
        }
      };

      this.domRefs.treeWrapper.addEventListener('click', this.clickHandle, false);
      this.opts.dblclick && this.domRefs.treeWrapper.addEventListener('dblclick', this.dblclickHandle, false);

      return this;
    }

    /**
     * @method toggleActive()
     * @param  Node treeNodeCon
     * 切换高亮
     */

  }, {
    key: 'toggleActive',
    value: function toggleActive(treeNodeCon) {
      this.activeItem && this.activeItem.classList && this.activeItem.classList.remove('active');
      treeNodeCon.classList.add('active');
      this.activeItem = treeNodeCon;
    }

    /**
     * @method removeEvent()
     * 清除绑定事件
     * @return null
     */

  }, {
    key: 'removeEvent',
    value: function removeEvent() {
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

  }, {
    key: 'getActiveItem',
    value: function getActiveItem() {
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

  }, {
    key: 'destroyed',
    value: function destroyed() {
      var i = this.domRefs.treeNodeContents.length;
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

  }], [{
    key: 'toggleExpand',
    value: function toggleExpand(treeNodeCon) {
      if (treeNodeCon.getAttribute('expand') === 'true') {
        treeNodeCon.firstChild.classList.remove('down');
        treeNodeCon.setAttribute('expand', false);
      } else {
        treeNodeCon.firstChild.classList.add('down');
        treeNodeCon.setAttribute('expand', true);
      }
      this.slideAnimate(treeNodeCon);
    }

    /**
     * @method slideAnimate()
     * slide动画
     * @return null
     */

  }, {
    key: 'slideAnimate',
    value: function slideAnimate(treeNodeCon) {
      var group = treeNodeCon.nextElementSibling;

      if (!group.$$transitionendHandle) {
        group.$$transitionendHandle = this.transitionendHandle.bind(this, group);
        group.addEventListener(TRANSITIONEND, group.$$transitionendHandle, false);
      }

      var expand = treeNodeCon.getAttribute('expand') === 'true';

      if (!expand) {
        var offsetHeight = group.offsetHeight;

        group.style.height = offsetHeight + 'px';
        setTimeout(function () {
          group.style.height = '0';
        }, 0);
      } else {
        group.style.display = '';
        group.style.height = '';
        var _offsetHeight = group.offsetHeight;

        group.style.height = '0';
        setTimeout(function () {
          group.style.height = _offsetHeight + 'px';
        }, 0);
      }
    }

    /**
     * @method transitionendHandle()
     * 过渡事件
     * @return null
     */

  }, {
    key: 'transitionendHandle',
    value: function transitionendHandle(el) {
      var isShow = el.style.height !== '0px';
      if (isShow) {
        el.style.height = '';
      } else {
        el.style.display = 'none';
      }
      // 执行完解绑
      el.removeEventListener(TRANSITIONEND, el.$$transitionendHandle);
      el.$$transitionendHandle = null;
      delete el.$$transitionendHandle;
    }
  }]);
  return simpleTree;
}();


simpleTree.version = '2.0.1';

export { simpleAnimate, simplePagination, SimplePollingAction as simplePollingAction, simpleTree };