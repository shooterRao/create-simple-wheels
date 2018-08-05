/**
 * 对象浅拷贝
 * @param {Object} target
 * @returns {Object}
 */
var assign = Object.assign
  ? Object.assign
  : function(target) {
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
var createNode = function(htmlStr) {
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
var query = function(el, selector) {
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
var queryAll = function(el, selector) {
  return el.querySelectorAll(selector);
};

/**
 * 节流函数
 * @param {Function} func
 * @param {Number} wait
 * @param {Object} options
 * @returns {Function}
 */
var throttle = function(func, wait, options) {
  var context, args, result;

  var timeout = null;

  var previous = 0;

  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);

    if (!timeout) context = args = null;
  };

  return function() {
    var now = Date.now();

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
var debounce = function(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
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

    var callNow = immediate && !timeout;

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
var isDOM = item => {
  return typeof HTMLElement === "function"
    ? item instanceof HTMLElement
    : item &&
        typeof item === "object" &&
        item.nodeType === 1 &&
        typeof item.nodeName === "string";
};

export { assign, createNode, debounce, throttle, query, queryAll, isDOM };
