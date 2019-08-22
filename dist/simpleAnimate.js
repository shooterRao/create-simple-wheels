(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.simpleAnimate = factory());
}(this, function () { 'use strict';

  var simpleAnimate = {
      // 暂时只有这几个动画函数算法
      // 需要增加参考 https://github.com/zhangxinxu/Tween/blob/master/tween.js
      // t: current time, b: begInnIng value, c: change In value, d: duration
      animateType: {
          // 匀速
          linear: function (t, b, c, d) {
              return (c * t) / d + b;
          },
          // 先慢后快
          easeInQuad: function (t, b, c, d) {
              return c * (t /= d) * t + b;
          },
          // 先快后慢
          easeOutQuad: function (t, b, c, d) {
              return -c * (t /= d) * (t - 2) + b;
          }
      },
      defaultOpts: {
          from: 0,
          to: 1000,
          during: 300,
          type: 'easeInQuad',
          callback: function () { }
      },
      // 增加动画算法
      extend: function (type) {
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
      play: function (options) {
          var _this = this;
          return new Promise(function (resolve) {
              var opts = Object.assign({}, _this.defaultOpts, options);
              var to = opts.to, from = opts.from, type = opts.type, during = opts.during, callback = opts.callback;
              // 计算总共的帧数
              // 1秒 = 60帧
              // 1帧 = 16.7ms
              // 根据毫秒数得出总共的帧数
              var durFps = Math.ceil(during / 16.7);
              // requestAnimationFrame的兼容处理
              if (!window.requestAnimationFrame) {
                  window.requestAnimationFrame = function (fn) { return window.setTimeout(fn, 16.7); };
              }
              // 动画运动实际上就是 0 ~ 动画总帧数 的过程
              var start = 0;
              // 运动
              var step = function () {
                  // 当前的运动位置
                  var value = _this.animateType[type](start, from, to - from, durFps);
                  callback(value);
                  // 时间递增
                  start++;
                  // 如果还没有运动到位，继续
                  if (start <= durFps) {
                      window.requestAnimationFrame(step);
                  }
                  else {
                      // 动画结束，在promise.then中执行相关操作
                      resolve();
                  }
              };
              // 开始执行动画
              step();
          });
      }
  };

  return simpleAnimate;

}));
//# sourceMappingURL=simpleAnimate.js.map
