/**
 * 对象浅拷贝
 * @param {Object} target
 * @returns {Object}
 */

type AssignTarget  = {
  [x: string]: any;
}
export const assign = Object.assign
  ? Object.assign
  : function(target: Object): Object {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            (<AssignTarget>target)[key] = source[key];
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
export const createNode = (htmlStr: string): any => {
  const div = document.createElement('div');
  div.innerHTML = htmlStr;
  return div.childNodes[0];
};

/**
 * 节点选择器
 * @param {DomNode} el
 * @param {String} selector
 * @returns {DomNode}
 */
export const query = (el: HTMLElement, selector: string): HTMLElement | null => {
  return el.querySelector(selector)
    ? el.querySelector(selector)
    : null
};

/**
 * 返回所有节点
 * @param {DomNode} el
 * @param {String} selector
 * @returns {NodeList}
 */
export const queryAll = (el: HTMLElement, selector: string): NodeList => {
  return el.querySelectorAll(selector);
};

/**
 * 判断是否为dom节点
 * @param {DomNode} item
 * @returns
 */
export const isDOM = (item: HTMLElement): boolean => {
  return typeof HTMLElement === 'function'
    ? item instanceof HTMLElement
    : item && typeof item === 'object' && item.nodeType === 1 && typeof item.nodeName === 'string';
};

// 判断是否有子节点
type NodeData = {
  children?: [];
}

export const hasChild = (nodeData: NodeData): boolean => {
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
export const nextFrame = (fn: () => void) => {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(fn)
  } else {
    window.setTimeout(fn, 16)
  }
}
