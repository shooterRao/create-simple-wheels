!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.simpleTree=t()}(this,function(){"use strict";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("@font-face {\n  font-family: \"iconfont\";\n  src: url('iconfont.eot?t=1523953995887');\n  /* IE9*/\n  src: url('iconfont.eot?t=1523953995887#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXgAAsAAAAACKQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7kl+Y21hcAAAAYAAAABuAAABqjrt1H1nbHlmAAAB8AAAAdgAAAI4VWRO5WhlYWQAAAPIAAAALwAAADYRFuiTaGhlYQAAA/gAAAAcAAAAJAfeA4ZobXR4AAAEFAAAABMAAAAUE+kAAGxvY2EAAAQoAAAADAAAAAwBCAGgbWF4cAAABDQAAAAeAAAAIAEUAF1uYW1lAAAEVAAAAUUAAAJtPlT+fXBvc3QAAAWcAAAAQQAAAFy/GT4LeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/s04gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDyfyNzwv4EhhrmBoQEozAiSAwAvLA0BeJzFkNENgCAMRK+ChhhHcQA/HcYvJmAMWBLGwGvhxwk88uB6aYAUwArAkZN4QCIEqoepWO6wW+5xsQ5cC89UYyu9T5fNqcQ6gjnPTt4tG36T/Pf0V4ft96w4aaQJv1jjQPOWBzrlVgZwL9myFm0AAHicZZDLaxNRFMbvd18zyUwynUdmkslzkiaj1AaNYwQfSQpuKl0IXbmryy50WwgusmnowoXQha5F8H+QLiL4f4jYbrXQdW+8I7jRw8fhO7/DORwOEYSsv7MzViU+uUHukCfkGSGQW+iWaRNJmg3pFiqJqERBmaW9NDF63SF7jKgrg3A0zgaRNKSDMlq4m4zG6ZCmuJdN6EOMwiZQq8f7Xr/hsbcoVtPWsXpKP6DS7jWcybbavTUNRh3fPLI9r+Z5b0wphEkpd8p4GYUFUShK9VE4ceWsfZO2YdfSeO95qVP3Xpxkr5r9qAAsFvDrnfKnqRu7Wq/j0PdqxkbJrMal3maAo3Or6tvNwQ+iA3miK/qFUEL6LjDDYkYXavW3x3boTt7zE6xyTmdqoXH+o6/sM3tEHLKpv/SA7OmBMDCE7Kb9QXa/Px5FTNt0kE2RFyIKAwdCQmzD7aYYYgJ97rgFaWj9R9gx52opbKGWnGOujeVYakkti2JutSzMc6uWljrBIQ7VO8NQBya3fROnODV9m5vqwDD+oRbLKb2t1605X/OS+CXE9bfimtodm14WCpd/zLqIwdXVxfU+R136LpfqJzzJXV+qC/6eo6EhEzkUfEPDc07Ib0kcZKh4nGNgZGBgAOIrXzud4vltvjJwszCAwLXfl7wR9P8jLAzMNkAuBwMTSBQAZ0MMMQB4nGNgZGBgbvjfwBDDwgACQJKRARWwAgBHCwJueJxjYWBgYH7JwMDCgMAADpsA/QAAAAAAAHYAhACSARx4nGNgZGBgYGUIBGIQYAJiLiBkYPgP5jMAABEtAXIAAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgbFCsDgxLyszMb8iMy9dtygzPaNEAFkkJb88j708NS8lMS+dgQEAqHERFgAAAA==') format('woff'), url('iconfont.ttf?t=1523953995887') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('iconfont.svg?t=1523953995887#iconfont') format('svg');\n  /* iOS 4.1- */\n}\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-angle-right:before {\n  content: \"\\e790\";\n}\n.icon-angle-down:before {\n  content: \"\\e791\";\n}\n.icon-wd:before {\n  content: \"\\e66a\";\n}\n.tree-wrapper {\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.tree-wrapper ul {\n  list-style: none;\n}\n.tree-wrapper .tree-node-content {\n  line-height: 36px;\n  height: 36px;\n}\n.tree-wrapper .tree-node-content:hover {\n  background: #e4e8f1;\n  cursor: pointer;\n}\n.tree-wrapper .tree-node-content .tree-node-title {\n  padding-left: 3px;\n}\n.tree-wrapper .tree-node-content.active .tree-node-title {\n  font-style: italic;\n  font-weight: bold;\n}\n.tree-wrapper .tree-node-content.active {\n  background: #0489e0;\n}\n.tree-wrapper .tree-node-content .tree-node-icon.icon-angle {\n  display: inline-block;\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  margin-left: 6px;\n  margin-right: 3px;\n  border: 5px solid transparent;\n  border-right-width: 0;\n  border-left-color: #000;\n  border-left-width: 7px;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.tree-wrapper .tree-node-content .tree-node-icon.icon-angle.down {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n");var e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),n=Object.assign?Object.assign:function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]};return function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);return this.opts=n({},{baseNode:null,paddingLeft:16,animateSpeed:"normal",treeData:[],frontIconClassName:null,folderIconClassName:"icon-angle-right",dblclick:function(){},click:function(){},templates:{treeWrapper:'<div class="tree-wrapper"></div>',treeBaseNode:'<ul class="tree-base-node"></ul>',treeNode:'<li class="tree-node"></li>',treeGroup:'<ul class="tree-group"></ul>',treeNodeContent:'<div class="tree-node-content"></div>'}},e),this.domRefs={},this.activeItem=null,this.activeTitle=null,this.domRefs.treeNodeContents=[],this.initDom().initState().bindEvent().appendBaseNode(),this}return e(t,[{key:"initDom",value:function(){if(!(this.opts.treeData instanceof Array))throw new TypeError("treeData must be a Array!");return this.domRefs.treeWrapper=d(this.opts.templates.treeWrapper),this.domRefs.treeBaseNode=d(this.opts.templates.treeBaseNode),this.initTree(this.domRefs.treeWrapper,this.domRefs.treeBaseNode,this.opts.treeData,0),this}},{key:"initTree",value:function(e,t,n,i){for(var o=void 0,r=void 0,s=0,a=n.length;s<a;s++){o=d(this.opts.templates.treeNode),r=d(this.opts.templates.treeNodeContent),!0===n[s].folder?r.innerHTML='<span class="tree-node-icon"></span><span class="tree-node-title">'+n[s].title+"</span>":null===this.opts.frontIconClassName?r.innerHTML='<span class="tree-node-title">'+n[s].title+"</span>":r.innerHTML='<span class="tree-node-icon"></span><span class="tree-node-title">'+n[s].title+"</span>",r.style.paddingLeft=i*this.opts.paddingLeft+"px",r.nodeData=n[s],this.domRefs.treeNodeContents.push(r),o.appendChild(r),t.appendChild(o),e.appendChild(t);var A=i;if(!0===n[s].folder&&0<n[s].children.length){A++;var l=d(this.opts.templates.treeGroup);this.initTree(o,l,n[s].children,A)}}}},{key:"initState",value:function(){for(var e=this.domRefs.treeNodeContents,t=0,n=e.length;t<n;t++){var i=e[t].nodeData;!0===i.folder?(e[t].setAttribute("role","folder"),e[t].firstChild.classList.add("iconfont"),e[t].firstChild.classList.add("icon-angle"),!0===i.expand?(e[t].firstChild.classList.add("down"),e[t].setAttribute("expand",!0)):e[t].nextElementSibling.style.display="none"):(e[t].firstChild.classList.add("iconfont"),this.opts.frontIconClassName&&e[t].firstChild.classList.add(this.opts.frontIconClassName))}return this}},{key:"appendBaseNode",value:function(){this.opts.baseNode.appendChild(this.domRefs.treeWrapper)}},{key:"slideAnimate",value:function(e){window.requestAnimationFrame||(window.requestAnimationFrame=function(e){setTimeout(e,16.7)});var t=void 0,n=void 0;switch(this.opts.animateSpeed){case"normal":n=10;break;case"fast":n=5;break;case"slow":n=15}var i=e.nextElementSibling;if("false"===e.getAttribute("expand")){t=i.offsetHeight,i.style.overflow="hidden";var o=t;!function e(){if(o-=Math.ceil(t/n),i.style.height=o+"px",0<o-0)return window.requestAnimationFrame(e);i.style.height="",i.style.display="none",i.style.overflow=""}()}else{i.style.display="block",i.style.overflow="hidden",t=i.offsetHeight,i.style.height=0;var r=t,s=0;!function e(){if(s+=Math.ceil(r/n),i.style.height=s+"px",0<r-s)return window.requestAnimationFrame(e);i.style.height=""}()}}},{key:"bindEvent",value:function(){var a=this;return this.clickHandle=function(e){var t=e||window.event,n=t.target||t.srcElement,i="div"===n.tagName.toLowerCase()?n:n.parentNode;i.hasAttribute("expand")?a.toggleExpand(i):(a.toggleActive(i),a.opts.click&&a.opts.click(t,i.nodeData))},this.dblclickHandle=function(e){var t,n,i=e||window.event,o=i.target||i.srcElement,r="div"===o.tagName.toLowerCase()?o:o.parentNode;if(!r.hasAttribute("role")){var s=(n=".tree-node-title",(t=r).querySelector(n)?t.querySelector(n):console.error("Cannot find "+n+" of el!"));a.toggleItalic(s),s=null,a.opts.dblclick&&a.opts.dblclick(i,r.nodeData)}},this.domRefs.treeWrapper.addEventListener("click",this.clickHandle,!1),this}},{key:"toggleExpand",value:function(e){"true"===e.getAttribute("expand")?(e.firstChild.classList.remove("down"),e.setAttribute("expand","false")):(e.firstChild.classList.add("down"),e.setAttribute("expand","true")),this.toggleActive(e),this.slideAnimate(e)}},{key:"toggleActive",value:function(e){this.activeItem&&this.activeItem.classList.remove("active"),e.classList.add("active"),this.activeItem=e}},{key:"toggleItalic",value:function(e){this.activeTitle&&this.activeTitle.classList.remove("italic"),e.classList.add("italic"),this.activeTitle=e}},{key:"removeEvent",value:function(){this.domRefs.treeWrapper.removeEventListener("click",this.clickHandle,!1),this.clickHandle=null}},{key:"getActiveItem",value:function(){if(this.activeItem)return this.activeItem}},{key:"destroyed",value:function(){this.removeEvent(),this.opts.baseNode.removeChild(this.domRefs.treeWrapper)}}]),t}()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlVHJlZS5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWluamVjdC9kaXN0L3N0eWxlLWluamVjdC5lcy5qcyIsIi4uL3V0aWxzL2luZGV4LmpzIiwiLi4vc2ltcGxlVHJlZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiLyoqXHJcbiAqIOWvueixoea1heaLt+i0nVxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnblxyXG4gID8gT2JqZWN0LmFzc2lnblxyXG4gIDogZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfTtcclxuXHJcbi8qKlxyXG4gKiBjcmVhdGVOb2RlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sU3RyXHJcbiAqIEByZXR1cm5zIHtEb21Ob2RlfVxyXG4gKi9cclxudmFyIGNyZWF0ZU5vZGUgPSBmdW5jdGlvbihodG1sU3RyKSB7XHJcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LmlubmVySFRNTCA9IGh0bWxTdHI7XHJcbiAgcmV0dXJuIGRpdi5jaGlsZE5vZGVzWzBdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOiKgueCuemAieaLqeWZqFxyXG4gKiBAcGFyYW0ge0RvbU5vZGV9IGVsXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcmV0dXJucyB7RG9tTm9kZX1cclxuICovXHJcbnZhciBxdWVyeSA9IGZ1bmN0aW9uKGVsLCBzZWxlY3Rvcikge1xyXG4gIHJldHVybiBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG4gICAgPyBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG4gICAgOiBjb25zb2xlLmVycm9yKFwiQ2Fubm90IGZpbmQgXCIgKyBzZWxlY3RvciArIFwiIG9mIGVsIVwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDov5Tlm57miYDmnInoioLngrlcclxuICogQHBhcmFtIHtEb21Ob2RlfSBlbFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcclxuICogQHJldHVybnMge05vZGVMaXN0fVxyXG4gKi9cclxudmFyIHF1ZXJ5QWxsID0gZnVuY3Rpb24oZWwsIHNlbGVjdG9yKSB7XHJcbiAgcmV0dXJuIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOiKgua1geWHveaVsFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB3YWl0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbnZhciB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcclxuICB2YXIgY29udGV4dCwgYXJncywgcmVzdWx0O1xyXG5cclxuICB2YXIgdGltZW91dCA9IG51bGw7XHJcblxyXG4gIHZhciBwcmV2aW91cyA9IDA7XHJcblxyXG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xyXG5cclxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBEYXRlLm5vdygpO1xyXG4gICAgdGltZW91dCA9IG51bGw7XHJcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cclxuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkge1xyXG4gICAgICBwcmV2aW91cyA9IG5vdztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XHJcbiAgICBjb250ZXh0ID0gdGhpcztcclxuICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcclxuICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByZXZpb3VzID0gbm93O1xyXG5cclxuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHJcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xyXG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xyXG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDljrvmipblh73mlbBcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xyXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGltbWVkaWF0ZVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxudmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xyXG5cclxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBsYXN0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lc3RhbXA7XHJcbiAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XHJcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7IC8vIHdhaXQgLSBsYXN05Y+v5Lul5bCR5omn6KGM5b6I5aSa5qyhXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICBpZiAoIXRpbWVvdXQpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICBjb250ZXh0ID0gdGhpcztcclxuICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgLy8g5q+P5qyh6Kem5Y+R5Ye95pWw77yM5pu05paw5pe26Ze05oizXHJcbiAgICB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAvLyB0aW1lb3V05Yik5pat5b6I6YeN6KaB77yM5a6D5piv5Yik5pat5piv5ZCm6aaW5qyh6Kem5Y+R55qE6YeN6KaB5a2X5q61XHJcblxyXG4gICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblxyXG4gICAgLy8g6aaW5qyhdGltZW91dOS4uuiCr+WumuS4um51bGxcclxuICAgIGlmICghdGltZW91dCkge1xyXG4gICAgICAvLyDmraTliIbmlK/lj6rmiafooYzkuIDmrKFcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOeri+WNs+inpuWPkVxyXG4gICAgaWYgKGNhbGxOb3cpIHtcclxuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgLy8g6Kej6Zmk5byV55SoXHJcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufTtcclxuLyoqXHJcbiAqIOWIpOaWreaYr+WQpuS4umRvbeiKgueCuVxyXG4gKiBAcGFyYW0ge0RvbU5vZGV9IGl0ZW1cclxuICogQHJldHVybnNcclxuICovXHJcbnZhciBpc0RPTSA9IGl0ZW0gPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgPyBpdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcclxuICAgIDogaXRlbSAmJlxyXG4gICAgICAgIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgaXRlbS5ub2RlVHlwZSA9PT0gMSAmJlxyXG4gICAgICAgIHR5cGVvZiBpdGVtLm5vZGVOYW1lID09PSBcInN0cmluZ1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYXNzaWduLCBjcmVhdGVOb2RlLCBkZWJvdW5jZSwgdGhyb3R0bGUsIHF1ZXJ5LCBxdWVyeUFsbCwgaXNET00gfTtcclxuIiwiaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQgeyBhc3NpZ24sIGNyZWF0ZU5vZGUsIHF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaW1wbGVUcmVlIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgYmFzZU5vZGU6IG51bGwsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNixcclxuICAgICAgYW5pbWF0ZVNwZWVkOiAnbm9ybWFsJyxcclxuICAgICAgdHJlZURhdGE6IFtdLFxyXG4gICAgICBmcm9udEljb25DbGFzc05hbWU6IG51bGwsIC8vIHRpdGxl5YmN6Z2i55qEaWNvbueahGNsYXNzTmFtZSBcclxuICAgICAgZm9sZGVySWNvbkNsYXNzTmFtZTogXCJpY29uLWFuZ2xlLXJpZ2h0XCIsXHJcbiAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigpIHt9LFxyXG4gICAgICBjbGljazogZnVuY3Rpb24oKSB7fSxcclxuICAgICAgdGVtcGxhdGVzOiB7XHJcbiAgICAgICAgdHJlZVdyYXBwZXI6IGA8ZGl2IGNsYXNzPVwidHJlZS13cmFwcGVyXCI+PC9kaXY+YCxcclxuICAgICAgICB0cmVlQmFzZU5vZGU6IGA8dWwgY2xhc3M9XCJ0cmVlLWJhc2Utbm9kZVwiPjwvdWw+YCxcclxuICAgICAgICB0cmVlTm9kZTogYDxsaSBjbGFzcz1cInRyZWUtbm9kZVwiPjwvbGk+YCxcclxuICAgICAgICB0cmVlR3JvdXA6IGA8dWwgY2xhc3M9XCJ0cmVlLWdyb3VwXCI+PC91bD5gLFxyXG4gICAgICAgIHRyZWVOb2RlQ29udGVudDogYDxkaXYgY2xhc3M9XCJ0cmVlLW5vZGUtY29udGVudFwiPjwvZGl2PmBcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMub3B0cyA9IGFzc2lnbih7fSwgZGVmYXVsdE9wdHMsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5kb21SZWZzID0ge307XHJcbiAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsOy8vIOS/neWtmGFjdGl2ZUl0ZW1cclxuICAgIHRoaXMuYWN0aXZlVGl0bGUgPSBudWxsO1xyXG4gICAgdGhpcy5kb21SZWZzLnRyZWVOb2RlQ29udGVudHMgPSBbXTsgLy8g5pS26ZuGdHJlZS1ub2RlLWNvbnRlbnRcclxuICAgIC8vIOWcqOacgOe7iOa4suafk+S5i+WJje+8jOWFiOWIneWni+WMluiKgueCueOAgWljb27jgIHnu5Hlrprkuovku7ZcclxuICAgIHRoaXMuaW5pdERvbSgpXHJcbiAgICAgIC5pbml0U3RhdGUoKVxyXG4gICAgICAuYmluZEV2ZW50KClcclxuICAgICAgLmFwcGVuZEJhc2VOb2RlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBAbWV0aG9kIGluaXREb20oKVxyXG4gICAgKiBAcGFyYW0gbnVsbFxyXG4gICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICovXHJcbiAgaW5pdERvbSgpIHtcclxuICAgIGlmKCEodGhpcy5vcHRzLnRyZWVEYXRhIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0cmVlRGF0YSBtdXN0IGJlIGEgQXJyYXkhXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyID0gY3JlYXRlTm9kZSh0aGlzLm9wdHMudGVtcGxhdGVzLnRyZWVXcmFwcGVyKTtcclxuICAgIHRoaXMuZG9tUmVmcy50cmVlQmFzZU5vZGUgPSBjcmVhdGVOb2RlKHRoaXMub3B0cy50ZW1wbGF0ZXMudHJlZUJhc2VOb2RlKTtcclxuICAgIHRoaXMuaW5pdFRyZWUoXHJcbiAgICAgIHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlcixcclxuICAgICAgdGhpcy5kb21SZWZzLnRyZWVCYXNlTm9kZSxcclxuICAgICAgdGhpcy5vcHRzLnRyZWVEYXRhLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAvLyB0aGlzLmRvbVJlZnMudHJlZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21SZWZzLnRyZWVCYXNlTm9kZSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAgKiBAbWV0aG9kIGluaXRUcmVlKClcclxuICAgICog6YGN5Y6GZGF0YSzpgJLlvZLnlJ/miJAgdWwgLT4gbGkgLT4gdWwuLi5cclxuICAgICog6L+Z6YeM55So5aSa5bCR5qyhYXBwZW5kQ2hpbGTpg73kuI3kvJrlvJXotbfmtY/op4jlmajlm57mtYHlr7zoh7TpobXpnaLljaHpob9cclxuICAgICogQHBhcmFtIHtOb2RlfSBncm91cCB0cmVlR3JvdXAoVUwpXHJcbiAgICAqIEBwYXJhbSB7YXJyYXl9IGRhdGEg5pWw5o2u5rqQXHJcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbCDlsYLnuqfmjqfliLZcclxuICAgICogQHJldHVybiBudWxsXHJcbiAgICAqL1xyXG4gIGluaXRUcmVlKHBhcmVudE5vZGUsIGdyb3VwLCBkYXRhLCBsZXZlbCkge1xyXG4gICAgbGV0IHRyZWVOb2RlLCB0cmVlTm9kZUNvbnRlbnQ7IC8vIGxpIC0+IGRpdlxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgLy8g5YWI5Yib5bu6bGlcclxuICAgICAgdHJlZU5vZGUgPSBjcmVhdGVOb2RlKHRoaXMub3B0cy50ZW1wbGF0ZXMudHJlZU5vZGUpO1xyXG4gICAgICB0cmVlTm9kZUNvbnRlbnQgPSBjcmVhdGVOb2RlKHRoaXMub3B0cy50ZW1wbGF0ZXMudHJlZU5vZGVDb250ZW50KTtcclxuICAgICAgaWYgKGRhdGFbaV0uZm9sZGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgdHJlZU5vZGVDb250ZW50LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInRyZWUtbm9kZS1pY29uXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidHJlZS1ub2RlLXRpdGxlXCI+JHtcclxuICAgICAgICAgIGRhdGFbaV0udGl0bGVcclxuICAgICAgICB9PC9zcGFuPmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5mcm9udEljb25DbGFzc05hbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHRyZWVOb2RlQ29udGVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0cmVlLW5vZGUtdGl0bGVcIj4ke1xyXG4gICAgICAgICAgICBkYXRhW2ldLnRpdGxlXHJcbiAgICAgICAgICB9PC9zcGFuPmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyZWVOb2RlQ29udGVudC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJ0cmVlLW5vZGUtaWNvblwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRyZWUtbm9kZS10aXRsZVwiPiR7XHJcbiAgICAgICAgICAgIGRhdGFbaV0udGl0bGVcclxuICAgICAgICAgIH08L3NwYW4+YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8g6K6+572ucGFkZGluZ1xyXG4gICAgICB0cmVlTm9kZUNvbnRlbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBsZXZlbCAqIHRoaXMub3B0cy5wYWRkaW5nTGVmdCArIFwicHhcIjtcclxuICAgICAgLy8g5oqK5pWw5o2u5Yqg5YiwZGl26IqC54K55LiK77yM5pa55L6/54K55Ye75pe25p+l5YiwXHJcbiAgICAgIHRyZWVOb2RlQ29udGVudC5ub2RlRGF0YSA9IGRhdGFbaV07XHJcbiAgICAgIHRoaXMuZG9tUmVmcy50cmVlTm9kZUNvbnRlbnRzLnB1c2godHJlZU5vZGVDb250ZW50KTtcclxuICAgICAgdHJlZU5vZGUuYXBwZW5kQ2hpbGQodHJlZU5vZGVDb250ZW50KTtcclxuICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQodHJlZU5vZGUpO1xyXG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGdyb3VwKTtcclxuICAgICAgbGV0IGdyb3VwTGV2ZWwgPSBsZXZlbDtcclxuICAgICAgaWYgKGRhdGFbaV0uZm9sZGVyID09PSB0cnVlICYmIGRhdGFbaV0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGdyb3VwTGV2ZWwrKztcclxuICAgICAgICBsZXQgdHJlZUdyb3VwID0gY3JlYXRlTm9kZSh0aGlzLm9wdHMudGVtcGxhdGVzLnRyZWVHcm91cCk7XHJcbiAgICAgICAgdGhpcy5pbml0VHJlZSh0cmVlTm9kZSwgdHJlZUdyb3VwLCBkYXRhW2ldLmNoaWxkcmVuLCBncm91cExldmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBtZXRob2QgaW5pdFN0YXRlKClcclxuICAgICog5Yid5aeL5YyW54q25oCBXHJcbiAgICAqIOWkhOeQhmljb27lsZXnpLrlkoxleHBhbmTlsZ7mgKdcclxuICAgICogQHJldHVybiB0aGlzXHJcbiAgICAqL1xyXG4gIGluaXRTdGF0ZSgpIHtcclxuICAgIGxldCB7IHRyZWVOb2RlQ29udGVudHMgfSA9IHRoaXMuZG9tUmVmcztcclxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0cmVlTm9kZUNvbnRlbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGxldCBub2RlRGF0YSA9IHRyZWVOb2RlQ29udGVudHNbaV0ubm9kZURhdGE7XHJcbiAgICAgIC8vIOWkhOeQhmljb25cclxuICAgICAgaWYgKG5vZGVEYXRhLmZvbGRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRyZWVOb2RlQ29udGVudHNbaV0uc2V0QXR0cmlidXRlKCdyb2xlJywnZm9sZGVyJyk7XHJcbiAgICAgICAgdHJlZU5vZGVDb250ZW50c1tpXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJpY29uZm9udFwiKTtcclxuICAgICAgICB0cmVlTm9kZUNvbnRlbnRzW2ldLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImljb24tYW5nbGVcIik7XHJcbiAgICAgICAgaWYgKG5vZGVEYXRhLmV4cGFuZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdHJlZU5vZGVDb250ZW50c1tpXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJkb3duXCIpO1xyXG4gICAgICAgICAgdHJlZU5vZGVDb250ZW50c1tpXS5zZXRBdHRyaWJ1dGUoXCJleHBhbmRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyZWVOb2RlQ29udGVudHNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlZU5vZGVDb250ZW50c1tpXS5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJpY29uZm9udFwiKTtcclxuICAgICAgICB0aGlzLm9wdHMuZnJvbnRJY29uQ2xhc3NOYW1lICYmIHRyZWVOb2RlQ29udGVudHNbaV0uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0cy5mcm9udEljb25DbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBAbWV0aG9kIGFwcGVuZEJhc2VOb2RlKClcclxuICAgICog5riy5p+T5YiwYmFzZeiKgueCueS4ilxyXG4gICAgKiBAcmV0dXJuIG51bGxcclxuICAgICovXHJcbiAgYXBwZW5kQmFzZU5vZGUoKSB7XHJcbiAgICAvLyDml6Dpobvkvb/nlKhjcmVhdGVEb2N1bWVudEZyYWdtZW5077yM5bqV5bGC5bey57uP5LyY5YyW77yM5pyA57uI5Y+q5LyaYXBwZW5kQ2hpbGTkuIDmrKFcclxuICAgIC8vIOaJgOS7peWPquS8muWbnua1geS4gOasoVxyXG4gICAgdGhpcy5vcHRzLmJhc2VOb2RlLmFwcGVuZENoaWxkKHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQG1ldGhvZCBzbGlkZUFuaW1hdGUoKVxyXG4gICAgKiBzbGlkZeWKqOeUu1xyXG4gICAgKiDpgJLlvZLlsL7kvJjljJZcclxuICAgICog5Y+C6ICDIGh0dHA6Ly93d3cucnVhbnlpZmVuZy5jb20vYmxvZy8yMDE1LzA0L3RhaWwtY2FsbC5odG1sXHJcbiAgICAqIEByZXR1cm4gbnVsbFxyXG4gICAgKi9cclxuICBzbGlkZUFuaW1hdGUodHJlZU5vZGVDb24pIHtcclxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZeWFvOWuueaAp+WkhOeQhlxyXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZm4sIDE2LjcpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8g6K6w5b2V56ys5LiA5qyh6L+b5p2l5pe255qEb2Zmc2V0SGVpZ2h0XHJcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IHNwZWVkO1xyXG4gICAgc3dpdGNoICh0aGlzLm9wdHMuYW5pbWF0ZVNwZWVkKSB7XHJcbiAgICAgIGNhc2UgJ25vcm1hbCc6XHJcbiAgICAgICAgc3BlZWQgPSAxMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZmFzdCc6XHJcbiAgICAgICAgc3BlZWQgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzbG93JzpcclxuICAgICAgICBzcGVlZCA9IDE1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgbGV0IGdyb3VwID0gdHJlZU5vZGVDb24ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKHRyZWVOb2RlQ29uLmdldEF0dHJpYnV0ZSgnZXhwYW5kJykgPT09ICdmYWxzZScpIHtcclxuICAgICAgb2Zmc2V0SGVpZ2h0ID0gZ3JvdXAub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBncm91cC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gb2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gZGlzdGFuY2UgLSBNYXRoLmNlaWwob2Zmc2V0SGVpZ2h0IC8gc3BlZWQpO1xyXG4gICAgICAgICAgICBncm91cC5zdHlsZS5oZWlnaHQgPSBkaXN0YW5jZSArIFwicHhcIjtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIC0gdGFyZ2V0ID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGdyb3VwLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgZ3JvdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgIGdyb3VwLnN0eWxlLm92ZXJmbG93ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RlcCgpO1xyXG4gICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNsaWRlRG93blxyXG4gICAgICBncm91cC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBncm91cC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIG9mZnNldEhlaWdodCA9IGdyb3VwLm9mZnNldEhlaWdodDtcclxuICAgICAgZ3JvdXAuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgLy8gMCAtPiBvZmZzZXRIZWlnaHRcclxuICAgICAgbGV0IGRpc3RhbmNlID0gb2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgc3RhcnQgPSBzdGFydCArIE1hdGguY2VpbChkaXN0YW5jZSAvIHNwZWVkKTtcclxuICAgICAgICAgIGdyb3VwLnN0eWxlLmhlaWdodCA9IHN0YXJ0ICsgXCJweFwiO1xyXG4gICAgICAgICAgaWYgKGRpc3RhbmNlIC0gc3RhcnQgPiAwKSB7XHJcbiAgICAgICAgICAgICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmgaLlpI3pu5jorqTlgLwo6YeN6KaBISEpXHJcbiAgICAgICAgICAgIGdyb3VwLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHN0ZXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBAbWV0aG9kIGJpbmRFdmVudCgpXHJcbiAgICAqIOe7keWumuS6i+S7tijngrnlh7vlkozlj4zlh7vkuovku7YpXHJcbiAgICAqIOS9v+eUqOS6i+S7tuWnlOaJmFxyXG4gICAgKiDljIXlkKtzbGlkZeWKqOeUu+aViOaenFxyXG4gICAgKiBAcmV0dXJuIHRoaXNcclxuICAgICovXHJcbiAgYmluZEV2ZW50KCkge1xyXG4gICAgLy8g54K55Ye75LqL5Lu2KOWnlOaJmClcclxuICAgIHRoaXMuY2xpY2tIYW5kbGUgPSBldnQgPT4ge1xyXG4gICAgICBjb25zdCBlID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG4gICAgICBjb25zdCB0YWdOYW1lID0gdGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgLy8g6ZyA6KaB5Yik5pat55qE5qC45b+D5pivdHJlZU5vZGVDb250ZW506L+Z5LiqZGl26IqC54K5XHJcbiAgICAgIGxldCB0cmVlTm9kZUNvbiA9IHRhZ05hbWUgPT09ICdkaXYnID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgIGlmICh0cmVlTm9kZUNvbi5oYXNBdHRyaWJ1dGUoXCJleHBhbmRcIikpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZCh0cmVlTm9kZUNvbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVBY3RpdmUodHJlZU5vZGVDb24pO1xyXG4gICAgICAgIHRoaXMub3B0cy5jbGljayAmJiB0aGlzLm9wdHMuY2xpY2soZSwgdHJlZU5vZGVDb24ubm9kZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOWPjOWHu+S6i+S7tijlp5TmiZgp77yI5pqC5LiN55So77yJXHJcbiAgICB0aGlzLmRibGNsaWNrSGFuZGxlID0gZXZ0ID0+IHtcclxuICAgICAgY29uc3QgZSA9IGV2dCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgY29uc3QgdGFnTmFtZSA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxldCB0cmVlTm9kZUNvbiA9IHRhZ05hbWUgPT09ICdkaXYnID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgIGlmKCF0cmVlTm9kZUNvbi5oYXNBdHRyaWJ1dGUoJ3JvbGUnKSkge1xyXG4gICAgICAgIGxldCBzcGFuVGl0bGUgPSBxdWVyeSh0cmVlTm9kZUNvbiwnLnRyZWUtbm9kZS10aXRsZScpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlSXRhbGljKHNwYW5UaXRsZSk7XHJcbiAgICAgICAgc3BhblRpdGxlID0gbnVsbDsvLyDmuIXpmaTlj5jph4/lvJXnlKhcclxuICAgICAgICAvLyBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMub3B0cy5kYmxjbGljayAmJiB0aGlzLm9wdHMuZGJsY2xpY2soZSwgdHJlZU5vZGVDb24ubm9kZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICB0aGlzLmRvbVJlZnMudHJlZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2tIYW5kbGUsIGZhbHNlKTtcclxuICAgIC8vIHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIHRoaXMuZGJsY2xpY2tIYW5kbGUsIGZhbHNlKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBtZXRob2QgdG9nZ2xlRXhwYW5kKClcclxuICAgICog5oqY5Y+g5YiH5o2iXHJcbiAgICAqIEByZXR1cm4gbnVsbFxyXG4gICAgKi9cclxuICB0b2dnbGVFeHBhbmQodHJlZU5vZGVDb24pIHtcclxuICAgIGlmKHRyZWVOb2RlQ29uLmdldEF0dHJpYnV0ZShcImV4cGFuZFwiKSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgdHJlZU5vZGVDb24uZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwiZG93blwiKTtcclxuICAgICAgdHJlZU5vZGVDb24uc2V0QXR0cmlidXRlKFwiZXhwYW5kXCIsIFwiZmFsc2VcIik7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRyZWVOb2RlQ29uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImRvd25cIik7XHJcbiAgICAgIHRyZWVOb2RlQ29uLnNldEF0dHJpYnV0ZShcImV4cGFuZFwiLCBcInRydWVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6auY5LquZGl2XHJcbiAgICB0aGlzLnRvZ2dsZUFjdGl2ZSh0cmVlTm9kZUNvbik7XHJcblxyXG4gICAgLy8gc2xpZGXliqjnlLtcclxuICAgIHRoaXMuc2xpZGVBbmltYXRlKHRyZWVOb2RlQ29uKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBtZXRob2QgdG9nZ2xlQWN0aXZlKClcclxuICAgICogQHBhcmFtICBOb2RlIHRyZWVOb2RlQ29uXHJcbiAgICAqIOWIh+aNoumrmOS6rlxyXG4gICAgKi9cclxuICB0b2dnbGVBY3RpdmUodHJlZU5vZGVDb24pIHtcclxuICAgIHRoaXMuYWN0aXZlSXRlbSAmJiB0aGlzLmFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB0cmVlTm9kZUNvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gdHJlZU5vZGVDb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogQG1ldGhvZCB0b2dnbGVJdGFsaWMoKVxyXG4gICAgKiBAcGFyYW0gIE5vZGUgc3BhblRpdGxlXHJcbiAgICAqIOWIh+aNoumrmOS6rlxyXG4gICAgKi9cclxuICB0b2dnbGVJdGFsaWMoc3BhblRpdGxlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVRpdGxlICYmIHRoaXMuYWN0aXZlVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaXRhbGljJyk7XHJcbiAgICBzcGFuVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRhbGljJyk7XHJcbiAgICB0aGlzLmFjdGl2ZVRpdGxlID0gc3BhblRpdGxlO1xyXG4gIH1cclxuIFxyXG4gIC8qKlxyXG4gICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50KClcclxuICAgICog5riF6Zmk57uR5a6a5LqL5Lu2XHJcbiAgICAqIEByZXR1cm4gbnVsbFxyXG4gICAgKi9cclxuICByZW1vdmVFdmVudCgpIHtcclxuICAgIHRoaXMuZG9tUmVmcy50cmVlV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImNsaWNrXCIsXHJcbiAgICAgIHRoaXMuY2xpY2tIYW5kbGUsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgLy8gdGhpcy5kb21SZWZzLnRyZWVXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAvLyAgIFwiZGJsY2xpY2tcIixcclxuICAgIC8vICAgdGhpcy5kYmxjbGlja0hhbmRsZSxcclxuICAgIC8vICAgZmFsc2VcclxuICAgIC8vICk7XHJcbiAgICB0aGlzLmNsaWNrSGFuZGxlID0gbnVsbDtcclxuICAgIC8vIHRoaXMuZGJsY2xpY2tIYW5kbGUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEBtZXRob2QgZ2V0QWN0aXZlSXRlbSgpXHJcbiAgICAqIOiOt+WPlumrmOS6rueahOiKgueCuVxyXG4gICAgKiBAcmV0dXJuIE5vZGVcclxuICAgICovXHJcbiAgZ2V0QWN0aXZlSXRlbSgpIHtcclxuICAgIGlmKHRoaXMuYWN0aXZlSXRlbSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC8qKlxyXG4gICAgKiBAbWV0aG9kIGRlc3Ryb3llZCgpXHJcbiAgICAqIOmUgOavgVRyZWXoioLngrlcclxuICAgICogQHJldHVybiBudWxsXHJcbiAgICAqL1xyXG4gIGRlc3Ryb3llZCgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcclxuICAgIHRoaXMub3B0cy5iYXNlTm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbVJlZnMudHJlZVdyYXBwZXIpOyAgXHJcbiAgfTtcclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhc3NpZ24iLCJPYmplY3QiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY3JlYXRlTm9kZSIsImh0bWxTdHIiLCJkaXYiLCJpbm5lckhUTUwiLCJjaGlsZE5vZGVzIiwib3B0aW9ucyIsIm9wdHMiLCJkb21SZWZzIiwiYWN0aXZlSXRlbSIsImFjdGl2ZVRpdGxlIiwidHJlZU5vZGVDb250ZW50cyIsImluaXREb20iLCJpbml0U3RhdGUiLCJiaW5kRXZlbnQiLCJhcHBlbmRCYXNlTm9kZSIsInRoaXMiLCJ0cmVlRGF0YSIsIkFycmF5IiwiVHlwZUVycm9yIiwidHJlZVdyYXBwZXIiLCJ0ZW1wbGF0ZXMiLCJ0cmVlQmFzZU5vZGUiLCJpbml0VHJlZSIsInBhcmVudE5vZGUiLCJncm91cCIsImRhdGEiLCJsZXZlbCIsInRyZWVOb2RlIiwidHJlZU5vZGVDb250ZW50IiwibGVuIiwiZm9sZGVyIiwidGl0bGUiLCJmcm9udEljb25DbGFzc05hbWUiLCJwYWRkaW5nTGVmdCIsIm5vZGVEYXRhIiwicHVzaCIsImdyb3VwTGV2ZWwiLCJjaGlsZHJlbiIsInRyZWVHcm91cCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImV4cGFuZCIsIm5leHRFbGVtZW50U2libGluZyIsImRpc3BsYXkiLCJiYXNlTm9kZSIsInRyZWVOb2RlQ29uIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJvZmZzZXRIZWlnaHQiLCJzcGVlZCIsImFuaW1hdGVTcGVlZCIsImdldEF0dHJpYnV0ZSIsIm92ZXJmbG93IiwiZGlzdGFuY2UiLCJzdGVwIiwiTWF0aCIsImNlaWwiLCJoZWlnaHQiLCJzdGFydCIsImNsaWNrSGFuZGxlIiwiZSIsImV2dCIsImV2ZW50Iiwic3JjRWxlbWVudCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImhhc0F0dHJpYnV0ZSIsInRvZ2dsZUV4cGFuZCIsInRvZ2dsZUFjdGl2ZSIsImNsaWNrIiwiX3RoaXMiLCJkYmxjbGlja0hhbmRsZSIsImVsIiwic2VsZWN0b3IiLCJzcGFuVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImVycm9yIiwidG9nZ2xlSXRhbGljIiwiZGJsY2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwic2xpZGVBbmltYXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50IiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJ1TEFBQSxTQUFxQkEsRUFBS0MsUUFDWCxJQUFSQSxJQUFpQkEsRUFBTSxJQUM1QixJQUFJQyxFQUFXRCxFQUFJQyxTQUVuQixHQUFLRixHQUEyQixvQkFBYkcsU0FBbkIsQ0FFQSxJQUFJQyxFQUFPRCxTQUFTQyxNQUFRRCxTQUFTRSxxQkFBcUIsUUFBUSxHQUM5REMsRUFBUUgsU0FBU0ksY0FBYyxTQUNuQ0QsRUFBTUUsS0FBTyxXQUVJLFFBQWJOLEdBQ0VFLEVBQUtLLFdBQ1BMLEVBQUtNLGFBQWFKLEVBQU9GLEVBQUtLLFlBS2hDTCxFQUFLTyxZQUFZTCxHQUdmQSxFQUFNTSxXQUNSTixFQUFNTSxXQUFXQyxRQUFVYixFQUUzQk0sRUFBTUssWUFBWVIsU0FBU1csZUFBZWQsaXZJQ2xCMUNlLEVBQVNDLE9BQU9ELE9BQ2hCQyxPQUFPRCxPQUNQLFNBQVNFLE9BQ0YsSUFBSUMsRUFBSSxFQUFHQSxFQUFJQyxVQUFVQyxPQUFRRixJQUFLLEtBQ3JDRyxFQUFTRixVQUFVRCxPQUNsQixJQUFJSSxLQUFPRCxFQUNWTCxPQUFPTyxVQUFVQyxlQUFlQyxLQUFLSixFQUFRQyxPQUN4Q0EsR0FBT0QsRUFBT0MsV0FJcEJMLEdBUVRTLEVBQWEsU0FBU0MsT0FDcEJDLEVBQU16QixTQUFTSSxjQUFjLGdCQUM3QnNCLFVBQVlGLEVBQ1RDLEVBQUlFLFdBQVcsaUNDdkJWQyxxSEFrQkxDLEtBQU9qQixFQUFPLEdBakJDLFVBQ1IsaUJBQ0csZ0JBQ0Msa0JBQ0osc0JBQ1UseUJBQ0MsNEJBQ1gsbUJBQ0gsdUJBQ0ksME9BUXVCZ0IsUUFDL0JFLFFBQVUsUUFDVkMsV0FBYSxVQUNiQyxZQUFjLFVBQ2RGLFFBQVFHLGlCQUFtQixRQUUzQkMsVUFDRkMsWUFDQUMsWUFDQUMsaUJBQ0lDLHNEQVNGQSxLQUFLVCxLQUFLVSxvQkFBb0JDLGFBQzNCLElBQUlDLFVBQVUseUNBRWpCWCxRQUFRWSxZQUFjbkIsRUFBV2UsS0FBS1QsS0FBS2MsVUFBVUQsa0JBQ3JEWixRQUFRYyxhQUFlckIsRUFBV2UsS0FBS1QsS0FBS2MsVUFBVUMsbUJBQ3REQyxTQUNIUCxLQUFLUixRQUFRWSxZQUNiSixLQUFLUixRQUFRYyxhQUNiTixLQUFLVCxLQUFLVSxTQUNWLEdBR0tELHNDQWFBUSxFQUFZQyxFQUFPQyxFQUFNQyxXQUM1QkMsU0FBVUMsU0FDTHBDLEVBQUksRUFBR3FDLEVBQU1KLEVBQUsvQixPQUFRRixFQUFJcUMsRUFBS3JDLElBQUssR0FFcENRLEVBQVdlLEtBQUtULEtBQUtjLFVBQVVPLFlBQ3hCM0IsRUFBV2UsS0FBS1QsS0FBS2MsVUFBVVEsa0JBQzFCLElBQW5CSCxFQUFLakMsR0FBR3NDLFNBQ00zQiwrRUFDZHNCLEVBQUtqQyxHQUFHdUMsZ0JBRzJCLE9BQWpDaEIsS0FBS1QsS0FBSzBCLHFCQUNJN0IsMkNBQ2RzQixFQUFLakMsR0FBR3VDLGtCQUdNNUIsK0VBQ2RzQixFQUFLakMsR0FBR3VDLGtCQUtFbkQsTUFBTXFELFlBQWNQLEVBQVFYLEtBQUtULEtBQUsyQixZQUFjLE9BRXBEQyxTQUFXVCxFQUFLakMsUUFDM0JlLFFBQVFHLGlCQUFpQnlCLEtBQUtQLEtBQzFCM0MsWUFBWTJDLEtBQ2YzQyxZQUFZMEMsS0FDUDFDLFlBQVl1QyxPQUNuQlksRUFBYVYsTUFDTSxJQUFuQkQsRUFBS2pDLEdBQUdzQyxRQUE2QyxFQUExQkwsRUFBS2pDLEdBQUc2QyxTQUFTM0MsT0FBWSxTQUV0RDRDLEVBQVl0QyxFQUFXZSxLQUFLVCxLQUFLYyxVQUFVa0IsZ0JBQzFDaEIsU0FBU0ssRUFBVVcsRUFBV2IsRUFBS2pDLEdBQUc2QyxTQUFVRCxpREFZbkQxQixFQUFxQkssS0FBS1IsUUFBMUJHLGlCQUNHbEIsRUFBSSxFQUFHcUMsRUFBTW5CLEVBQWlCaEIsT0FBUUYsRUFBSXFDLEVBQUtyQyxJQUFLLEtBQ3ZEMEMsRUFBV3hCLEVBQWlCbEIsR0FBRzBDLFVBRVgsSUFBcEJBLEVBQVNKLFVBQ010QyxHQUFHK0MsYUFBYSxPQUFPLFlBQ3ZCL0MsR0FBR1QsV0FBV3lELFVBQVVDLElBQUksY0FDNUJqRCxHQUFHVCxXQUFXeUQsVUFBVUMsSUFBSSxlQUNyQixJQUFwQlAsRUFBU1EsVUFDTWxELEdBQUdULFdBQVd5RCxVQUFVQyxJQUFJLFVBQzVCakQsR0FBRytDLGFBQWEsVUFBVSxNQUUxQi9DLEdBQUdtRCxtQkFBbUIvRCxNQUFNZ0UsUUFBVSxXQUd4Q3BELEdBQUdULFdBQVd5RCxVQUFVQyxJQUFJLGlCQUN4Q25DLEtBQUswQixvQkFBc0J0QixFQUFpQmxCLEdBQUdULFdBQVd5RCxVQUFVQyxJQUFJMUIsS0FBS1QsS0FBSzBCLDRCQUdwRmpCLG1EQVdGVCxLQUFLdUMsU0FBUzVELFlBQVk4QixLQUFLUixRQUFRWSxrREFVakMyQixHQUVOQyxPQUFPQywrQkFDSEEsc0JBQXdCLFNBQVVDLGNBQzFCQSxFQUFJLFlBSWpCQyxTQUNBQyxnQkFDSXBDLEtBQUtULEtBQUs4QyxrQkFDWCxXQUNLLGFBRUwsU0FDSyxZQUVMLFNBQ0ssT0FHUjVCLEVBQVFzQixFQUFZSCxzQkFDbUIsVUFBdkNHLEVBQVlPLGFBQWEsVUFBdUIsR0FDbkM3QixFQUFNMEIsZUFDZnRFLE1BQU0wRSxTQUFXLGFBQ2pCQyxFQUFXTCxHQUVGLFNBQVBNLFVBQ29CQyxLQUFLQyxLQUFLUixFQUFlQyxLQUN6Q3ZFLE1BQU0rRSxPQUFTSixFQUFXLEtBQ1IsRUFBcEJBLEVBSkssU0FLQVIsT0FBT0Msc0JBQXNCUSxLQUU5QjVFLE1BQU0rRSxPQUFTLEtBQ2YvRSxNQUFNZ0UsUUFBVSxTQUNoQmhFLE1BQU0wRSxTQUFXLFVBSzFCLEdBRUMxRSxNQUFNZ0UsUUFBVSxVQUNoQmhFLE1BQU0wRSxTQUFXLFdBQ1I5QixFQUFNMEIsZUFDZnRFLE1BQU0rRSxPQUFTLE1BRWpCSixFQUFXTCxFQUNYVSxFQUFRLEdBQ0MsU0FBUEosVUFDY0MsS0FBS0MsS0FBS0gsRUFBV0osS0FDL0J2RSxNQUFNK0UsT0FBU0MsRUFBUSxLQUNOLEVBQW5CTCxFQUFXSyxTQUNKYixPQUFPQyxzQkFBc0JRLEtBR2hDNUUsTUFBTStFLE9BQVMsa0VBZ0J4QkUsWUFBYyxnQkFDWEMsRUFBSUMsR0FBT2hCLE9BQU9pQixNQUNsQnpFLEVBQVN1RSxFQUFFdkUsUUFBVXVFLEVBQUVHLFdBR3pCbkIsRUFBMEIsUUFGZHZELEVBQU8yRSxRQUFRQyxjQUVPNUUsRUFBU0EsRUFBT2dDLFdBQ2xEdUIsRUFBWXNCLGFBQWEsWUFDdEJDLGFBQWF2QixNQUVid0IsYUFBYXhCLEtBQ2J4QyxLQUFLaUUsT0FBU0MsRUFBS2xFLEtBQUtpRSxNQUFNVCxFQUFHaEIsRUFBWVosaUJBS2pEdUMsZUFBaUIsZ0JEMU1MQyxFQUFJQyxFQzJNYmIsRUFBSUMsR0FBT2hCLE9BQU9pQixNQUNsQnpFLEVBQVN1RSxFQUFFdkUsUUFBVXVFLEVBQUVHLFdBRXpCbkIsRUFBMEIsUUFEZHZELEVBQU8yRSxRQUFRQyxjQUNPNUUsRUFBU0EsRUFBT2dDLGVBQ2xEdUIsRUFBWXNCLGFBQWEsUUFBUyxLQUNoQ1EsR0RoTmFELEVDZ05pQixvQkRoTnJCRCxFQ2dOUzVCLEdEL01sQitCLGNBQWNGLEdBQ3BCRCxFQUFHRyxjQUFjRixHQUNqQkcsUUFBUUMsTUFBTSxlQUFpQkosRUFBVyxjQzhNbkNLLGFBQWFKLEtBQ04sT0FFUHRFLEtBQUsyRSxVQUFZVCxFQUFLbEUsS0FBSzJFLFNBQVNuQixFQUFHaEIsRUFBWVosaUJBSXZEM0IsUUFBUVksWUFBWStELGlCQUFpQixRQUFTbkUsS0FBSzhDLGFBQWEsR0FFOUQ5QywwQ0FRSStCLEdBQytCLFNBQXZDQSxFQUFZTyxhQUFhLGFBQ2R0RSxXQUFXeUQsVUFBVTJDLE9BQU8sVUFDNUI1QyxhQUFhLFNBQVUsYUFFdkJ4RCxXQUFXeUQsVUFBVUMsSUFBSSxVQUN6QkYsYUFBYSxTQUFVLGNBSWhDK0IsYUFBYXhCLFFBR2JzQyxhQUFhdEMsd0NBU1BBLFFBQ050QyxZQUFjTyxLQUFLUCxXQUFXZ0MsVUFBVTJDLE9BQU8sWUFDeEMzQyxVQUFVQyxJQUFJLGVBQ3JCakMsV0FBYXNDLHVDQVFQOEIsUUFDTm5FLGFBQWVNLEtBQUtOLFlBQVkrQixVQUFVMkMsT0FBTyxZQUM1QzNDLFVBQVVDLElBQUksZUFDbkJoQyxZQUFjbUUsNkNBU2RyRSxRQUFRWSxZQUFZa0Usb0JBQ3ZCLFFBQ0F0RSxLQUFLOEMsYUFDTCxRQU9HQSxZQUFjLGdEQVVoQjlDLEtBQUtQLGtCQUNDTyxLQUFLUCxvREFVVDhFLG1CQUNBaEYsS0FBS3VDLFNBQVMwQyxZQUFZeEUsS0FBS1IsUUFBUVkifQ==
