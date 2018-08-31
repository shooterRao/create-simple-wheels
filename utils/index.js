/**
 * 对象浅拷贝
 * @param {Object} target
 * @returns {Object}
 */
const assign = Object.assign
  ? Object.assign
  : function(target) {
      for (let i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

/**
 * 对象深拷贝
 * @param {Object} data
 * @returns {Object} map[key]
 */
const deepCopy = obj => {
  if (typeof obj !== "object") return;
  const newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
};

/**
 * createNode
 * @param {String} htmlStr
 * @returns {DomNode}
 */
const createNode = htmlStr => {
  const div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.childNodes[0];
};

/**
 * 节点选择器
 * @param {DomNode} el
 * @param {String} selector
 * @returns {DomNode}
 */
const query = (el, selector) => {
  return el.querySelector(selector)
    ? el.querySelector(selector)
    : console.error("Cannot find " + selector + " of el!");
};

/**
 * 返回所有节点
 * @param {DomNode} el
 * @param {String} selector
 * @returns {NodeList}
 */
const queryAll = (el, selector) => {
  return el.querySelectorAll(selector);
};

/**
 * 节流函数
 * @param {Function} func
 * @param {Number} wait
 * @param {Object} options
 * @returns {Function}
 */
const throttle = (func, wait, options) => {
  let context, args, result;

  let timeout = null;

  let previous = 0;

  if (!options) options = {};

  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);

    if (!timeout) context = args = null;
  };

  return function() {
    const now = Date.now();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;

      result = func.apply(context, args);

      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

/**
 * 去抖函数
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 * @returns
 */
const debounce = (func, wait, immediate) => {
  let timeout, args, context, timestamp, result;

  const later = function() {
    var last = new Date().getTime() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last); // wait - last可以少执行很多次
    } else {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    }
  };

  return function() {
    context = this;
    args = arguments;

    // 每次触发函数，更新时间戳
    timestamp = new Date().getTime();

    // timeout判断很重要，它是判断是否首次触发的重要字段

    const callNow = immediate && !timeout;

    // 首次timeout为肯定为null
    if (!timeout) {
      // 此分支只执行一次
      timeout = setTimeout(later, wait);
    }

    // 立即触发
    if (callNow) {
      result = func.apply(context, args);
      // 解除引用
      context = args = null;
    }
    return result;
  };
};

/**
 * 判断是否为dom节点
 * @param {DomNode} item
 * @returns
 */
const isDOM = item => {
  return typeof HTMLElement === "function"
    ? item instanceof HTMLElement
    : item &&
        typeof item === "object" &&
        item.nodeType === 1 &&
        typeof item.nodeName === "string";
};

/**
 * 判断对象类型
 * @param {Object} obj
 * @returns {String} map[key]
 */
const typeOf = obj => {
  const toString = Object.prototype.toString;
  const map = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
};

export {
  assign,
  deepCopy,
  createNode,
  debounce,
  throttle,
  query,
  queryAll,
  isDOM,
  typeOf
};
