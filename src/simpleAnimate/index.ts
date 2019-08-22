type AnimateFn = (time: number, beginValue: number, changeValue: number, during: number) => number;

type AnimateType = {
  [x: string]: AnimateFn;
};

type DefaultOpts = {
  from: number;
  to: number;
  during: number;
  type: string;
  callback(value: number): void;
};

type SimpleAnimate = {
  animateType: AnimateType;
  defaultOpts: DefaultOpts;
  extend(type: string): void;
  play(options: DefaultOpts): void;
};

const simpleAnimate: SimpleAnimate = {
  // 暂时只有这几个动画函数算法
  // 需要增加参考 https://github.com/zhangxinxu/Tween/blob/master/tween.js
  // t: current time, b: begInnIng value, c: change In value, d: duration
  animateType: {
    // 匀速
    linear(t, b, c, d) {
      return (c * t) / d + b;
    },
    // 先慢后快
    easeInQuad(t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    // 先快后慢
    easeOutQuad(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    }
  },
  defaultOpts: {
    from: 0,
    to: 1000,
    during: 300,
    type: 'easeInQuad',
    callback() {}
  },
  // 增加动画算法
  extend(type: string) {
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
  play(options) {
    return new Promise(resolve => {
      const opts = Object.assign({}, this.defaultOpts, options);
      const { to, from, type, during, callback } = opts;
      // 计算总共的帧数
      // 1秒 = 60帧
      // 1帧 = 16.7ms
      // 根据毫秒数得出总共的帧数
      const durFps = Math.ceil(during / 16.7);
      // requestAnimationFrame的兼容处理
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = fn => window.setTimeout(fn, 16.7);
      }
      // 动画运动实际上就是 0 ~ 动画总帧数 的过程
      let start = 0;
      // 运动
      const step = () => {
        // 当前的运动位置
        const value = this.animateType[type](start, from, to - from, durFps);
        callback(value);
        // 时间递增
        start++;
        // 如果还没有运动到位，继续
        if (start <= durFps) {
          window.requestAnimationFrame(step);
        } else {
          // 动画结束，在promise.then中执行相关操作
          resolve();
        }
      };
      // 开始执行动画
      step();
    });
  }
};

export default simpleAnimate;
