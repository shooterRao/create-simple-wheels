!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.simpleTree=t()}(this,function(){"use strict";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("@font-face {\n  font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1523953995887');\n  /* IE9*/\n  src: url('iconfont.eot?t=1523953995887#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), url('iconfont.ttf?t=1523953995887') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('iconfont.svg?t=1523953995887#iconfont') format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-angle-right:before {\n  content: \"\\e790\";\n}\n.icon-angle-down:before {\n  content: \"\\e791\";\n}\n.icon-wd:before {\n  content: \"\\e66a\";\n}\n.tree-wrapper {\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.tree-wrapper ul {\n  list-style: none;\n}\n.tree-wrapper .tree-node-content {\n  line-height: 36px;\n  height: 36px;\n}\n.tree-wrapper .tree-node-content:hover {\n  background: #e4e8f1;\n  cursor: pointer;\n}\n.tree-wrapper .tree-node-content .tree-node-title {\n  padding-left: 3px;\n}\n.tree-wrapper .tree-node-content.active .tree-node-title {\n  font-style: italic;\n  font-weight: bold;\n}\n.tree-wrapper .tree-node-content.active {\n  background: #0489e0;\n}\n.tree-wrapper .tree-node-content .tree-node-icon.icon-angle {\n  display: inline-block;\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  margin-left: 6px;\n  margin-right: 3px;\n  border: 5px solid transparent;\n  border-right-width: 0;\n  border-left-color: #000;\n  border-left-width: 7px;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.tree-wrapper .tree-node-content .tree-node-icon.icon-angle.down {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n");var e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),n=Object.assign?Object.assign:function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]};return function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);return this.opts=n({},{baseNode:null,paddingLeft:16,animateSpeed:"normal",treeData:[],frontIconClassName:null,folderIconClassName:null,dblclick:null,click:null,createTreeNodeContent:null,templates:{treeWrapper:'<div class="tree-wrapper"></div>',treeBaseNode:'<ul class="tree-base-node"></ul>',treeNode:'<li class="tree-node"></li>',treeGroup:'<ul class="tree-group"></ul>',treeNodeContent:'<div class="tree-node-content"></div>'}},e),this.domRefs={},this.activeItem=null,this.domRefs.treeNodeContents=[],this.initDom().initState().bindEvent().appendBaseNode(),this}return e(t,[{key:"initDom",value:function(){if(!(this.opts.treeData instanceof Array))throw new TypeError("treeData must be an Array!");return this.domRefs.treeWrapper=d(this.opts.templates.treeWrapper),this.domRefs.treeBaseNode=d(this.opts.templates.treeBaseNode),this.initTree(this.domRefs.treeWrapper,this.domRefs.treeBaseNode,this.opts.treeData,0),this}},{key:"initTree",value:function(e,t,n,i){var r=void 0,o=void 0;0===n.length&&e.appendChild(t);for(var a=0,s=n.length;a<s;a++){r=d(this.opts.templates.treeNode),o=d(this.opts.templates.treeNodeContent),this.opts.frontIconClassName?o.innerHTML='<span class="tree-node-icon"></span><span class="tree-node-title">'+n[a].title+"</span>":o.innerHTML='<span class="tree-node-title">'+n[a].title+"</span>",o.style.paddingLeft=i*this.opts.paddingLeft+"px",o.nodeData=n[a],this.domRefs.treeNodeContents.push(o),r.appendChild(o),t.appendChild(r),e.appendChild(t);var A=i;if(!0===n[a].folder&&0<=n[a].children.length){A++;var l=d(this.opts.templates.treeGroup);this.initTree(r,l,n[a].children,A)}}}},{key:"initState",value:function(){for(var e=this.domRefs.treeNodeContents,t=this.opts,n=t.folderIconClassName,i=t.createTreeNodeContent,r=t.frontIconClassName,o=0,a=e.length;o<a;o++){var s=e[o].nodeData;if(!0===s.folder){if(e[o].setAttribute("role","folder"),e[o].firstChild.classList.add("icon-angle"),n){var A='<span class="tree-folder-icon '+n+'"></span>';e[o].firstChild.insertAdjacentHTML("afterend",A)}!0===s.expand?(e[o].firstChild.classList.add("down"),e[o].setAttribute("expand",!0)):e[o].nextElementSibling.style.display="none"}else e[o].firstChild.classList.add("iconfont"),r&&e[o].firstChild.classList.add(r);i&&i(e[o],s)}return this}},{key:"appendBaseNode",value:function(){this.opts.baseNode.appendChild(this.domRefs.treeWrapper)}},{key:"slideAnimate",value:function(e){window.requestAnimationFrame||(window.requestAnimationFrame=function(e){setTimeout(e,16.7)});var t=void 0;switch(this.opts.animateSpeed){case"normal":t=10;break;case"fast":t=5;break;case"slow":t=15;break;default:t=10}var n=e.nextElementSibling;if("false"===e.getAttribute("expand")){var i=n.offsetHeight;n.style.overflow="hidden";var r=i;!function e(){r-=Math.ceil(i/t),n.style.height=r+"px",0<r-0?window.requestAnimationFrame(e):(n.style.height="",n.style.display="none",n.style.overflow="")}()}else{n.style.display="block",n.style.overflow="hidden";var o=n.offsetHeight;n.style.height=0;var a=o,s=0;!function e(){s+=Math.ceil(a/t),n.style.height=s+"px",0<a-s?window.requestAnimationFrame(e):n.style.height=""}()}}},{key:"bindEvent",value:function(){var r=this;return this.clickHandle=function(e){var t=e||window.event,n=t.target||t.srcElement,i="div"===n.tagName.toLowerCase()?n:n.parentNode;i.hasAttribute("expand")?r.toggleExpand(i):r.opts.click&&(r.toggleActive(i),r.opts.click(t,i.nodeData))},this.dblclickHandle=function(e){var t=e||window.event,n=t.target||t.srcElement,i="div"===n.tagName.toLowerCase()?n:n.parentNode;i.hasAttribute("role")||r.opts.dblclick&&(r.toggleActive(i),r.opts.dblclick(t,i.nodeData))},this.domRefs.treeWrapper.addEventListener("click",this.clickHandle,!1),this.domRefs.treeWrapper.addEventListener("dblclick",this.dblclickHandle,!1),this}},{key:"toggleExpand",value:function(e){"true"===e.getAttribute("expand")?(e.firstChild.classList.remove("down"),e.setAttribute("expand","false")):(e.firstChild.classList.add("down"),e.setAttribute("expand","true")),this.slideAnimate(e)}},{key:"toggleActive",value:function(e){this.activeItem&&this.activeItem.classList&&this.activeItem.classList.remove("active"),e.classList.add("active"),this.activeItem=e}},{key:"removeEvent",value:function(){this.domRefs.treeWrapper.removeEventListener("click",this.clickHandle,!1),this.domRefs.treeWrapper.removeEventListener("dblclick",this.dblclickHandle,!1),this.clickHandle=null,this.dblclickHandle=null}},{key:"getActiveItem",value:function(){return this.activeItem?this.activeItem:null}},{key:"destroyed",value:function(){this.removeEvent(),this.opts.baseNode.removeChild(this.domRefs.treeWrapper)}}]),t}()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlVHJlZS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWluamVjdC9kaXN0L3N0eWxlLWluamVjdC5lcy5qcyIsIi4uL3V0aWxzL2luZGV4LmpzIiwiLi4vc2ltcGxlVHJlZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiLyplc2xpbnQtZGlzYWJsZSovXG5cbi8qKlxuICog5a+56LGh5rWF5ou36LSdXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCBhc3NpZ24gPSBPYmplY3QuYXNzaWduXG4gID8gT2JqZWN0LmFzc2lnblxuICA6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4vKipcbiAqIOWvueixoea3seaLt+i0nVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAqIEByZXR1cm5zIHtPYmplY3R9IG1hcFtrZXldXG4gKi9cbmNvbnN0IGRlZXBDb3B5ID0gKG9iaikgPT4ge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHJldHVybjtcbiAgY29uc3QgbmV3T2JqID0gb2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcgPyBkZWVwQ29weShvYmpba2V5XSkgOiBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld09iajtcbn07XG5cbi8qKlxuICogY3JlYXRlTm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxTdHJcbiAqIEByZXR1cm5zIHtEb21Ob2RlfVxuICovXG5jb25zdCBjcmVhdGVOb2RlID0gKGh0bWxTdHIpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyO1xuICByZXR1cm4gZGl2LmNoaWxkTm9kZXNbMF07XG59O1xuXG4vKipcbiAqIOiKgueCuemAieaLqeWZqFxuICogQHBhcmFtIHtEb21Ob2RlfSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7RG9tTm9kZX1cbiAqL1xuY29uc3QgcXVlcnkgPSAoZWwsIHNlbGVjdG9yKSA9PiB7XG4gIHJldHVybiBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgID8gZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICA6IGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBmaW5kICcgKyBzZWxlY3RvciArICcgb2YgZWwhJyk7XG59O1xuXG4vKipcbiAqIOi/lOWbnuaJgOacieiKgueCuVxuICogQHBhcmFtIHtEb21Ob2RlfSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7Tm9kZUxpc3R9XG4gKi9cbmNvbnN0IHF1ZXJ5QWxsID0gKGVsLCBzZWxlY3RvcikgPT4ge1xuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59O1xuXG4vKipcbiAqIOiKgua1geWHveaVsFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmNvbnN0IHRocm90dGxlID0gKGZ1bmMsIHdhaXQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcblxuICBsZXQgdGltZW91dCA9IG51bGw7XG5cbiAgbGV0IHByZXZpb3VzID0gMDtcblxuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBEYXRlLm5vdygpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkge1xuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgfVxuXG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBub3c7XG5cbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuLyoqXG4gKiDljrvmipblh73mlbBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGltbWVkaWF0ZVxuICogQHJldHVybnNcbiAqL1xuY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gIGxldCB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lc3RhbXA7XG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTsgLy8gd2FpdCAtIGxhc3Tlj6/ku6XlsJHmiafooYzlvojlpJrmrKFcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIC8vIOavj+asoeinpuWPkeWHveaVsO+8jOabtOaWsOaXtumXtOaIs1xuICAgIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgLy8gdGltZW91dOWIpOaWreW+iOmHjeimge+8jOWug+aYr+WIpOaWreaYr+WQpummluasoeinpuWPkeeahOmHjeimgeWtl+autVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcblxuICAgIC8vIOmmluasoXRpbWVvdXTkuLrogq/lrprkuLpudWxsXG4gICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAvLyDmraTliIbmlK/lj6rmiafooYzkuIDmrKFcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICB9XG5cbiAgICAvLyDnq4vljbPop6blj5FcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIC8vIOino+mZpOW8leeUqFxuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuLyoqXG4gKiDliKTmlq3mmK/lkKbkuLpkb23oioLngrlcbiAqIEBwYXJhbSB7RG9tTm9kZX0gaXRlbVxuICogQHJldHVybnNcbiAqL1xuY29uc3QgaXNET00gPSAoaXRlbSkgPT4ge1xuICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnZnVuY3Rpb24nXG4gICAgPyBpdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICA6IGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIGl0ZW0ubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xufTtcblxuLyoqXG4gKiDliKTmlq3lr7nosaHnsbvlnotcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtTdHJpbmd9IG1hcFtrZXldXG4gKi9cbmNvbnN0IHR5cGVPZiA9IChvYmopID0+IHtcbiAgY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICBjb25zdCBtYXAgPSB7XG4gICAgJ1tvYmplY3QgQm9vbGVhbl0nOiAnYm9vbGVhbicsXG4gICAgJ1tvYmplY3QgTnVtYmVyXSc6ICdudW1iZXInLFxuICAgICdbb2JqZWN0IFN0cmluZ10nOiAnc3RyaW5nJyxcbiAgICAnW29iamVjdCBGdW5jdGlvbl0nOiAnZnVuY3Rpb24nLFxuICAgICdbb2JqZWN0IEFycmF5XSc6ICdhcnJheScsXG4gICAgJ1tvYmplY3QgRGF0ZV0nOiAnZGF0ZScsXG4gICAgJ1tvYmplY3QgUmVnRXhwXSc6ICdyZWdFeHAnLFxuICAgICdbb2JqZWN0IFVuZGVmaW5lZF0nOiAndW5kZWZpbmVkJyxcbiAgICAnW29iamVjdCBOdWxsXSc6ICdudWxsJyxcbiAgICAnW29iamVjdCBPYmplY3RdJzogJ29iamVjdCdcbiAgfTtcbiAgcmV0dXJuIG1hcFt0b1N0cmluZy5jYWxsKG9iaildO1xufTtcblxuZXhwb3J0IHsgYXNzaWduLCBkZWVwQ29weSwgY3JlYXRlTm9kZSwgZGVib3VuY2UsIHRocm90dGxlLCBxdWVyeSwgcXVlcnlBbGwsIGlzRE9NLCB0eXBlT2YgfTtcbiIsImltcG9ydCAnLi9pbmRleC5sZXNzJztcbmltcG9ydCB7IGFzc2lnbiwgY3JlYXRlTm9kZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2ltcGxlVHJlZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgICAgIGJhc2VOb2RlOiBudWxsLFxuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgYW5pbWF0ZVNwZWVkOiAnbm9ybWFsJyxcbiAgICAgIHRyZWVEYXRhOiBbXSxcbiAgICAgIGZyb250SWNvbkNsYXNzTmFtZTogbnVsbCwgLy8gdGl0bGXliY3pnaLnmoRpY29u55qEY2xhc3NOYW1lXG4gICAgICBmb2xkZXJJY29uQ2xhc3NOYW1lOiBudWxsLCAvLyBmb2xkZXLliY3pnaJpY29u55qEY2xhc3NOYW1lXG4gICAgICBkYmxjbGljazogbnVsbCxcbiAgICAgIGNsaWNrOiBudWxsLFxuICAgICAgY3JlYXRlVHJlZU5vZGVDb250ZW50OiBudWxsLCAvLyDmnoTpgKB0cmVlTm9kZUNvbnRlbnTml7bnmoTlm57osIPlh73mlbBcbiAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICB0cmVlV3JhcHBlcjogJzxkaXYgY2xhc3M9XCJ0cmVlLXdyYXBwZXJcIj48L2Rpdj4nLFxuICAgICAgICB0cmVlQmFzZU5vZGU6ICc8dWwgY2xhc3M9XCJ0cmVlLWJhc2Utbm9kZVwiPjwvdWw+JyxcbiAgICAgICAgdHJlZU5vZGU6ICc8bGkgY2xhc3M9XCJ0cmVlLW5vZGVcIj48L2xpPicsXG4gICAgICAgIHRyZWVHcm91cDogJzx1bCBjbGFzcz1cInRyZWUtZ3JvdXBcIj48L3VsPicsXG4gICAgICAgIHRyZWVOb2RlQ29udGVudDogJzxkaXYgY2xhc3M9XCJ0cmVlLW5vZGUtY29udGVudFwiPjwvZGl2PidcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub3B0cyA9IGFzc2lnbih7fSwgZGVmYXVsdE9wdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuZG9tUmVmcyA9IHt9O1xuICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7IC8vIOS/neWtmGFjdGl2ZUl0ZW1cbiAgICAvLyB0aGlzLmFjdGl2ZVRpdGxlID0gbnVsbDtcbiAgICB0aGlzLmRvbVJlZnMudHJlZU5vZGVDb250ZW50cyA9IFtdOyAvLyDmlLbpm4Z0cmVlLW5vZGUtY29udGVudFxuICAgIC8vIOWcqOacgOe7iOa4suafk+S5i+WJje+8jOWFiOWIneWni+WMluiKgueCueOAgWljb27jgIHnu5Hlrprkuovku7ZcbiAgICB0aGlzLmluaXREb20oKVxuICAgICAgLmluaXRTdGF0ZSgpXG4gICAgICAuYmluZEV2ZW50KClcbiAgICAgIC5hcHBlbmRCYXNlTm9kZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaW5pdERvbSgpXG4gICAqIEBwYXJhbSBudWxsXG4gICAqIEByZXR1cm4gdGhpc1xuICAgKi9cbiAgaW5pdERvbSgpIHtcbiAgICBpZiAoISh0aGlzLm9wdHMudHJlZURhdGEgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RyZWVEYXRhIG11c3QgYmUgYW4gQXJyYXkhJyk7XG4gICAgfVxuICAgIHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlciA9IGNyZWF0ZU5vZGUodGhpcy5vcHRzLnRlbXBsYXRlcy50cmVlV3JhcHBlcik7XG4gICAgdGhpcy5kb21SZWZzLnRyZWVCYXNlTm9kZSA9IGNyZWF0ZU5vZGUodGhpcy5vcHRzLnRlbXBsYXRlcy50cmVlQmFzZU5vZGUpO1xuICAgIHRoaXMuaW5pdFRyZWUodGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyLCB0aGlzLmRvbVJlZnMudHJlZUJhc2VOb2RlLCB0aGlzLm9wdHMudHJlZURhdGEsIDApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgaW5pdFRyZWUoKVxuICAgKiDpgY3ljoZkYXRhLOmAkuW9kueUn+aIkCB1bCAtPiBsaSAtPiB1bC4uLlxuICAgKiDov5nph4znlKjlpJrlsJHmrKFhcHBlbmRDaGlsZOmDveS4jeS8muW8lei1t+a1j+iniOWZqOWbnua1geWvvOiHtOmhtemdouWNoemhv1xuICAgKiBAcGFyYW0ge05vZGV9IGdyb3VwIHRyZWVHcm91cChVTClcbiAgICogQHBhcmFtIHthcnJheX0gZGF0YSDmlbDmja7mupBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsIOWxgue6p+aOp+WItlxuICAgKiBAcmV0dXJuIG51bGxcbiAgICovXG4gIGluaXRUcmVlKHBhcmVudE5vZGUsIGdyb3VwLCBkYXRhLCBsZXZlbCkge1xuICAgIGxldCB0cmVlTm9kZTtcbiAgICBsZXQgdHJlZU5vZGVDb250ZW50OyAvLyBsaSAtPiBkaXZcbiAgICAvLyBkYXRh5Li656m65oOF5Ya15LiL77yM5Yqg5Liq56m655qEdWzov5vljrvvvIzpmLLmraIxMzPooYzmiqXplJlcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZ3JvdXApO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgLy8g5YWI5Yib5bu6bGlcbiAgICAgIHRyZWVOb2RlID0gY3JlYXRlTm9kZSh0aGlzLm9wdHMudGVtcGxhdGVzLnRyZWVOb2RlKTtcbiAgICAgIHRyZWVOb2RlQ29udGVudCA9IGNyZWF0ZU5vZGUodGhpcy5vcHRzLnRlbXBsYXRlcy50cmVlTm9kZUNvbnRlbnQpO1xuICAgICAgaWYgKHRoaXMub3B0cy5mcm9udEljb25DbGFzc05hbWUpIHtcbiAgICAgICAgdHJlZU5vZGVDb250ZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWUtbm9kZS1pY29uXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidHJlZS1ub2RlLXRpdGxlXCI+JHtcbiAgICAgICAgICBkYXRhW2ldLnRpdGxlXG4gICAgICAgIH08L3NwYW4+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWVOb2RlQ29udGVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0cmVlLW5vZGUtdGl0bGVcIj4ke2RhdGFbaV0udGl0bGV9PC9zcGFuPmA7XG4gICAgICB9XG4gICAgICAvLyDorr7nva5wYWRkaW5nXG4gICAgICB0cmVlTm9kZUNvbnRlbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtsZXZlbCAqIHRoaXMub3B0cy5wYWRkaW5nTGVmdH1weGA7XG4gICAgICAvLyDmiormlbDmja7liqDliLBkaXboioLngrnkuIrvvIzmlrnkvr/ngrnlh7vml7bmn6XliLBcbiAgICAgIHRyZWVOb2RlQ29udGVudC5ub2RlRGF0YSA9IGRhdGFbaV07XG4gICAgICB0aGlzLmRvbVJlZnMudHJlZU5vZGVDb250ZW50cy5wdXNoKHRyZWVOb2RlQ29udGVudCk7XG4gICAgICB0cmVlTm9kZS5hcHBlbmRDaGlsZCh0cmVlTm9kZUNvbnRlbnQpO1xuICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQodHJlZU5vZGUpO1xuICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChncm91cCk7XG4gICAgICBsZXQgZ3JvdXBMZXZlbCA9IGxldmVsO1xuICAgICAgaWYgKGRhdGFbaV0uZm9sZGVyID09PSB0cnVlICYmIGRhdGFbaV0uY2hpbGRyZW4ubGVuZ3RoID49IDApIHtcbiAgICAgICAgZ3JvdXBMZXZlbCsrO1xuICAgICAgICBjb25zdCB0cmVlR3JvdXAgPSBjcmVhdGVOb2RlKHRoaXMub3B0cy50ZW1wbGF0ZXMudHJlZUdyb3VwKTtcbiAgICAgICAgdGhpcy5pbml0VHJlZSh0cmVlTm9kZSwgdHJlZUdyb3VwLCBkYXRhW2ldLmNoaWxkcmVuLCBncm91cExldmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBpbml0U3RhdGUoKVxuICAgKiDliJ3lp4vljJbnirbmgIFcbiAgICog5aSE55CGaWNvbuWxleekuuWSjGV4cGFuZOWxnuaAp1xuICAgKiBAcmV0dXJuIHRoaXNcbiAgICovXG4gIGluaXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IHRyZWVOb2RlQ29udGVudHMgfSA9IHRoaXMuZG9tUmVmcztcbiAgICBjb25zdCB7IGZvbGRlckljb25DbGFzc05hbWUsIGNyZWF0ZVRyZWVOb2RlQ29udGVudCwgZnJvbnRJY29uQ2xhc3NOYW1lIH0gPSB0aGlzLm9wdHM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRyZWVOb2RlQ29udGVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgbm9kZURhdGEgfSA9IHRyZWVOb2RlQ29udGVudHNbaV07XG4gICAgICAvLyDlpITnkIZpY29uXG4gICAgICBpZiAobm9kZURhdGEuZm9sZGVyID09PSB0cnVlKSB7XG4gICAgICAgIHRyZWVOb2RlQ29udGVudHNbaV0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2ZvbGRlcicpO1xuICAgICAgICB0cmVlTm9kZUNvbnRlbnRzW2ldLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaWNvbi1hbmdsZScpO1xuICAgICAgICBpZiAoZm9sZGVySWNvbkNsYXNzTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGljb25TdHIgPSBgPHNwYW4gY2xhc3M9XCJ0cmVlLWZvbGRlci1pY29uICR7Zm9sZGVySWNvbkNsYXNzTmFtZX1cIj48L3NwYW4+YDtcbiAgICAgICAgICB0cmVlTm9kZUNvbnRlbnRzW2ldLmZpcnN0Q2hpbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGljb25TdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlRGF0YS5leHBhbmQgPT09IHRydWUpIHtcbiAgICAgICAgICB0cmVlTm9kZUNvbnRlbnRzW2ldLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZG93bicpO1xuICAgICAgICAgIHRyZWVOb2RlQ29udGVudHNbaV0uc2V0QXR0cmlidXRlKCdleHBhbmQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmVlTm9kZUNvbnRlbnRzW2ldLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlTm9kZUNvbnRlbnRzW2ldLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnaWNvbmZvbnQnKTtcbiAgICAgICAgZnJvbnRJY29uQ2xhc3NOYW1lICYmIHRyZWVOb2RlQ29udGVudHNbaV0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKGZyb250SWNvbkNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICBjcmVhdGVUcmVlTm9kZUNvbnRlbnQgJiYgY3JlYXRlVHJlZU5vZGVDb250ZW50KHRyZWVOb2RlQ29udGVudHNbaV0sIG5vZGVEYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBhcHBlbmRCYXNlTm9kZSgpXG4gICAqIOa4suafk+WIsGJhc2XoioLngrnkuIpcbiAgICogQHJldHVybiBudWxsXG4gICAqL1xuICBhcHBlbmRCYXNlTm9kZSgpIHtcbiAgICAvLyDml6Dpobvkvb/nlKhjcmVhdGVEb2N1bWVudEZyYWdtZW5077yM5bqV5bGC5bey57uP5LyY5YyW77yM5pyA57uI5Y+q5LyaYXBwZW5kQ2hpbGTkuIDmrKFcbiAgICAvLyDmiYDku6Xlj6rkvJrlm57mtYHkuIDmrKFcbiAgICB0aGlzLm9wdHMuYmFzZU5vZGUuYXBwZW5kQ2hpbGQodGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNsaWRlQW5pbWF0ZSgpXG4gICAqIHNsaWRl5Yqo55S7XG4gICAqIEByZXR1cm4gbnVsbFxuICAgKi9cbiAgc2xpZGVBbmltYXRlKHRyZWVOb2RlQ29uKSB7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1l5YW85a655oCn5aSE55CGXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZuKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDE2LjcpO1xuICAgICAgfTtcbiAgICB9XG4gICAgLy8g5o6n5Yi26YCf546HXG4gICAgbGV0IHNwZWVkO1xuICAgIHN3aXRjaCAodGhpcy5vcHRzLmFuaW1hdGVTcGVlZCkge1xuICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgc3BlZWQgPSAxMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmYXN0JzpcbiAgICAgICAgc3BlZWQgPSA1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Nsb3cnOlxuICAgICAgICBzcGVlZCA9IDE1O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNwZWVkID0gMTA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBncm91cCA9IHRyZWVOb2RlQ29uLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAodHJlZU5vZGVDb24uZ2V0QXR0cmlidXRlKCdleHBhbmQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgLy8gLS0tc2xpZGVVcFxuICAgICAgLy8gb2Zmc2V0SGVpZ2h0ID0gZ3JvdXAub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQgfSA9IGdyb3VwO1xuICAgICAgZ3JvdXAuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIGxldCBkaXN0YW5jZSA9IG9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IHRhcmdldCA9IDA7XG4gICAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xuICAgICAgICBkaXN0YW5jZSAtPSBNYXRoLmNlaWwob2Zmc2V0SGVpZ2h0IC8gc3BlZWQpO1xuICAgICAgICBncm91cC5zdHlsZS5oZWlnaHQgPSBgJHtkaXN0YW5jZX1weGA7XG4gICAgICAgIGlmIChkaXN0YW5jZSAtIHRhcmdldCA+IDApIHtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyb3VwLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICAgIGdyb3VwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgZ3JvdXAuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHN0ZXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2xpZGVEb3duXG4gICAgICBncm91cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGdyb3VwLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAvLyBvZmZzZXRIZWlnaHQgPSBncm91cC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCB7IG9mZnNldEhlaWdodCB9ID0gZ3JvdXA7XG4gICAgICBncm91cC5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgLy8gMCAtPiBvZmZzZXRIZWlnaHRcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gb2Zmc2V0SGVpZ2h0O1xuICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgIGNvbnN0IHN0ZXAgPSAoKSA9PiB7XG4gICAgICAgIHN0YXJ0ICs9IE1hdGguY2VpbChkaXN0YW5jZSAvIHNwZWVkKTtcbiAgICAgICAgZ3JvdXAuc3R5bGUuaGVpZ2h0ID0gYCR7c3RhcnR9cHhgO1xuICAgICAgICBpZiAoZGlzdGFuY2UgLSBzdGFydCA+IDApIHtcbiAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOaBouWkjem7mOiupOWAvCjph43opoEhISlcbiAgICAgICAgICBncm91cC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHN0ZXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCBiaW5kRXZlbnQoKVxuICAgKiDnu5Hlrprkuovku7Yo54K55Ye75ZKM5Y+M5Ye75LqL5Lu2KVxuICAgKiDkvb/nlKjkuovku7blp5TmiZhcbiAgICog5YyF5ZCrc2xpZGXliqjnlLvmlYjmnpxcbiAgICogQHJldHVybiB0aGlzXG4gICAqL1xuICBiaW5kRXZlbnQoKSB7XG4gICAgLy8g54K55Ye75LqL5Lu2XG4gICAgdGhpcy5jbGlja0hhbmRsZSA9IChldnQpID0+IHtcbiAgICAgIGNvbnN0IGUgPSBldnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgY29uc3QgdGFnTmFtZSA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAvLyDpnIDopoHliKTmlq3nmoTmoLjlv4PmmK90cmVlTm9kZUNvbnRlbnTov5nkuKpkaXboioLngrlcbiAgICAgIGNvbnN0IHRyZWVOb2RlQ29uID0gdGFnTmFtZSA9PT0gJ2RpdicgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIGlmICh0cmVlTm9kZUNvbi5oYXNBdHRyaWJ1dGUoJ2V4cGFuZCcpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kKHRyZWVOb2RlQ29uKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLmNsaWNrKSB7XG4gICAgICAgIC8vIHRoaXMudG9nZ2xlQWN0aXZlKHRyZWVOb2RlQ29uKTtcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUodHJlZU5vZGVDb24pO1xuICAgICAgICB0aGlzLm9wdHMuY2xpY2soZSwgdHJlZU5vZGVDb24ubm9kZURhdGEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDlj4zlh7vkuovku7ZcbiAgICB0aGlzLmRibGNsaWNrSGFuZGxlID0gKGV2dCkgPT4ge1xuICAgICAgY29uc3QgZSA9IGV2dCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICBjb25zdCB0YWdOYW1lID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHRyZWVOb2RlQ29uID0gdGFnTmFtZSA9PT0gJ2RpdicgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIGlmICghdHJlZU5vZGVDb24uaGFzQXR0cmlidXRlKCdyb2xlJykpIHtcbiAgICAgICAgLy8gbGV0IHNwYW5UaXRsZSA9IHF1ZXJ5KHRyZWVOb2RlQ29uLCcudHJlZS1ub2RlLXRpdGxlJyk7XG4gICAgICAgIC8vIHRoaXMudG9nZ2xlSXRhbGljKHNwYW5UaXRsZSk7XG4gICAgICAgIC8vIHNwYW5UaXRsZSA9IG51bGw7Ly8g5riF6Zmk5Y+Y6YeP5byV55SoXG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIGlmICh0aGlzLm9wdHMuZGJsY2xpY2spIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZSh0cmVlTm9kZUNvbik7XG4gICAgICAgICAgdGhpcy5vcHRzLmRibGNsaWNrKGUsIHRyZWVOb2RlQ29uLm5vZGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRvbVJlZnMudHJlZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlLCBmYWxzZSk7XG4gICAgdGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgdGhpcy5kYmxjbGlja0hhbmRsZSwgZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgdG9nZ2xlRXhwYW5kKClcbiAgICog5oqY5Y+g5YiH5o2iXG4gICAqIEByZXR1cm4gbnVsbFxuICAgKi9cbiAgdG9nZ2xlRXhwYW5kKHRyZWVOb2RlQ29uKSB7XG4gICAgaWYgKHRyZWVOb2RlQ29uLmdldEF0dHJpYnV0ZSgnZXhwYW5kJykgPT09ICd0cnVlJykge1xuICAgICAgdHJlZU5vZGVDb24uZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdkb3duJyk7XG4gICAgICB0cmVlTm9kZUNvbi5zZXRBdHRyaWJ1dGUoJ2V4cGFuZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlTm9kZUNvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2Rvd24nKTtcbiAgICAgIHRyZWVOb2RlQ29uLnNldEF0dHJpYnV0ZSgnZXhwYW5kJywgJ3RydWUnKTtcbiAgICB9XG4gICAgLy8gc2xpZGXliqjnlLtcbiAgICB0aGlzLnNsaWRlQW5pbWF0ZSh0cmVlTm9kZUNvbik7XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b2dnbGVBY3RpdmUoKVxuICAgKiBAcGFyYW0gIE5vZGUgdHJlZU5vZGVDb25cbiAgICog5YiH5o2i6auY5LquXG4gICAqL1xuICB0b2dnbGVBY3RpdmUodHJlZU5vZGVDb24pIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gJiYgdGhpcy5hY3RpdmVJdGVtLmNsYXNzTGlzdCAmJiB0aGlzLmFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdHJlZU5vZGVDb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdHJlZU5vZGVDb247XG4gIH1cblxuICAvKipcbiAgICogQG1ldGhvZCB0b2dnbGVJdGFsaWMoKVxuICAgKiBAcGFyYW0gIE5vZGUgc3BhblRpdGxlXG4gICAqIOWIh+aNoumrmOS6rlxuICAgKi9cbiAgLy8gdG9nZ2xlSXRhbGljKHNwYW5UaXRsZSkge1xuICAvLyAgIHRoaXMuYWN0aXZlVGl0bGUgJiYgdGhpcy5hY3RpdmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdpdGFsaWMnKTtcbiAgLy8gICBzcGFuVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRhbGljJyk7XG4gIC8vICAgdGhpcy5hY3RpdmVUaXRsZSA9IHNwYW5UaXRsZTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50KClcbiAgICog5riF6Zmk57uR5a6a5LqL5Lu2XG4gICAqIEByZXR1cm4gbnVsbFxuICAgKi9cbiAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgdGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZSwgZmFsc2UpO1xuICAgIHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuZGJsY2xpY2tIYW5kbGUsIGZhbHNlKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlID0gbnVsbDtcbiAgICB0aGlzLmRibGNsaWNrSGFuZGxlID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldEFjdGl2ZUl0ZW0oKVxuICAgKiDojrflj5bpq5jkuq7nmoToioLngrlcbiAgICogQHJldHVybiBOb2RlXG4gICAqL1xuICBnZXRBY3RpdmVJdGVtKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUl0ZW07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgZGVzdHJveWVkKClcbiAgICog6ZSA5q+BVHJlZeiKgueCuVxuICAgKiBAcmV0dXJuIG51bGxcbiAgICovXG4gIGRlc3Ryb3llZCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgdGhpcy5vcHRzLmJhc2VOb2RlLnJlbW92ZUNoaWxkKHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhc3NpZ24iLCJPYmplY3QiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY3JlYXRlTm9kZSIsImh0bWxTdHIiLCJkaXYiLCJpbm5lckhUTUwiLCJjaGlsZE5vZGVzIiwib3B0aW9ucyIsIm9wdHMiLCJkb21SZWZzIiwiYWN0aXZlSXRlbSIsInRyZWVOb2RlQ29udGVudHMiLCJpbml0RG9tIiwiaW5pdFN0YXRlIiwiYmluZEV2ZW50IiwiYXBwZW5kQmFzZU5vZGUiLCJ0aGlzIiwidHJlZURhdGEiLCJBcnJheSIsIlR5cGVFcnJvciIsInRyZWVXcmFwcGVyIiwidGVtcGxhdGVzIiwidHJlZUJhc2VOb2RlIiwiaW5pdFRyZWUiLCJwYXJlbnROb2RlIiwiZ3JvdXAiLCJkYXRhIiwibGV2ZWwiLCJ0cmVlTm9kZSIsInRyZWVOb2RlQ29udGVudCIsImxlbiIsImZyb250SWNvbkNsYXNzTmFtZSIsInRpdGxlIiwicGFkZGluZ0xlZnQiLCJub2RlRGF0YSIsInB1c2giLCJncm91cExldmVsIiwiZm9sZGVyIiwiY2hpbGRyZW4iLCJ0cmVlR3JvdXAiLCJmb2xkZXJJY29uQ2xhc3NOYW1lIiwiY3JlYXRlVHJlZU5vZGVDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiaWNvblN0ciIsImluc2VydEFkamFjZW50SFRNTCIsImV4cGFuZCIsIm5leHRFbGVtZW50U2libGluZyIsImRpc3BsYXkiLCJiYXNlTm9kZSIsInRyZWVOb2RlQ29uIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzcGVlZCIsImFuaW1hdGVTcGVlZCIsImdldEF0dHJpYnV0ZSIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwiZGlzdGFuY2UiLCJzdGVwIiwiTWF0aCIsImNlaWwiLCJoZWlnaHQiLCJzdGFydCIsImNsaWNrSGFuZGxlIiwiZXZ0IiwiZSIsImV2ZW50Iiwic3JjRWxlbWVudCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImhhc0F0dHJpYnV0ZSIsInRvZ2dsZUV4cGFuZCIsIl90aGlzIiwiY2xpY2siLCJ0b2dnbGVBY3RpdmUiLCJkYmxjbGlja0hhbmRsZSIsImRibGNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInNsaWRlQW5pbWF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudCIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoidUxBQUEsU0FBcUJBLEVBQUtDLFFBQ1gsSUFBUkEsSUFBaUJBLEVBQU0sSUFDNUIsSUFBSUMsRUFBV0QsRUFBSUMsU0FFbkIsR0FBS0YsR0FBMkIsb0JBQWJHLFNBQW5CLENBRUEsSUFBSUMsRUFBT0QsU0FBU0MsTUFBUUQsU0FBU0UscUJBQXFCLFFBQVEsR0FDOURDLEVBQVFILFNBQVNJLGNBQWMsU0FDbkNELEVBQU1FLEtBQU8sV0FFSSxRQUFiTixHQUNFRSxFQUFLSyxXQUNQTCxFQUFLTSxhQUFhSixFQUFPRixFQUFLSyxZQUtoQ0wsRUFBS08sWUFBWUwsR0FHZkEsRUFBTU0sV0FDUk4sRUFBTU0sV0FBV0MsUUFBVWIsRUFFM0JNLEVBQU1LLFlBQVlSLFNBQVNXLGVBQWVkLGl2SUNo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
