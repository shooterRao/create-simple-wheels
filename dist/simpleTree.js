(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.simpleTree = factory());
}(this, (function () { 'use strict';

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

  var css = "@font-face {\n  font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1523953995887');\n  /* IE9*/\n  src: url('iconfont.eot?t=1523953995887#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), url('iconfont.ttf?t=1523953995887') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('iconfont.svg?t=1523953995887#iconfont') format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-angle-right:before {\n  content: \"\\e790\";\n}\n.icon-angle-down:before {\n  content: \"\\e791\";\n}\n.icon-wd:before {\n  content: \"\\e66a\";\n}\n.tree-wrapper {\n  width: 100%;\n}\n.tree-wrapper ul {\n  list-style: none;\n}\n.tree-wrapper .tree-node-content {\n  line-height: 36px;\n  height: 36px;\n}\n.tree-wrapper .tree-node-content:hover {\n  background: #e4e8f1;\n  cursor: pointer;\n}\n.tree-wrapper .tree-node-content .tree-node-title {\n  padding-left: 3px;\n}\n.tree-wrapper .tree-node-content.active .tree-node-title {\n  font-style: italic;\n  font-weight: bold;\n}\n.tree-wrapper .tree-node-content.active {\n  background: #0489e0;\n}\n.tree-wrapper .tree-node-content .tree-node-icon.icon-angle {\n  display: inline-block;\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  margin-left: 6px;\n  margin-right: 3px;\n  border: 5px solid transparent;\n  border-right-width: 0;\n  border-left-color: #000;\n  border-left-width: 7px;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.tree-wrapper .tree-node-content .tree-node-icon.icon-angle.down {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n";
  styleInject(css);

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
    var div = document.createElement("div");
    div.innerHTML = htmlStr;
    return div.childNodes[0];
  };

  /**
   * 节点选择器
   * @param {DomNode} el
   * @param {String} selector
   * @returns {DomNode}
   */
  var query = function query(el, selector) {
    return el.querySelector(selector) ? el.querySelector(selector) : console.error("Cannot find " + selector + " of el!");
  };

  var simpleTree = function () {
    function simpleTree(options) {
      classCallCheck(this, simpleTree);

      var defaultOpts = {
        baseNode: null,
        paddingLeft: 16,
        animateSpeed: 'normal',
        treeData: [],
        frontIconClassName: null, // title前面的icon的className 
        folderIconClassName: "icon-angle-right",
        dblclick: function dblclick() {},
        click: function click() {},
        templates: {
          treeWrapper: '<div class="tree-wrapper"></div>',
          treeBaseNode: '<ul class="tree-base-node"></ul>',
          treeNode: '<li class="tree-node"></li>',
          treeGroup: '<ul class="tree-group"></ul>',
          treeNodeContent: '<div class="tree-node-content"></div>'
        }
      };
      this.opts = assign({}, defaultOpts, options);
      this.domRefs = {};
      this.activeItem = null; // 保存activeItem
      this.activeTitle = null;
      this.domRefs.treeNodeContents = []; // 收集tree-node-content
      // 在最终渲染之前，先初始化节点、icon、绑定事件
      this.initDom().initState().bindEvent().appendBaseNode();
      return this;
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
          throw new TypeError("treeData must be a Array!");
        }
        this.domRefs.treeWrapper = createNode(this.opts.templates.treeWrapper);
        this.domRefs.treeBaseNode = createNode(this.opts.templates.treeBaseNode);
        this.initTree(this.domRefs.treeWrapper, this.domRefs.treeBaseNode, this.opts.treeData, 0);
        // this.domRefs.treeWrapper.appendChild(this.domRefs.treeBaseNode);
        return this;
      }

      /**
        * @method initTree()
        * 遍历data,递归生成 ul -> li -> ul...
        * 这里用多少次appendChild都不会引起浏览器回流导致页面卡顿
        * @param {Node} group treeGroup(UL)
        * @param {array} data 数据源
        * @param {number} level 层级控制
        * @return null
        */

    }, {
      key: 'initTree',
      value: function initTree(parentNode, group, data, level) {
        var treeNode = void 0,
            treeNodeContent = void 0; // li -> div
        for (var i = 0, len = data.length; i < len; i++) {
          // 先创建li
          treeNode = createNode(this.opts.templates.treeNode);
          treeNodeContent = createNode(this.opts.templates.treeNodeContent);
          if (data[i].folder === true) {
            treeNodeContent.innerHTML = '<span class="tree-node-icon"></span><span class="tree-node-title">' + data[i].title + '</span>';
          } else {
            if (this.opts.frontIconClassName === null) {
              treeNodeContent.innerHTML = '<span class="tree-node-title">' + data[i].title + '</span>';
            } else {
              treeNodeContent.innerHTML = '<span class="tree-node-icon"></span><span class="tree-node-title">' + data[i].title + '</span>';
            }
          }
          // 设置padding
          treeNodeContent.style.paddingLeft = level * this.opts.paddingLeft + "px";
          // 把数据加到div节点上，方便点击时查到
          treeNodeContent.nodeData = data[i];
          this.domRefs.treeNodeContents.push(treeNodeContent);
          treeNode.appendChild(treeNodeContent);
          group.appendChild(treeNode);
          parentNode.appendChild(group);
          var groupLevel = level;
          if (data[i].folder === true && data[i].children.length > 0) {
            groupLevel++;
            var treeGroup = createNode(this.opts.templates.treeGroup);
            this.initTree(treeNode, treeGroup, data[i].children, groupLevel);
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

        for (var i = 0, len = treeNodeContents.length; i < len; i++) {
          var nodeData = treeNodeContents[i].nodeData;
          // 处理icon
          if (nodeData.folder === true) {
            treeNodeContents[i].setAttribute('role', 'folder');
            treeNodeContents[i].firstChild.classList.add("iconfont");
            treeNodeContents[i].firstChild.classList.add("icon-angle");
            if (nodeData.expand === true) {
              treeNodeContents[i].firstChild.classList.add("down");
              treeNodeContents[i].setAttribute("expand", true);
            } else {
              treeNodeContents[i].nextElementSibling.style.display = "none";
            }
          } else {
            treeNodeContents[i].firstChild.classList.add("iconfont");
            this.opts.frontIconClassName && treeNodeContents[i].firstChild.classList.add(this.opts.frontIconClassName);
          }
        }
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
        // 无须使用createDocumentFragment，底层已经优化，最终只会appendChild一次
        // 所以只会回流一次
        this.opts.baseNode.appendChild(this.domRefs.treeWrapper);
      }

      /**
        * @method slideAnimate()
        * slide动画
        * 递归尾优化
        * 参考 http://www.ruanyifeng.com/blog/2015/04/tail-call.html
        * @return null
        */

    }, {
      key: 'slideAnimate',
      value: function slideAnimate(treeNodeCon) {
        // requestAnimationFrame兼容性处理
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = function (fn) {
            setTimeout(fn, 16.7);
          };
        }
        // 记录第一次进来时的offsetHeight
        var offsetHeight = void 0;
        var speed = void 0;
        switch (this.opts.animateSpeed) {
          case 'normal':
            speed = 10;
            break;
          case 'fast':
            speed = 5;
            break;
          case 'slow':
            speed = 15;
            break;
        }
        var group = treeNodeCon.nextElementSibling;
        if (treeNodeCon.getAttribute('expand') === 'false') {
          offsetHeight = group.offsetHeight;
          group.style.overflow = "hidden";
          var distance = offsetHeight;
          var target = 0;
          var step = function step() {
            distance = distance - Math.ceil(offsetHeight / speed);
            group.style.height = distance + "px";
            if (distance - target > 0) {
              return window.requestAnimationFrame(step);
            } else {
              group.style.height = "";
              group.style.display = "none";
              group.style.overflow = "";
            }
          };
          step();
        } else {
          // slideDown
          group.style.display = "block";
          group.style.overflow = "hidden";
          offsetHeight = group.offsetHeight;
          group.style.height = 0;
          // 0 -> offsetHeight
          var _distance = offsetHeight;
          var start = 0;
          var _step = function _step() {
            start = start + Math.ceil(_distance / speed);
            group.style.height = start + "px";
            if (_distance - start > 0) {
              return window.requestAnimationFrame(_step);
            } else {
              // 恢复默认值(重要!!)
              group.style.height = "";
            }
          };
          _step();
        }
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

        // 点击事件(委托)
        this.clickHandle = function (evt) {
          var e = evt || window.event;
          var target = e.target || e.srcElement;
          var tagName = target.tagName.toLowerCase();
          // 需要判断的核心是treeNodeContent这个div节点
          var treeNodeCon = tagName === 'div' ? target : target.parentNode;
          if (treeNodeCon.hasAttribute("expand")) {
            _this.toggleExpand(treeNodeCon);
          } else {
            _this.toggleActive(treeNodeCon);
            _this.opts.click && _this.opts.click(e, treeNodeCon.nodeData);
          }
        };

        // 双击事件(委托)（暂不用）
        this.dblclickHandle = function (evt) {
          var e = evt || window.event;
          var target = e.target || e.srcElement;
          var tagName = target.tagName.toLowerCase();
          var treeNodeCon = tagName === 'div' ? target : target.parentNode;
          if (!treeNodeCon.hasAttribute('role')) {
            var spanTitle = query(treeNodeCon, '.tree-node-title');
            _this.toggleItalic(spanTitle);
            spanTitle = null; // 清除变量引用
            // callback
            _this.opts.dblclick && _this.opts.dblclick(e, treeNodeCon.nodeData);
          }
        };

        this.domRefs.treeWrapper.addEventListener("click", this.clickHandle, false);
        // this.domRefs.treeWrapper.addEventListener('dblclick', this.dblclickHandle, false);
        return this;
      }

      /**
        * @method toggleExpand()
        * 折叠切换
        * @return null
        */

    }, {
      key: 'toggleExpand',
      value: function toggleExpand(treeNodeCon) {
        if (treeNodeCon.getAttribute("expand") === "true") {
          treeNodeCon.firstChild.classList.remove("down");
          treeNodeCon.setAttribute("expand", "false");
        } else {
          treeNodeCon.firstChild.classList.add("down");
          treeNodeCon.setAttribute("expand", "true");
        }

        // 高亮div
        this.toggleActive(treeNodeCon);

        // slide动画
        this.slideAnimate(treeNodeCon);
      }

      /**
        * @method toggleActive()
        * @param  Node treeNodeCon
        * 切换高亮
        */

    }, {
      key: 'toggleActive',
      value: function toggleActive(treeNodeCon) {
        this.activeItem && this.activeItem.classList.remove('active');
        treeNodeCon.classList.add("active");
        this.activeItem = treeNodeCon;
      }

      /**
        * @method toggleItalic()
        * @param  Node spanTitle
        * 切换高亮
        */

    }, {
      key: 'toggleItalic',
      value: function toggleItalic(spanTitle) {
        this.activeTitle && this.activeTitle.classList.remove('italic');
        spanTitle.classList.add('italic');
        this.activeTitle = spanTitle;
      }

      /**
        * @method removeEvent()
        * 清除绑定事件
        * @return null
        */

    }, {
      key: 'removeEvent',
      value: function removeEvent() {
        this.domRefs.treeWrapper.removeEventListener("click", this.clickHandle, false);
        // this.domRefs.treeWrapper.removeEventListener(
        //   "dblclick",
        //   this.dblclickHandle,
        //   false
        // );
        this.clickHandle = null;
        // this.dblclickHandle = null;
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
      }

      /**
        * @method destroyed()
        * 销毁Tree节点
        * @return null
        */

    }, {
      key: 'destroyed',
      value: function destroyed() {
        this.removeEvent();
        this.opts.baseNode.removeChild(this.domRefs.treeWrapper);
      }
    }]);
    return simpleTree;
  }();

  return simpleTree;

})));
