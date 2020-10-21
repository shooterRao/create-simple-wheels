(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.simpleTree2 = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
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

    var css = ".simple-tree.tree-wrapper {\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.simple-tree.tree-wrapper ul {\n  list-style: none;\n}\n.simple-tree.tree-wrapper .tree-node {\n  transition: color 0.3s, background 0.3s;\n  line-height: 36px;\n  height: 36px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.simple-tree.tree-wrapper .tree-node:hover {\n  background: #ecf5ff;\n}\n.simple-tree.tree-wrapper .tree-node .tree-node-title {\n  padding-left: 3px;\n}\n.simple-tree.tree-wrapper .tree-node.active {\n  color: #2d8cf0;\n}\n.simple-tree.tree-wrapper .tree-node.active {\n  background: #ecf5ff;\n}\n.simple-tree.tree-wrapper .tree-node .tree-node-icon.icon-angle {\n  display: inline-block;\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  margin-left: 6px;\n  margin-right: 3px;\n  border: 5px solid transparent;\n  border-right-width: 0;\n  border-left-width: 6px;\n  border-left-color: #000;\n  transform: rotate(0);\n  transition: transform 0.3s ease;\n}\n.simple-tree.tree-wrapper .tree-node .tree-node-icon.icon-angle.down {\n  transform: rotate(90deg);\n}\n";
    styleInject(css);

    /**
     * 对象浅拷贝
     * @param {Object} target
     * @returns {Object}
     */
    /**
     * createNode
     * @param {String} htmlStr
     * @returns {DomNode}
     */
    var createNode = function (htmlStr) {
        var div = document.createElement('div');
        div.innerHTML = htmlStr;
        return div.children[0];
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
    //# sourceMappingURL=index.js.map

    var PRECLSNAME = 'simple-tree';
    var TRANSITIONEND = window.ontransitionend === undefined ? 'webkitTransitionEnd' : 'transitionend';
    var SimpleTree2 = /** @class */ (function () {
        function SimpleTree2(options) {
            var defaultOpts = {
                baseNode: null,
                paddingLeft: 16,
                treeData: [],
                titleKey: 'title',
                createTreeNodeContent: null,
                templates: {
                    treeWrapper: "<div class=\"" + PRECLSNAME + " tree-wrapper\"></div>",
                    treeNode: "<div class=\"tree-node\"></div>",
                    animateNode: "<div class=\"animate-node\"></div>"
                }
            };
            this.opts = __assign(__assign({}, defaultOpts), options);
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
        SimpleTree2.prototype.initData = function () {
            if (!(this.opts.treeData instanceof Array)) {
                throw new TypeError('treeData must be an Array!');
            }
            this.flatTreeData = this.genFlatTreeData(this.opts.treeData);
            return this;
        };
        /**
         * @method initData
         * @description 创建树dom对象
         * @return {this}
         */
        SimpleTree2.prototype.createTree = function () {
            var wrapperNode = this.domRefs.treeWrapper;
            var renderData = this.flatTreeData;
            // 收集不渲染的节点
            var unableRenderNodes = [];
            for (var i = 0; i < renderData.length; i++) {
                // 如果目录节点收缩，叶子节点全部不渲染
                var renderNodeData = renderData[i];
                var nodeData = renderNodeData.nodeData, _isFolder = renderNodeData._isFolder, _key = renderNodeData._key;
                var expand = nodeData.expand;
                if (_isFolder) {
                    // 如果该目录节点不渲染，也需要收集它的叶子节点
                    if (!expand || unableRenderNodes.indexOf(_key) !== -1) {
                        var _childNodeKeys = renderNodeData._childNodeKeys;
                        _childNodeKeys && _childNodeKeys.forEach(function (key) { return unableRenderNodes.push(key); });
                    }
                }
                if (unableRenderNodes.indexOf(_key) !== -1) {
                    continue;
                }
                var treeNode = this.createTreeNode(renderNodeData);
                wrapperNode === null || wrapperNode === void 0 ? void 0 : wrapperNode.appendChild(treeNode);
            }
            return this;
        };
        /**
         * @method bindEvent
         * @description 绑定事件, 使用事件委托
         * @return {this}
         */
        SimpleTree2.prototype.bindEvent = function () {
            var _this = this;
            var _a;
            // 点击事件
            this.clickHandle = function (evt) {
                var target = evt.target;
                var tagName = target.tagName.toLowerCase();
                // 需要判断的核心是treeNodeContent这个div节点
                var treeNode = (tagName === 'div' ? target : target.parentNode);
                // 判断是否为展开节点
                if (treeNode.$$nodeData._isFolder) {
                    _this.toggleExpand(treeNode);
                }
                else if (_this.opts.click) {
                    _this.toggleActive(treeNode);
                    _this.opts.click(treeNode.$$nodeData, evt);
                }
            };
            (_a = this.domRefs.treeWrapper) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.clickHandle, false);
            return this;
        };
        /**
         * @method mountNode
         * @description 挂载树节点
         */
        SimpleTree2.prototype.mountNode = function () {
            var baseNode = this.opts.baseNode;
            this.domRefs.treeWrapper && baseNode.appendChild(this.domRefs.treeWrapper);
        };
        /**
         * @method createTreeNode
         * @description 创建树节点
         * @param {FlatTreeNode} 树节点data
         * @return {TreeNodeElement} 节点dom对象
         */
        SimpleTree2.prototype.createTreeNode = function (data) {
            // 缓存 titleKey
            var titleKey = this.opts.titleKey;
            var _a = this.opts, paddingLeft = _a.paddingLeft, createNodeContent = _a.createNodeContent;
            var nodeData = data.nodeData, _isFolder = data._isFolder, _key = data._key;
            var expand = nodeData.expand;
            var treeNode = createNode(this.opts.templates.treeNode);
            Object.defineProperty(treeNode, '$$nodeData', {
                value: data
            });
            treeNode.dataset.nodekey = _key.toString();
            if (_isFolder) {
                treeNode.innerHTML = "<span class=\"tree-node-icon icon-angle " + (expand && 'down') + "\"></span><span class=\"tree-node-title\">" + nodeData[titleKey] + "</span>";
                treeNode.style.paddingLeft = data._level * paddingLeft + "px";
            }
            else {
                treeNode.innerHTML = "<span class=\"tree-node-title\">" + nodeData[titleKey] + "</span>";
                treeNode.style.paddingLeft = data._level * paddingLeft + "px";
            }
            // 节点对象createNodeContent优先
            if (nodeData.createNodeContent) {
                nodeData.createNodeContent(treeNode, data);
            }
            else if (createNodeContent) {
                createNodeContent(treeNode, data);
            }
            if (nodeData.selected) {
                treeNode.classList.add('active');
                this.activeNodeKey = data._key;
            }
            return treeNode;
        };
        /**
         * @method toggleExpand
         * @description 折叠切换
         * @param {TreeNodeData} 点击的节点
         */
        SimpleTree2.prototype.toggleExpand = function (treeNode) {
            var firstChild = treeNode.firstChild;
            var $$nodeData = treeNode.$$nodeData;
            if ($$nodeData.nodeData.expand) {
                firstChild.classList.remove('down');
                $$nodeData.nodeData.expand = false;
                this.slideAnimate(treeNode, 'up');
            }
            else {
                firstChild.classList.add('down');
                $$nodeData.nodeData.expand = true;
                this.slideAnimate(treeNode, 'down');
            }
        };
        /**
         * @method toggleActive
         * @description 切换高亮
         * @param  {TreeNodeElement} treeNode
         */
        SimpleTree2.prototype.toggleActive = function (treeNode) {
            if (this.activeNodeKey) {
                var oldKey = this.activeNodeKey;
                var oldNode = this.findNodeDomByKey(oldKey);
                var oldNodeData = this.findNodeByKey(oldKey);
                oldNodeData && (oldNodeData.nodeData.selected = false);
                oldNode && oldNode.classList.remove('active');
            }
            this.activeNodeKey = treeNode.$$nodeData._key;
            var newNode = this.findNodeDomByKey(this.activeNodeKey);
            var newNodeData = this.findNodeByKey(this.activeNodeKey);
            newNodeData && (newNodeData.nodeData.selected = true);
            newNode && newNode.classList.add('active');
        };
        /**
         * @method toggleExpand
         * @description 折叠切换
         * @param {TreeNodeElement} treeNode 点击的节点
         * @param {'down' | 'up'} pos 方向
         * @return null
         */
        SimpleTree2.prototype.slideAnimate = function (treeNode, pos) {
            var _this = this;
            var _childNodeKeys = treeNode.$$nodeData._childNodeKeys;
            var childKeyList = _childNodeKeys && this.collectTreeNodeChildKeyList(_childNodeKeys);
            var animateNode = createNode(this.opts.templates.animateNode);
            Object.defineProperty(animateNode, '$$transitionendHandle', {
                value: function () { return _this.transitionendHandle(animateNode, treeNode); },
                writable: true,
                configurable: true
            });
            animateNode.$$transitionendHandle &&
                animateNode.addEventListener(TRANSITIONEND, animateNode.$$transitionendHandle, false);
            if (pos === 'up') {
                childKeyList &&
                    childKeyList.forEach(function (key) {
                        var ele = _this.findNodeDomByKey(key);
                        ele && animateNode.appendChild(ele);
                    });
                if (animateNode.children.length === 0) {
                    return;
                }
                nextFrame(function () {
                    treeNode.insertAdjacentElement('afterend', animateNode);
                    var height = animateNode.offsetHeight;
                    animateNode.style.cssText = "transition: height 0.3s ease;overflow: hidden;";
                    animateNode.style.height = height + "px";
                    nextFrame(function () { return (animateNode.style.height = '0'); });
                });
            }
            if (pos === 'down') {
                childKeyList &&
                    childKeyList.forEach(function (key) {
                        var data = _this.findNodeByKey(key);
                        var ele = _this.createTreeNode(data);
                        animateNode.appendChild(ele);
                    });
                if (animateNode.children.length === 0) {
                    return;
                }
                nextFrame(function () {
                    treeNode.insertAdjacentElement('afterend', animateNode);
                    var height = animateNode.offsetHeight;
                    animateNode.style.cssText = "transition: height 0.3s ease;overflow: hidden;";
                    animateNode.style.height = '0';
                    nextFrame(function () { return (animateNode.style.height = height + "px"); });
                });
            }
        };
        /**
         * @method collectTreeNodeChildKeyList
         * @description 收集某个节点所有层级的子节点key
         * @param {number[]} childNodeKeys
         * @return {number[]} child
         */
        SimpleTree2.prototype.collectTreeNodeChildKeyList = function (childNodeKeys) {
            var flatTreeData = this.flatTreeData;
            var list = [];
            function _collect(nodeKeys) {
                nodeKeys.forEach(function (nodeKey) {
                    var node = flatTreeData[nodeKey];
                    if (node._childNodeKeys) {
                        list.push(nodeKey);
                        if (node.nodeData.expand === true) {
                            _collect(node._childNodeKeys);
                        }
                    }
                    else {
                        list.push(nodeKey);
                    }
                });
            }
            _collect(childNodeKeys);
            return list;
        };
        /**
         * @method genFlatTreeData
         * @description 扁平化成一级树结构
         * @param {TreeNodeData} treeData
         * @return {FlatTreeNode[]}
         */
        SimpleTree2.prototype.genFlatTreeData = function (treeData) {
            var flatTree = [];
            var keyCount = 0;
            function _flat(node, parent, level) {
                var _a, _b;
                if (level === void 0) { level = 0; }
                var key = keyCount++;
                flatTree[key] = {
                    nodeData: node,
                    _key: key,
                    _level: level,
                    _isFolder: false
                };
                if (parent && parent._key >= 0) {
                    flatTree[key]._parentKey = parent._key;
                    (_a = flatTree[parent._key]._childNodeKeys) === null || _a === void 0 ? void 0 : _a.push(key);
                }
                if (hasChild(node)) {
                    flatTree[key]._isFolder = true;
                    flatTree[key]._childNodeKeys = [];
                    (_b = node.children) === null || _b === void 0 ? void 0 : _b.forEach(function (child) { return _flat(child, flatTree[key], level + 1); });
                }
            }
            treeData.forEach(function (rootNode) {
                _flat(rootNode);
            });
            return flatTree;
        };
        /**
         * @method transitionendHandle
         * @description 过渡事件
         * @return null
         */
        SimpleTree2.prototype.transitionendHandle = function (animateNode, treeNode) {
            var isShow = animateNode.style.height !== '0px';
            if (isShow) {
                for (var i = animateNode.children.length - 1; i >= 0; i--) {
                    treeNode.insertAdjacentElement('afterend', animateNode.children[i]);
                }
                this.domRefs.treeWrapper.removeChild(animateNode);
            }
            else {
                this.domRefs.treeWrapper.removeChild(animateNode);
            }
            // 执行完解绑
            animateNode.$$transitionendHandle &&
                animateNode.removeEventListener(TRANSITIONEND, animateNode.$$transitionendHandle);
            animateNode.$$transitionendHandle = null;
            delete animateNode.$$transitionendHandle;
        };
        /**
         * @method removeEvent
         * @description 清除绑定事件
         */
        SimpleTree2.prototype.removeEvent = function () {
            this.clickHandle && this.domRefs.treeWrapper.removeEventListener('click', this.clickHandle, false);
            this.clickHandle = null;
        };
        /**
         * @method findNodeByKey
         * @description 根据节点key在flatTreeData中找对应节点
         * @param {number} key 节点key
         * @returns {FlatTreeNode} 节点对象
         */
        SimpleTree2.prototype.findNodeByKey = function (key) {
            return this.flatTreeData[key];
        };
        /**
         * @method findNodeDomByKey
         * @description 根据节点key在treeWrapper中找对应节点
         * @param {number} key 节点key
         * @returns {TreeNodeElement | null} 节点dom对象 | null
         */
        SimpleTree2.prototype.findNodeDomByKey = function (key) {
            return this.domRefs.treeWrapper.querySelector("div[data-nodekey='" + key + "']");
        };
        /**
         * @method destroyed
         * @description 销毁Tree节点
         */
        SimpleTree2.prototype.destroyed = function () {
            this.flatTreeData = [];
            this.removeEvent();
            this.opts.baseNode.removeChild(this.domRefs.treeWrapper);
        };
        return SimpleTree2;
    }());
    SimpleTree2.version = '1.0';

    return SimpleTree2;

}));
//# sourceMappingURL=simpleTree2.js.map
