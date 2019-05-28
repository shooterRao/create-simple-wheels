/**
 * @class SimplePollingAction
 * @param {Function}  callback[回调函数]
 * @param {Number}  time[轮询时间]
 * @param {immediate}  immediate[是否立即执行回调函数]
 * @description  通过给定的TIME进行轮询操作
 */
export default class SimplePollingAction {
  constructor(callback, time = 1000, immediate = false) {
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
      } else {
        throw new Error('参数1 必须是个函数');
      }
    } else {
      this.callback = null;
    }
    // timer控制
    this.timer = null;
  }

  // 执行轮询
  start() {
    // 是否立即执行
    this.immediate && this.callback();
    this.running = true;
    const onAction = () => {
      this.timer = setTimeout(() => {
        if (this.running) {
          this.callback();
          return onAction();
        }
        return null;
      }, this.time);
    };
    onAction();
    return this;
  }

  // 取消轮询
  cancel() {
    this.running = false;
    this.timer && clearTimeout(this.timer);
    this.timer = null;
  }
}
