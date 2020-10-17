/**
 * @class SimplePollingAction
 * @param {Function}  callback[回调函数]
 * @param {Number}  time[轮询时间]
 * @param {immediate}  immediate[是否立即执行回调函数]
 * @description  通过给定的TIME进行轮询操作
 */
export default class SimplePollingAction {
    running: boolean;
    immediate: boolean;
    timer: any;
    time: number;
    callback: (() => void) | null;
    constructor(callback: () => void, time?: number, immediate?: boolean);
    start(): this;
    cancel(): void;
}
