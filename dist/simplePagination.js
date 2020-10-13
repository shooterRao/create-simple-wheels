(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.simplePagination = factory());
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

  var css = ".page-container {\n  width: 100%;\n  list-style: none;\n  font-size: 0;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.page-container .page-li {\n  display: inline-block;\n  font-size: 15px;\n  box-sizing: inherit;\n  border: 1px solid #eaeaea;\n  min-width: 32px;\n  height: 32px;\n  line-height: 32px;\n  margin-left: 5px;\n  cursor: pointer;\n  text-align: center;\n}\n.page-container .page-li.page-li-active {\n  background: #2d8cf0;\n  border-color: #2d8cf0;\n  color: #ffffff;\n}\n.page-container .page-prev,\n.page-container .page-next {\n  padding: 0 5px;\n  margin-left: 0;\n}\n.page-container .page-prev.disable,\n.page-container .page-next.disable {\n  color: #c6c6c6;\n}\n.page-container .page-next {\n  margin-left: 5px;\n}\n.page-container .page-ellipsis {\n  border: none;\n  cursor: default;\n}\n";
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
   * 判断是否为dom节点
   * @param {DomNode} item
   * @returns
   */
  var isDOM = function (item) {
      return typeof HTMLElement === 'function'
          ? item instanceof HTMLElement
          : item && typeof item === 'object' && item.nodeType === 1 && typeof item.nodeName === 'string';
  };

  var simplePagination = /** @class */ (function () {
      function simplePagination(totalPage, opts) {
          // CN为className简写
          var defaultOpts = {
              baseNode: null,
              pageControl: 2,
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
          this.checkBaseNode()
              .render()
              .bindEvent();
      }
      /**
       * @method checkBaseNode
       * 检查BaseNode
       */
      simplePagination.prototype.checkBaseNode = function () {
          if (!this.opts.baseNode) {
              throw new Error('BaseNode is required');
          }
          if (!isDOM(this.opts.baseNode)) {
              throw new Error('BaseNode must a HTMLElement');
          }
          return this;
      };
      /**
       * @method render
       * 首次渲染
       */
      simplePagination.prototype.render = function () {
          var _a = this.opts, baseNode = _a.baseNode, containerCN = _a.containerCN;
          var _b = this, totalPage = _b.totalPage, currentPage = _b.currentPage;
          this.domRefs.containerNode = document.createElement('ul');
          this.domRefs.containerNode.className = containerCN;
          var pageContent = this.showPages(currentPage, totalPage);
          this.domRefs.containerNode.innerHTML = pageContent;
          baseNode.appendChild(this.domRefs.containerNode);
          return this;
      };
      /**
       * @method bindEvent
       * 绑定事件
       */
      simplePagination.prototype.bindEvent = function () {
          var _this = this;
          var _a = this.opts, prevBtnCN = _a.prevBtnCN, nextBtnCN = _a.nextBtnCN;
          this.clickHandle = function (evt) {
              var e = evt || window.event;
              var target = (e.target || e.srcElement);
              if (target.dataset.page) {
                  var page = target.dataset.page;
                  _this.goToPage(+page);
              }
              else if (target.classList) {
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
      };
      /**
       * @method goToPage
       * 页面跳转
       * @param {Strng|Number} page
       */
      simplePagination.prototype.goToPage = function (n) {
          var page = n; // 传入的page如果为String，转为Number
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
      };
      /**
       * @method showPages
       * 核心算法，显示页数函数
       * @param {Number} 当前页数、总页数
       */
      simplePagination.prototype.showPages = function (page, total) {
          var _a = this.opts, listCN = _a.listCN, activeListCN = _a.activeListCN, prevBtnCN = _a.prevBtnCN, nextBtnCN = _a.nextBtnCN, disableBtnCN = _a.disableBtnCN, pageNumCN = _a.pageNumCN, preText = _a.preText, nextText = _a.nextText, pageControl = _a.pageControl;
          var str = "<li class='" + listCN + " " + pageNumCN + " " + activeListCN + "' data-page='" + page + "'>" + page + "</li>";
          // 处理前后顺序关系
          for (var i = 1; i <= pageControl; i++) {
              // 处理前面
              if (page - i > 1) {
                  str = "<li class='" + listCN + " " + pageNumCN + "' data-page='" + (page - i) + "'>" + (page - i) + "</li>" + str;
              }
              // 处理后面
              if (page + i < total) {
                  str = str + "<li class='" + listCN + " " + pageNumCN + "' data-page='" + (page + i) + "'>" + (page + i) + "</li>";
              }
          }
          // 前面的省略符
          if (page - (pageControl + 1) > 1) {
              str = "<li class=\"" + listCN + " page-ellipsis\">...</li>" + str;
          }
          if (page > 1) {
              str = "<li class='" + listCN + " " + prevBtnCN + "'>" + preText + "</li>\n        <li class='" + listCN + " " + pageNumCN + "' data-page='1'>1</li>\n        " + str + "\n        ";
          }
          else {
              str = "<li class='" + listCN + " " + prevBtnCN + " " + disableBtnCN + "'>" + preText + "</li>" + str + "\n      ";
          }
          // 后面的省略符
          if (page + (pageControl + 1) < total) {
              str += "<li class=\"" + listCN + " page-ellipsis\">...</li>";
          }
          if (page < total) {
              str += "<li class='" + listCN + " " + pageNumCN + "' data-page='" + total + "'>" + total + "</li>\n        <li class='" + listCN + " " + nextBtnCN + "'>" + nextText + "</li>\n        ";
          }
          else {
              str += "<li class='" + listCN + " " + nextBtnCN + " " + disableBtnCN + "'>" + nextText + "</li>";
          }
          return str;
      };
      /**
       * @method destroyed
       * 销毁节点
       */
      simplePagination.prototype.destroyed = function () {
          this.domRefs.containerNode.removeEventListener('click', this.clickHandle, false);
          this.opts.baseNode.removeChild(this.domRefs.containerNode);
          this.clickHandle = null;
      };
      return simplePagination;
  }());
  simplePagination.version = '2.0';

  return simplePagination;

}));
//# sourceMappingURL=simplePagination.js.map
