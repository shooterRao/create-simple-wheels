(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.simplePollingAction = factory());
}(this, function () { 'use strict';

  /**
   * @class SimplePollingAction
   * @param {Function}  callback[回调函数]
   * @param {Number}  time[轮询时间]
   * @param {immediate}  immediate[是否立即执行回调函数]
   * @description  通过给定的TIME进行轮询操作
   */
  var SimplePollingAction = /** @class */ (function () {
      function SimplePollingAction(callback, time, immediate) {
          if (time === void 0) { time = 1000; }
          if (immediate === void 0) { immediate = false; }
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
              }
              else {
                  throw new Error('参数1 必须是个函数');
              }
          }
          else {
              this.callback = null;
          }
          // timer控制
          this.timer = null;
      }
      // 执行轮询
      SimplePollingAction.prototype.start = function () {
          var _this = this;
          // 是否立即执行
          this.immediate && this.callback && this.callback();
          this.running = true;
          var onAction = function () {
              _this.timer = setTimeout(function () {
                  if (_this.running) {
                      _this.callback && _this.callback();
                      return onAction();
                  }
                  return null;
              }, _this.time);
          };
          onAction();
          return this;
      };
      // 取消轮询
      SimplePollingAction.prototype.cancel = function () {
          this.running = false;
          this.timer && clearTimeout(this.timer);
          this.timer = null;
      };
      return SimplePollingAction;
  }());

  return SimplePollingAction;

}));
//# sourceMappingURL=simplePollingAction.js.map
